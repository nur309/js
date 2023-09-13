// show date
function showDate(){
	document.getElementById('d_h2').innerHTML = Date();
}
// bulb on/off

function bulbOff(){
	document.getElementById('img').src = "images/off.gif";
}

function bulbOn(){
	document.getElementById('img').src = "images/on.gif";
}

// font change

function fontChange(){
	document.getElementById('c_h2').style.fontSize = "60px";
}

// show/hide
function show(){
	document.getElementById('sh_h2').style.display = "block";
}

function hide(){
	document.getElementById('sh_h2').style.display = "none";
}

