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
	
}
function changeTable()
{
	var newTable = document.getElementById('QuestionSet2');
	var oldTable = document.getElementById('QuestionSet1');
	var buttonText = document.getElementById('buttonspan');
	var x = document.getElementById('pr');

	if(buttonText.innerHTML == "NEXT")
	{
		newTable.style.display="inline";
		oldTable.style.display="none";
		buttonText.innerHTML ="FINISH";

		pr.style.width ="50%";
		pr.innerHTML = "50%";
	}
	else
	{
		if(buttonText.innerHTML == "FINISH")
		{
			pr.style.width ="100%";
			pr.innerHTML = "100%";

			alert("Load");
			buttonText.innerHTML ="FINISHED";
		}
	}

}

