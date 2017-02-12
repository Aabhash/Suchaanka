function computeRes() {
	var x = window.location.search.slice(7);
	var m = 0, n = 0;
	if (x.length == 2) {
		m = x[0];
		n = x[1];
	}
	else if (x.length == 3) {
		if (x[0] == '-') {
			m = 0 - x[1];
			n = x[2];
		}
		else {
			m = x[0];
			n = 0 - x[2];
		}
	}
	else if (x.length == 4) {
		m = 0 - x[1];
		n = 0 - x[3];
	}
	//Max value = (3 * 6) * 16
	var mi = m * 16;
	var ni = n * 16;

	//Set Image property
	ImageDiv.style.marginLeft = mi + 'px';
	ImageDiv.style.marginTop = ni+ 'px';

	if(m > 0 && n > 0)
	{
		Remarks.innerHTML += "<h1><br>Authoritarian Right Wing</h1><hr> Examples <br> Margaret Thatcher Theresa May Donald Trump Narendra Modi "
	}
	else if(m >0 && n < 0)
	{
		Remarks.innerHTML += "<h1><br>Authoritarian Left Wing </h1><hr> Examples <br> Xi-Jinping KP Oli"
	}
	else if(m < 0 && n < 0)
	{
		Remarks.innerHTML += "<h1><br>Libertarian Left Wing </h1><hr> Examples <br> Bernie Sanders Jeremy Corbyn Benoit Hamon"
	}
	else if(m < 0 && n > 0)
	{
		Remarks.innerHTML +="<h1><br>Libertarian Right Wing </h1><hr> Examples <br> David Cameron Rand Paul "
	}
	else
	{
		Remarks.innerHTML +="<h1><br>Centrist </h1><hr> Examples <br><br> Barack Obama, Justin Trudeau, Hilary Clinton, Tony Blair"
	}
}

