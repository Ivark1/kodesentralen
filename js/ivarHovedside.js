
rectangle(ctx, 700, 500, 350, 200,  'solid', 'black'); 
rectangle(ctx, 750, 500, 240, 200, 'solid', 'blue'); 
rectangle(ctx, 750, 550, 240, 100, 'solid', 'red'); 
circle(ctx, 820, 550, 100, 'solid', 'chartreuse');

// Tegner med SVG
const rect1IKSVG = rectangleSVG(700, 200, 350, 200, 'solid','black');
const rect2IKSVG = rectangleSVG(750, 200, 240, 200, 'solid', 'blue');
const rect3IKSVG = rectangleSVG(750, 350, 240, 100, 'solid', 'red');
const circle1IKSVG = circleSVG(875, 300, 50,  'solid', 'chartreuse');
            

// Legger figurene i SVG-canvaset
svgCanvas.appendChild(rect1IKSVG);
svgCanvas.appendChild(rect2IKSVG);
svgCanvas.appendChild(rect3IKSVG);
svgCanvas.appendChild(circle1IKSVG);