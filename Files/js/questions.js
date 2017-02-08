function clearradio()
{
	var all = document.getElementsByTagName("input");
	for( var i = 0; i<all.length; i++)
	{
		all[i].checked = false;
	}
}

function validate()
{
	var buttonText = document.getElementById('buttonspan');
	var x = document.getElementById('pr');

	var isValid = checkValid();

	if(buttonText.innerHTML == "NEXT" && isValidFirst)
	{
		changeTable(); 

		pr.style.width ="50%";
		pr.innerHTML = "50%";
	
	}
	else if (buttonText.innerHTML == "FINISH" && isValidSecond)
	{
		alert("load");	
		pr.style.width ="100%";
		pr.innerHTML = "100%";

		buttonText.innerHTML ="FINISHED";
	}
	else
	{
		alert("Please select an option"); 
	}
}

function changeTable()
{
	var newTable = document.getElementById('QuestionSet2');
	var oldTable = document.getElementById('QuestionSet1');
	
	newTable.style.display="inline";		
	oldTable.style.display="none";
	buttonText.innerHTML ="FINISH";
}

checkValid()
{
}

