function computeRes() {

alert("Hello");
	var x = window.location.search.slice(7);
	alert("Hello");
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
	//Max value = (1.5 * 6) * 16
	var mi = m * 16;
	var ni = n * 16;

	//Set Image property
	ImageDiv.style.marginLeft = mi + 'px';
	ImageDiv.style.marginTop = ni+ 'px';
}

