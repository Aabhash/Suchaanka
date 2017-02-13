
function validate() {

	var re = /\S+@\S+\.\S+/;
	var firstname = document.getElementById('fname').value;
	var lastname = document.getElementById('lname').value;
	var sub = document.getElementById('subject').value;
	var em = document.getElementById('e-mail').value;
	submit = true;

	if (firstname == '') {
		document.getElementById('fname_error').innerHTML = "First Name Is Required";
		fname.blur();
		return false;
	}

	if (lastname == '') {
		document.getElementById('lname_error').innerHTML = "Last Name Is Required";
		lname.blur();
		return false;
	}
	if (sub == '') {
		document.getElementById('subject_error').innerHTML = "Subject Is Required";
		subject.blur();
		return false;
	}

	if (em == '') {
		document.getElementById('e-mail_error').innerHTML = "Email Is Required";
		e-mail.blur();
		return false;
	}
	if (em != '') {
		if (!(re.test(em))) {

			document.getElementById('e-mail_error').innerHTML = "Email Is INVALID!";
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



