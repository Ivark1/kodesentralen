<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">  <title>Camilla</title>
</head>
<body>
<h1>Figur 1</h1>
<p>Canvas<p/>
<canvas id="canvas" width="500" height="500"></canvas>
<script>
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "navy";
ctx.fillRect(50, 100, 170, 100);
ctx.fillStyle = "green";
ctx.fillRect(50, 170, 170, 30);
ctx.fillStyle = "brown";
ctx.fillRect(180, 150, 10, 30);
ctx.fillStyle = "orange";
ctx.beginPath();
ctx.arc(80, 100, 40, 0, 2 * Math.PI);
ctx.fill();
ctx.fillStyle = "#2e8b57";
ctx.beginPath();
ctx.arc(185, 140, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(173, 133, 3, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(198, 143, 3, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(183, 153, 3, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(198, 130, 3, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(173, 143, 3, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(183, 143, 3, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(183, 127, 3, 0, 2 * Math.PI);
ctx.fill();
	
</script>
<h1>Figur 2</h1>
<p>SVG</p>
<svg version="1.1"
     width="500" height="500"
     xmlns="http://www.w3.org/2000/svg">
	 
<svg width="500" height="500">
  <rect x="50" y="100" width="170" height="100"
  style="fill:navy;stroke:pink;stroke-width:0;stroke-opacity:0.9" />
  <rect x="50" y="170" width="170" height="30"
  style="fill: green;stroke:pink;stroke-width:0;stroke-opacity:0.9" />
  <rect x="180" y="150" width="10" height="30"
  style="fill: brown;stroke:pink;stroke-width:0;stroke-opacity:0.9" />
  <circle cx="80" cy="100" r="40" stroke="orange" stroke-width="0" fill="orange" />
  <circle cx="185" cy="140" r="20" stroke="orange" stroke-width="0" fill="#2e8b57" />
  <circle cx="173" cy="133" r="3" stroke="orange" stroke-width="0" fill="red" />
  <circle cx="198" cy="143" r="3" stroke="orange" stroke-width="0" fill="red" />
  <circle cx="183" cy="153" r="3" stroke="orange" stroke-width="0" fill="red" />
  <circle cx="198" cy="130" r="3" stroke="orange" stroke-width="0" fill="red" />
  <circle cx="173" cy="143" r="3" stroke="orange" stroke-width="0" fill="red" />
  <circle cx="183" cy="143" r="3" stroke="orange" stroke-width="0" fill="red" />
  <circle cx="183" cy="127" r="3" stroke="orange" stroke-width="0" fill="red" />
</svg>

 </svg>
</body>
</html>
