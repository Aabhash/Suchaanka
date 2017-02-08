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

	var isValidFirst = checkValidFirst();
	var isValidSecond = checkValidSecond();

	if(buttonText.innerHTML == "NEXT" && isValidFirst)
	{
		changeTable(); 

		pr.style.width ="50%";
		pr.innerHTML = "50%";
		buttonText.innerHTML ="FINISH";
	}
	else if (buttonText.innerHTML == "FINISH" && isValidSecond)
	{
		load(); 

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

}

function checkValidFirst()
{
	var c1 = document.getElementByName("Q1");
	var c2 = document.getElementByName("Q2");
	var c3 = document.getElementByName("Q3");
	var c4 = document.getElementByName("Q4");
	var c5 = document.getElementByName("Q5");
	var x = [c1,c2,c3,c4,c5];
	valid(x);

}

function checkValidSecond()
{
	var c1 = document.getElementByName("Q6");
	var c2 = document.getElementByName("Q7");
	var c3 = document.getElementByName("Q8");
	var c4 = document.getElementByName("Q9");
	var c5 = document.getElementByName("Q10");
	var x = [c1,c2,c3,c4,c5];
	valid(x);
}

function valid(a)
{
	var is = false;
	for(var i = 0; i<x.length; i++)
	{
		var isi = false;
		for(var j = 0; j < x[i].length; j++)
		{
			if(x[i][j].checked == true)
			{
				isi = true;	
				break;
			}
		}		
		if( is == true)
		{
			return true;
		}
	}
	return false;
}
function load()
{
	alert("Load"); 
}