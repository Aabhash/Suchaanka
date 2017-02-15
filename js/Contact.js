
function validate() {
	var re = /\S+@\S+\.\S+/;
	var firstname = document.getElementById('fname').value;
	var lastname = document.getElementById('lname').value;
	var sub = document.getElementById('subject').value;

	var em = document.getElementById('e-mail').value;

	var com=document.getElementById('comment').value;

	var x = true;

	if (firstname == '') {
		document.getElementById('fname_error').innerHTML = "First Name Is Required";
		fname.blur();
		x = false;
	}

	if (lastname == '') {
		document.getElementById('lname_error').innerHTML = "Last Name Is Required";
		lname.blur();
		x = false;
	}
	if (sub == '') {
		document.getElementById('subject_error').innerHTML = "Subject Is Required";
		subject.blur();
		x = false;
	}
	if (em == '') {
		document.getElementById('e-mail_error').innerHTML = "Email Is Required";
		e-mail.blur();
		x = false;
	}
	if(com=='')
	{
		document.getElementById('comment_error').innerHTML = "Comment Is Required";
		x = false;
	}

	if (em != '') {
		if (!(re.test(em))) {

			document.getElementById('e-mail_error').innerHTML = "Email Is INVALID!";
			x = false;
		}
	}
	if(x = true)
	{
		alert("Sending mail");
		return true;
	}
	else if(x = false)
	{
		alert("reload");
		return false;
	}
}

function removewarning(e) {
	var y = e.target;
	var m = y.id + '_error';
	var n = document.getElementById(m);
	n.innerHTML = "";
}

function reset(){
	document.getElementById('fname').value = "";
	document.getElementById('lname').value = "";
	document.getElementById('subject').value = "";
	document.getElementById('e-mail').value= "";
	document.getElementById('comment').value = "";

}