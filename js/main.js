var color = '#' + ((1<<24)*Math.random()|0).toString(16).padStart(6,0);
var body = document.querySelector("body");
body.style.background = color;