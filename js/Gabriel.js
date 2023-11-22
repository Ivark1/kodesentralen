
            rectangle(ctx, 640, 290, 200, 200, 'solid', 'black')
            circle(ctx, 640, 340, 100, 'solid', 'blue');
            circle(ctx, 685, 290, 100, 'solid', 'red');
            circle(ctx, 740, 340, 100, 'solid', 'yellow');
            circle(ctx, 685, 390, 100, 'solid', 'green');
            circle(ctx, 725, 380, 20, 'solid', 'black');

        

            // Draw using SVG functions

            const rectSVG = rectangleSVG(640, 50, 200, 200, 'solid', 'black');
            const circle5SVG = circleSVG(690, 150, 50, 100, 'blue');
            const circle1SVG = circleSVG(735, 100, 50, 100, 'red');
            const circle2SVG = circleSVG(790, 150, 50, 100, 'yellow');
            const circle3SVG = circleSVG(735, 200, 50, 100, 'green');
            const circle4SVG = circleSVG(735, 150, 10, 100, 'black');

            // Append the SVG elements to the SVG canvas
            svgCanvas.appendChild(rectSVG);
            svgCanvas.appendChild(circle5SVG);
            svgCanvas.appendChild(circle1SVG);
            svgCanvas.appendChild(circle2SVG);
            svgCanvas.appendChild(circle3SVG);
            svgCanvas.appendChild(circle4SVG);