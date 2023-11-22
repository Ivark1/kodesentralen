

circlefigure(ctx, 275, 100, 10, 60, 'red'); // Tegner en sirkel av sirkler, med radius 10, 60 sirkler og rød farge
circlefigure(ctx, 285, 120, 10, 40, 'yellow'); // Tegner en sirkel av sirkler
rectangle(ctx, 255, 80, 100, 100, 'outline', 'blue'); // Tegner en firkant, med bredde 100, høyde 100, blå farge
rectangle(ctx, 250, 75, 110, 110, 'outline', 'blue'); // Tegner en firkant
rectangle(ctx, 245, 70, 120, 120, 'outline', 'blue'); // Tegner en firkant

// Tegner med SVG
const cfSVG = circlefigureSVG(310, 110, 10, 50, 'red');
const cf2SVG = circlefigureSVG(310, 110, 10, 35, 'yellow');
const rectSVG = rectangleSVG(260, 60, 100, 100, 'outline', 'blue');
const rect2SVG = rectangleSVG(255, 55, 110, 110, 'outline', 'blue');
const rect3SVG = rectangleSVG(250, 50, 120, 120, 'outline', 'blue');

// Legger til figurene i SVG-canvaset
svgCanvas.appendChild(cfSVG);
svgCanvas.appendChild(cf2SVG);
svgCanvas.appendChild(rectSVG);
svgCanvas.appendChild(rect2SVG);
svgCanvas.appendChild(rect3SVG);