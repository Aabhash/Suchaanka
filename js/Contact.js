
function validate() {

	var re = /\S+@\S+\.\S+/;
	var firstname = document.getElementById('fname').value;
	var lastname = document.getElementById('lname').value;
	var sub = document.getElementById('sub').value;
	var em = document.getElementById('em').value;
	submit = true;

	if (firstname == '') {
		document.getElementById('fname_error').innerHTML = "First Name Is Required";
		fname.focus();
		return false;
	}

	if (lastname == '') {
		document.getElementById('lname_error').innerHTML = "Last Name Is Required";
		lname.focus();
		return false;
	}
	if (sub == '') {
		document.getElementById('sub_error').innerHTML = "Subject Is Required";
		return false;
	}

	if (em == '') {
		document.getElementById('em_error').innerHTML = "Email Is Required";
		return false;
	}
	if (em != '') {
		if (!(re.test(em))) {

			document.getElementById('em_error').innerHTML = "Email Is INVALID!";
			return false;
		}
	}
	return submit;
}

function removewarning(e) {
	var y = e.target;
	var m = y.id + '_error';
	var n = document.getElementById(m);
	n.innerHTML = "";
}



