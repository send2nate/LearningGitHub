let color = '#' + ((1<<24)*Math.random()|0).toString(16).padStart(6,0);
let body = document.querySelector("body");
body.style.background = color;