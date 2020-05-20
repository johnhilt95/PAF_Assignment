$(document).ready(function() {

	if ($("#alertSuccess").text().trim() == "") {
		$("#alertSuccess").hide();
	}

	$("#alertError").hide();
});

$(document).on("click", "#btnSave", function(event) {
	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();

	// Form validation-------------------
	var status = validateItemForm();
	if (status != true) {

		$("#alertError").text(status);
		$("#alertError").show();

		return;
	}

	var type = ($("#hidItemIDSave").val() == "") ? "POST" : "PUT";

	$.ajax({
		url : "DoctorAPI",
		type : type,
		data : $("#formItem").serialize(),
		dataType : "text",
		complete : function(response, status) {
			onItemSaveComplete(response.responseText, status);
		}
	});

	// $("#formItem").submit();

});

function onItemSaveComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#divItemsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}
	$("#hidItemIDSave").val("");
	$("#formItem")[0].reset();
}
$(document).on("click", ".btnRemove", function(event) {
	$.ajax({
		url : "DoctorAPI",
		type : "DELETE",
		data : "DID=" + $(this).data("id"),
		dataType : "text",
		complete : function(response, status) {
			onItemDeleteComplete(response.responseText, status);
		}
	});
});

function onItemDeleteComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			$("#divItemsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}

$(document)
		.on("click",".btnUpdate",function(event) {
					$("#hidItemIDSave").val(
							$(this).closest("tr").find('#hidItemIDUpdate')
									.val());
					$("#id").val(
							$(this).closest("tr").find('td:eq(0)').text());
					$("#firstname").val(
							$(this).closest("tr").find('td:eq(1)').text());
					$("#lastname").val(
							$(this).closest("tr").find('td:eq(2)').text());
					$("#phone").val(
							$(this).closest("tr").find('td:eq(3)').text());
					$("#desc")
							.val($(this).closest("tr").find('td:eq(4)').text());

				});

// CLIENT-MODEL================================================================
function validateItemForm() {
	// Doctor ID
	if ($("#id").val().trim() == "") {

		return "Enter Doctor ID please.";
	}
	// Doctor Name
	if ($("#firstname").val().trim() == "") {

		return "Enter First Name.";
	}
	if ($("#lastname").val().trim() == "") {

		return "Enter Last Name.";
	}
	// Phone No-------------------------------
	if ($("#phone").val().trim() == "") {

		return "Enter mobile Number.";
	}

	var temcard = $("#phone").val().trim();
	if (!(/07[1,2,5,6,7,8][0-9]{7}/)
			.test(temcard)) {

		return "Enter the valid mobile number.";

	}

	// des------------------------
	if ($("#desc").val().trim() == "") {

		return "Enter your Description.";
	}
	
	
	return true;
	
	
}