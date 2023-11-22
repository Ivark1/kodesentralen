const ctx = initCanvas('brett'); // Initialiserer canvaset
const svgCanvas = document.getElementById('svgBrett');

rectangle(ctx, 200, 400, 350, 200,  'solid', 'black'); 
rectangle(ctx, 250, 400, 240, 200, 'solid', 'blue'); 
rectangle(ctx, 250, 450, 240, 100, 'solid', 'red'); 
circle(ctx, 320, 450, 100, 'solid', 'chartreuse');

// Tegner med SVG
const rect1SVG = rectangleSVG(200, 200, 350, 200, 'solid','black');
const rect2SVG = rectangleSVG(250, 200, 240, 200, 'solid', 'blue');
const rect3SVG = rectangleSVG(250, 250, 240, 100, 'solid', 'red');
const circle1SVG = circleSVG(375, 300, 50,  'solid', 'chartreuse');
            

// Legger figurene i SVG-canvaset
svgCanvas.appendChild(rect1SVG);
svgCanvas.appendChild(rect2SVG);
svgCanvas.appendChild(rect3SVG);
svgCanvas.appendChild(circle1SVG);