<%@page import="com.Doctor"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>



<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="ISO-8859-1">
<title>Doctor</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/Doctor.js"></script>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-4">

				<h1> Online Doctor Registration </h1>

				<form id="formItem" name="formItem">

					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="lblName">Doctor ID:
							</span>
						</div>
						<input id="id" name="id" type="text"
							class="form-control form-control-sm">
					</div>
					
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="lblName"> First Name:
							</span>
						</div>
						<input id="firstname" name="firstname" type="text"
							class="form-control form-control-sm">
					</div>
					
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="lblName"> Last Name:
							</span>
						</div>
						<input id="lastname" name="lastname" type="text"
							class="form-control form-control-sm">
					</div>

					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="lblName"> Phone: 
							</span>
						</div>
						<input id="phone" name="phone" type="text"
							class="form-control form-control-sm">
					</div>
					
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="lblName"> Description: 
							</span>
						</div>
						<input id="desc" name="desc" type="text"
							class="form-control form-control-sm">

					</div>



					<input id="btnSave" name="btnSave" type="button" value="Save"
						class="btn btn-primary"> <input type="hidden"
						id="hidItemIDSave" name="hidItemIDSave" value="" >
				</form>

				<div id="alertSuccess" class="alert alert-success"></div>

				<div id="alertError" class="alert alert-danger"></div>


			</div>
			<div class='col-12'>
				<div id="divItemsGrid">

					<%
						Doctor doctor = new Doctor();
					out.print(doctor.readDoctors());
					%>
				</div>

			</div>
		</div>
	</div>
	

</body>
</html>