
rectangle(ctx, 1250, 580, 40, 40, 'solid', 'brown');
rectangle(ctx, 1250, 200, 50, 20, 'solid', 'green');
rectangle(ctx, 1225, 220, 100, 30, 'solid', 'green');
rectangle(ctx, 1200, 250, 150, 40, 'solid', 'green');
rectangle(ctx, 1175, 290, 200, 50, 'solid', 'green');
rectangle(ctx, 1150, 340, 250, 60, 'solid', 'green');
rectangle(ctx, 1125, 400, 300, 80, 'solid', 'green');
rectangle(ctx, 1100, 480, 350, 100, 'solid', 'green');

 // Tegner med SVG
const rect1GBSVG = rectangleSVG(1450, 400, 40, 60, 'solid', 'brown');
const rect2GBSVG = rectangleSVG(1450, 50, 50, 20, 'solid', 'green');
const rect3GBSVG = rectangleSVG(1425, 70, 100, 30, 'solid', 'green');
const rect4GBSVG = rectangleSVG(1400, 100, 150, 40, 'solid', 'green');
const rect5GBSVG = rectangleSVG(1375, 140, 200, 50, 'solid', 'green');
const rect6GBSVG = rectangleSVG(1350, 190, 250, 60, 'solid', 'green');
const rect7GBSVG = rectangleSVG(1325, 250, 300, 80, 'solid', 'green');
const rect8GBSVG = rectangleSVG(1300, 300, 350, 100, 'solid', 'green');
   
   
    
//Legger figurene i SVG-canvaset
svgCanvas.appendChild(rect1GBSVG);
svgCanvas.appendChild(rect2GBSVG);
svgCanvas.appendChild(rect3GBSVG);
svgCanvas.appendChild(rect4GBSVG);
svgCanvas.appendChild(rect5GBSVG);
svgCanvas.appendChild(rect6GBSVG);
svgCanvas.appendChild(rect7GBSVG);
svgCanvas.appendChild(rect8GBSVG);
