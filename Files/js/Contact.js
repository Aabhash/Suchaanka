function validate(){
				
				
				
				var	firstname= document.f1.fname.value;
				var lastname=document.f1.lname.value;
				var email=document.f1.email.value;
				var sub=document.f1.subject.value;
				var dotpos = email.lastIndexOf('.');
				var firstdot = email.indexOf('.');
				var atpos = email.indexOf('@');
				if(firstname == '' ){
					alert("First Name should not be empty");
					return false;
				}
				else if(lastname ==''){
					alert("Last Name should not be empty");
					return false;
				}
				else if(sub ==''){
					alert("Subject should not be empty");
					return false;
				}
				
				else if(email ==''){
					alert('Email should not be empty');
					return false;
				}
				else if(atpos < 0 || dotpos<0){
					alert('Email should contain @ and . sign');
					return false;
				}
				else if(dotpos==0 || atpos ==0 || firstdot==0){
					alert('Email should not contain @ or dot at begining');
					return false;
				}
				else if(dotpos - atpos <3){
					alert('There should be atleast two characters between @ and dot sign');
					return false;
				}
				else if(email.length - dotpos < 3){
					alert('Atleast two characters required after last dot');
					return false;
				}				
				
				
				return true;
			}