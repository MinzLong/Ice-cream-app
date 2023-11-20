
function check() {
	var uname = document.getElementById("username").value;
	var password1 = document.getElementById("password1").value;
	var password2 = document.getElementById("password2").value;
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var genm = document.getElementById("genm").checked;
	var genf = document.getElementById("genf").checked;
	var icecream1 = document.getElementById("ice-cream1").checked;
	var icecream2 = document.getElementById("ice-cream2").checked;
	var icecream3 = document.getElementById("ice-cream3").checked;
    var icecream4 = document.getElementById("ice-cream4").checked;
    var icecream5 = document.getElementById("ice-cream5").checked;
	var errMsg = "";
	var result = true;
	var special = /^[a-zA-Z ]+$/;
	var pattern_special = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,100}$/;

	if (uname == "") {
		errMsg += "Username should not be empty.\n";
		document.getElementById("username").style.borderColor='red';
	}
	if (password1.length < 9) {
		errMsg += "Password has to have more than 9 characters.\n";
		document.getElementById("password1").style.borderColor='red';
	}
	if(!password1.match(pattern_special)){
		errMsg += "Password has to contain at least one numeric digit, one uppercase and one lowercase letter .\n";
		document.getElementById("password1").style.borderColor='red';
	}
	if (password2 == "") {
		errMsg += "Confirmed Password should not be empty.\n";
		document.getElementById("password2").style.borderColor='red';
	}
	if (password1 != password2) {
		errMsg += "Confirmed passwords do not match.\n";
		document.getElementById("password2").style.borderColor='red';
		document.getElementById("password1").style.borderColor='red';
	}
	if (email == "") {
		errMsg += "Email should not be empty.\n";
		document.getElementById("email").style.borderColor='red';
	}
	if (name == "") {
		errMsg += "Your name should not be empty.\n";
		document.getElementById("name").style.borderColor='red';
	}
	if (!name.match(special)) {
		errMsg += "Your name must not have special charactist.\n";
		document.getElementById("name").style.borderColor='red';
	}
	if ((genm == "") && (genf == "")) {
		errMsg += "Gender must be selected.\n";
	}
	if ((icecream1 == "") && (icecream2 == "") && (icecream3 == "") && (icecream4 == "") && (icecream5 == "")) {
		errMsg += "You must choose at least 1 type of ice-cream flavor.\n";
	}
	if (errMsg != "") {
		alert(errMsg);
		result = false;
	}
	return result;
}

function init() {
	var registForm = document.getElementById("registerform");
	registForm.onsubmit = check;
}

window.onload = init;