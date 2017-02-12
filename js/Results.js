function displayResults() {
	alert("Hello");
	var x = Request.querystring["score"];
	var m = 0, n = 0;
	if (x.Length == 2) {
		m = parseInt(x[0]);
		n = parseInt(x[1]);
	}
	else if (x.Length == 3) {
		if (x[0] == '-') {
			m = 0 - parseInt(x[1]);
			n = parseInt(x[2]);
		}
		else {
			m = parseInt(x[0]);
			n = 0 - parseInt(x[2]);
		}
	}
	else if (x.Length == 4) {
		m = 0 - parseInt(x[1]);
		n = 0 - parseInt(x[3]);
	}
	//Max value = (1.5 * 6) * 16
	var mi = m * 16;
	var ni = n * 16;

	ImageDiv.Style.margin - left = mi;
	ImageDiv.Style.margin - top = ni;
}

