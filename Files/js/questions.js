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

	if(buttonText.innerHTML == "NEXT")
	{
		var isValidFirst = checkValidFirst();
		if(isValidFirst = true)
		{
			changeTable(); 
			pr.style.width ="50%";
			pr.innerHTML = "1/2";
			buttonText.innerHTML ="FINISH";
		}
		else
		{
			alert("Please select an option"); 
		}
	}
	else if (buttonText.innerHTML == "FINISH")
	{
		var isValidSecond = checkValidSecond();
		if(isValidSecond = true)
		{
			load(); 
			pr.style.width ="100%";
			pr.innerHTML = "Complete";
			buttonText.innerHTML ="FINISHED";
		}
		else
		{
			alert("Please select an option"); 
		}
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

	var c1 = document.getElementsByName("Q1");
	var c2 = document.getElementsByName("Q2");
	var c3 = document.getElementsByName("Q3");
	var c4 = document.getElementsByName("Q4");
	var c5 = document.getElementsByName("Q5");
	var x = [c1,c2,c3,c4,c5];
	var t = valid(x);
	return t;

}

function checkValidSecond()
{
	var c1 = document.getElementsByName("Q6");
	var c2 = document.getElementsByName("Q7");
	var c3 = document.getElementsByName("Q8");
	var c4 = document.getElementsByName("Q9");
	var c5 = document.getElementsByName("Q10");
	var x = [c1,c2,c3,c4,c5];
	var t =	valid(x);
	return t;
}

function valid(a)
{
	for(var i = 0; i < a.length; i++)
	{
		alert("Hello"+ a[i]);
		var isi = false;
		for(var j = 0; j < a[i].length; j++)
		{
			if(a[i][j].checked = true)
			{
				isi = true;	
				break;
			}
			alert("Hello");
		}		
		if(isi = false)
		{
			return false;
		}
	}
	return false;
}
function load()
{
	alert("Load"); 
}