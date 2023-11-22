
            rectangle(ctx, 640, 40, 200, 200, 'solid', 'black')
            circle(ctx, 640, 90, 100, 'solid', 'blue');
            circle(ctx, 685, 40, 100, 'solid', 'red');
            circle(ctx, 740, 90, 100, 'solid', 'yellow');
            circle(ctx, 685, 140, 100, 'solid', 'green');
            circle(ctx, 725, 130, 20, 'solid', 'black');

        

            // Draw using SVG functions

            const GPrectSVG = rectangleSVG(640, 20, 200, 200, 'solid', 'black');
            const GPcircle5SVG = circleSVG(690, 120, 50, 100, 'blue');
            const GPcircle1SVG = circleSVG(735, 70, 50, 100, 'red');
            const GPcircle2SVG = circleSVG(790, 120, 50, 100, 'yellow');
            const GPcircle3SVG = circleSVG(735, 170, 50, 100, 'green');
            const GPcircle4SVG = circleSVG(735, 120, 10, 100, 'black');

            // Append the SVG elements to the SVG canvas
            svgCanvas.appendChild(GPrectSVG);
            svgCanvas.appendChild(GPcircle5SVG);
            svgCanvas.appendChild(GPcircle1SVG);
            svgCanvas.appendChild(GPcircle2SVG);
            svgCanvas.appendChild(GPcircle3SVG);
            svgCanvas.appendChild(GPcircle4SVG);