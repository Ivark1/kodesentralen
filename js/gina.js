
    context.fillStyle = "#228B22"; 
    context.fillRect(250, 50, 50, 20);
    context.fillStyle = "#228B22"; 
    context.fillRect(225, 70, 100, 30);
    context.fillRect(200, 100, 150, 40);
    context.fillRect(175, 140, 200, 50);
    context.fillRect(150, 190, 250, 60);
    context.fillRect(125, 250, 300, 80);
    context.fillRect(100, 330, 350, 100);
    context.fillStyle = "#8B4513"; 
    context.fillRect(250, 430, 40, 40);

 // Tegner med SVG
const rect1GBSVG = rectangleSVG(250, 430, 40, 40, 'solid', 'brown');
const rect2GBSVG = rectangleSVG(250, 50, 50, 20, 'solid', 'green');
const rect3GBSVG = rectangleSVG(225, 70, 100, 30, 'solid', 'green');
const rect4GBSVG = rectangleSVG(200, 100, 150, 40, 'solid', 'green');
const rect5GBSVG = rectangleSVG(175, 140, 200, 50, 'solid', 'green');
const rect6GBSVG = rectangleSVG(150, 190, 250, 60, 'solid', 'green');
const rect7GBSVG = rectangleSVG(125, 250, 300, 80, 'solid', 'green');
const rect8GBSVG = rectangleSVG(100, 300, 350, 100, 'solid', 'green');
   
   
    
//Legger figurene i SVG-canvaset
svg.Canvas.appenChild(rect1GBSVG);
svg.Canvas.appenChild(rect2GBSVG);
svg.Canvas.appenChild(rect3GBSVG);
svg.Canvas.appenChild(rect4GBSVG);
svg.Canvas.appenChild(rect5GBSVG);
svg.Canvas.appenChild(rect6GBSVG);
svg.Canvas.appenChild(rect7GBSVG);
svg.Canvas.appenChild(rect8GBSVG);
    

