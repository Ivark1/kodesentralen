
rectangle(ctx, 250, 430, 40, 40, 'solid', 'brown');
rectangle(ctx, 250, 50, 50, 20, 'solid', 'green');
rectangle(ctx, 225, 70, 100, 30, 'solid', 'green');
rectangle(ctx, 200, 100, 150, 40, 'solid', 'green');
rectangle(ctx, 175, 140, 200, 50, 'solid', 'green');
rectangle(ctx, 150, 190, 250, 60, 'solid', 'green');
rectangle(ctx, 125, 250, 300, 80, 'solid', 'green');
rectangle(ctx, 100, 330, 350, 100, 'solid', 'green');

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
    

