
            rectangle(ctx, 640, 290, 200, 200, 'solid', 'black');
            circle(ctx, 640, 340, 100, 'solid', 'blue');
            circle(ctx, 685, 290, 100, 'solid', 'red');
            circle(ctx, 740, 340, 100, 'solid', 'yellow');
            circle(ctx, 685, 390, 100, 'solid', 'green');
            circle(ctx, 725, 380, 20, 'solid', 'black');

        

            // Draw using SVG functions

            const GPrectSVG = rectangleSVG(640, 50, 200, 200, 'solid', 'black');
            const GPcircle5SVG = circleSVG(690, 150, 50, 'solid', 'blue');
            const GPcircle1SVG = circleSVG(735, 100, 50, 'solid', 'red');
            const GPcircle2SVG = circleSVG(790, 150, 50, 'solid', 'yellow');
            const GPcircle3SVG = circleSVG(735, 200, 50, 'solid', 'green');
            const GPcircle4SVG = circleSVG(735, 150, 10, 'solid', 'black');

            // Append the SVG elements to the SVG canvas
            svgCanvas.appendChild(GPrectSVG);
            svgCanvas.appendChild(GPcircle5SVG);
            svgCanvas.appendChild(GPcircle1SVG);
            svgCanvas.appendChild(GPcircle2SVG);
            svgCanvas.appendChild(GPcircle3SVG);
            svgCanvas.appendChild(GPcircle4SVG);