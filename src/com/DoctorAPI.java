package com;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mysql.fabric.Response;

/**
 * Servlet implementation class DoctorAPI
 */
@WebServlet("/DoctorAPI")
public class DoctorAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
       Doctor doctor = new Doctor();
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DoctorAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String output = doctor.insertDoctor(request.getParameter("id"),
				request.getParameter("firstname"),
				request.getParameter("lastname"),
				request.getParameter("phone"),
				request.getParameter("desc"));
		
		response.getWriter().write(output);
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Map paras = getParasMap(request);
		String output = doctor.updateDoctor(paras.get("dno").toString(),
		paras.get("id").toString(),
		paras.get("firstname").toString(),
		paras.get("lastname").toString(),
		paras.get("phone").toString(),
		paras.get("desc").toString());
		
		response.getWriter().write(output);
	}


	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		Map paras = getParasMap(request);
		String output = doctor.deleteDoctor(paras.get("Dno").toString());
		response.getWriter().write(output);
		}
	
	private Map getParasMap(HttpServletRequest request) {
		// TODO Auto-generated method stub
Map<String, String> map = new HashMap<String, String>();
		
		try{
		
			Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
		
			String queryString = scanner.hasNext() ?
		
			scanner.useDelimiter("\\A").next() : "";
		
			scanner.close();
		
			String[] params = queryString.split("&");
		
			for (String param : params){
		
			
				String[] p = param.split("=");
			
				map.put(p[0], p[1]);
			
			}
		}catch (Exception e){}
		return map;
	}


}
