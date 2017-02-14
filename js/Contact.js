
function validate() {
	var re = /\S+@\S+\.\S+/;
	var firstname = document.getElementById('fname').value;
	var lastname = document.getElementById('lname').value;
	var sub = document.getElementById('subject').value;
	var em = document.getElementById('e-mail').value;
	var comment=document.getElementById('comment').value;

	var submit=false;
	//Trim first and last spaces from all values
	firstname=firstname.trim();
	lastname=lastname.trim();
	sub=sub.trim();
	em=em.trim();
	comment=comment.trim();

	if (firstname == '') {
		document.getElementById('fname_error').innerHTML = "First Name Is Required";
		fname.blur();
		//return false;
	}

	if (lastname == '') {
		document.getElementById('lname_error').innerHTML = "Last Name Is Required";
		lname.blur();
		//return false;
	}
	if (sub == '') {
		document.getElementById('subject_error').innerHTML = "Subject Is Required";
		subject.blur();
		//return false;
	}
	if (em == '') {
		document.getElementById('e-mail_error').innerHTML = "Email Is Required";
		e-mail.blur();
		//return false;
	}
	if(comment=='')
	{
		document.getElementById('comment_error').innerHTML = "Comment Is Required";
		comment.blur();
		//return false;
	}

	if (em != '') {
		if (!(re.test(em))) {

			document.getElementById('e-mail_error').innerHTML = "Email Is INVALID!";
			e-mail.blur();
			//return false;
		}
	}
	else{
		submit=true;
	}

	return submit;
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

function sendMail()
{
	var res=validate();
    alert(res); 
}