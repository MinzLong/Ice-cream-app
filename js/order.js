// JavaScript Document
function validate() {
	var Phone = document.getElementById("Phone_number").value;
	var email = document.getElementById("email").value;
	var delivery = document.getElementById("delivery").value;
	var billing = document.getElementById("billing").value;
	var bank_number = document.getElementById("Bank").value;
	var deli = document.getElementById("Deli").checked;
	var pick_up = document.getElementById("pick-up").checked;
	var pay_pick_up = document.getElementById("pay_pick_up").checked;
	var pay_online = document.getElementById("pay_online").checked;
	var Error = "";
	var result = true;

	if (deli) {
			if((delivery=="")) {
			Error += "Delivery address shound not be empty\n"
			document.getElementById("delivery").style.borderColor='red';

		}
			if((billing=="")) {
			Error += "Billing address shound not be empty\n"
			billing = document.getElementById("billing").style.borderColor='red';
		}	
	}
	if (Phone == "") {
		Error += "Contact number number shoud not be empty.\n";
		document.getElementById("Phone_number").style.borderColor='red';
	}
	if (email == "") {
		Error += "Email shoud not be empty.\n";
		document.getElementById("email").style.borderColor='red';
	}
	if ((deli == "") && (pick_up == "")) {
		Error += "You have to select delivery type\n";
	}
	if ((pay_pick_up == "") && (pay_online == "")) {
		Error += "A payment method must be selected.\n";
	}
	if ((document.getElementById("visa").checked) && (bank_number.length != 16)) {
		Error += "Visa credit card number has to have 16 digits long.\n";
		document.getElementById("visa").style.borderColor='red';
	}
	if ((document.getElementById("master").checked) && (bank_number.length != 16)) {
		Error += "Mastercard number has to have 16 digits long.\n";
		document.getElementById("master").style.borderColor='red';
	}
	if ((document.getElementById("american").checked) && (bank_number.length != 15)) {
		Error += "Mastercard number has to have 15 digits long.\n";
		document.getElementById("american").style.borderColor='red';
	}
	if (Error != "") {
		alert(Error);
		result = false;
	}
	return result;
}

function init() {
	var orderform = document.getElementById("orderform");
	orderform.onsubmit = validate;
}
window.onload = init;

//~~~~~~~~~same address
function addressFunction() {
	if (document.getElementById("address").checked) {
		document.getElementById("billing").value = document.getElementById("delivery").value;
	}
	else {
		document.getElementById("billing").value = "";
	}
}
window.onchange = addressFunction;

//same add check
function copy() {
	var delivery = document.getElementById("delivery");
	var billing = document.getElementById("billing");
	var radio_check = document.getElementById("address").checked;
	if (radio_check) {
		if (delivery.value) {
			billing.value = delivery.value;
		}
		else {
			alert('Please enter your delivery address first.');
			document.getElementById("delivery").style.borderColor='red';
		
		}	
	}
}

//press delivery will visible the form
function delicheck() {
	if (document.getElementById('Deli').checked) {
		document.getElementById('deliver_check').style.visibility = 'visible';
		document.getElementById('deliver_check').style.float = 'none';
	}
	else{ document.getElementById('deliver_check').style.visibility = 'hidden';
		  document.getElementById('deliver_check').style.float = 'right';}
}

//press online will visible the form
function Onlinecheck() {
	if (document.getElementById('pay_online').checked) {
		document.getElementById('online').style.visibility = 'visible';
		document.getElementById('online').style.float = 'none';
	}
	else{ document.getElementById('online').style.visibility = 'hidden';
		  document.getElementById('online').style.float = 'right';
	}
}

window.onchange = copy();
window.onchange = delicheck();
window.onchange = Onlinecheck();

