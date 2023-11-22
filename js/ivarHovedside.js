
rectangle(ctx, 700, 400, 350, 200,  'solid', 'black'); 
rectangle(ctx, 750, 400, 240, 200, 'solid', 'blue'); 
rectangle(ctx, 750, 450, 240, 100, 'solid', 'red'); 
circle(ctx, 820, 450, 100, 'solid', 'chartreuse');

// Tegner med SVG
const rect1IKSVG = rectangleSVG(700, 200, 350, 200, 'solid','black');
const rect2IKSVG = rectangleSVG(750, 200, 240, 200, 'solid', 'blue');
const rect3IKSVG = rectangleSVG(750, 250, 240, 100, 'solid', 'red');
const circle1IKSVG = circleSVG(875, 300, 50,  'solid', 'chartreuse');
            

// Legger figurene i SVG-canvaset
svgCanvas.appendChild(rect1IKSVG);
svgCanvas.appendChild(rect2IKSVG);
svgCanvas.appendChild(rect3IKSVG);
svgCanvas.appendChild(circle1IKSVG);