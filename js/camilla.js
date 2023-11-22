<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">  <title>Camilla</title>
<link rel="stylesheet" href="css/StyleMain.css">  
<!-- Finner filen figures.js og kjører den -->
    <script src="figures.js" defer></script>
</head>
<body>
<h1>Figur</h1>
<br><br>
<p>Canvas og SVG</p>

  <!-- Lager et canvas element med id brett -->
    <canvas id="brett" width="500" height="200"></canvas>

    <!-- Lager et SVG element med id svgBrett -->
    <svg id="svgBrett" width="500" height="200"></svg>
    <script>
        //Venter på at siden laster inn før den kjører koden
        window.onload = function () {
            const ctx = initCanvas('brett'); // Initialiserer canvaset
			
            
            rectangle(ctx, 50, 100, 170, 100, 'solid', 'navy'); // Tegner et blått rektangel
            rectangle(ctx, 50, 170, 170, 30, 'solid', 'green'); // Tegner et grønt rektangel
			circle(ctx, 60, 105, 40, 'solid','orange'); // Tegner en sirkel med radius 40
	 
			
            const svgCanvas = document.getElementById('svgBrett');
			
            // Draw using SVG functions
            const cSVG = circleSVG(80, 125, 20, 'solid', 'orange'); // Tegner en sirkel med radius 20 
            const rSVG = rectangleSVG(50, 100, 170, 100, 'solid', 'navy'); // Tegner et blått rektangel 
            const r2SVG = rectangleSVG(50, 170, 170, 30, 'solid', 'green'); // Tegner et grønt rektangel
        
		
			// Append the SVG elements to the SVG canvas
            svgCanvas.appendChild(rSVG);
            svgCanvas.appendChild(r2SVG);
		    svgCanvas.appendChild(cSVG);
        }
   </script>
   </div>
</body>
</html>