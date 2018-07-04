var color = randomBackground();
var bodyOne = document.querySelector("body");
bodyOne.style.background = color;

function randomBackground() {
	//pick a red from 0-255
	var r = Math.floor(Math.random() * 256)
	//pick a green from 0-255
	var g = Math.floor(Math.random() * 256)
	//pick a blue from 0-255
	var b = Math.floor(Math.random() * 256)
	return "rgb(" + r + ", " + g + ", " + b + ")";
}