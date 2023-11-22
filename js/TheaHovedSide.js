
rectangle(ctx, 240, 400, 180, 180, 'solid', 'rgb(191, 151, 154)');
circle(ctx, 335, 500, 80, 'outline', 'black');
circle(ctx, 240, 480, 100, 'solid', 'pink');
circle(ctx, 300, 400, 120, 'solid', 'rgb(235, 52, 113)');

// Draw using SVG functions
const cfSVGTS =  rectangleSVG(240, 450, 180, 180, 'solid', 'rgb(191, 151, 154)');
const cf2SVGTS = circleSVG(335, 510, 50, 'outline', 'rbg(230, 140, 165');
const rectSVGTS = circleSVG(300, 575, 55, 'solid', 'pink');
const rect2SVGTS = circleSVG(360, 510, 60, 'solid', 'rgb(235, 52, 113)');
            

// Append the SVG elements to the SVG canvas
svgCanvas.appendChild(cfSVGTS);
svgCanvas.appendChild(cf2SVGTS);
svgCanvas.appendChild(rectSVGTS);
svgCanvas.appendChild(rect2SVGTS);