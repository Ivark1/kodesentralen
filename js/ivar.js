<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">  <title>Ivar</title>
<link rel="stylesheet" href="css/StyleMain.css">  
<!-- Finner filen figures.js og kjører den -->
    <script src="figures.js" defer></script>
</head>
<body>
<h1>Figur</h1>
<br><br>
<p>Canvas og SVG</p>

  <!-- Lager et canvas element med id brett -->
    <canvas id="brett" width="1400" height="600"></canvas>

    <!-- Lager et SVG element med id svgBrett -->
    <svg id="svgBrett" width="1400" height="450"></svg>
    <script>
        //Venter på at siden laster inn før den kjører koden
        window.onload = function () {
            const ctx = initCanvas('brett'); // Initialiserer canvaset
			
            
            rectangle(ctx, 200, 400, 350, 200,  'solid', 'black'); // Tegner den største firkanten som danner svart bakgrunn
            rectangle(ctx, 250, 400, 240, 200, 'solid', 'blue'); // Tegner en blå mindre firkant som mellomlegg
            rectangle(ctx, 250, 450, 240, 100, 'solid', 'red'); // Tegner den minste røde firkanten
            circle(ctx, 320, 450, 100, 'solid', 'chartreuse');
	 
			
            const svgCanvas = document.getElementById('svgBrett');
			
          // Draw using SVG functions
          const rect1SVG = rectangleSVG(200, 200, 350, 200, 'solid','black');
          const rect2SVG = rectangleSVG(250, 200, 240, 200, 'solid', 'blue');
          const rect3SVG = rectangleSVG(250, 250, 240, 100, 'solid', 'red');
          const circle1SVG = circleSVG(375, 300, 50,  'solid', 'chartreuse');
          

          // Append the SVG elements to the SVG canvas
          svgCanvas.appendChild(rect1SVG);
          svgCanvas.appendChild(rect2SVG);
          svgCanvas.appendChild(rect3SVG);
          svgCanvas.appendChild(circle1SVG);
          }
   </script>
   </div>
</body>
</html>