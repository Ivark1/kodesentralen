rectangle(ctx, 1150, 40, 75, 75, 'solid', 'chartreuse');
        	rectangle(ctx, 1185, 115, 75, 75, 'solid', 'blue');
		rectangle(ctx, 1110, 115, 75, 75, 'solid', 'red');
			
			
            	// Draw using SVG functions
            	const rSVG = rectangleSVG(1150, 40, 75, 75, 'solid', 'chartreuse');
            	const r2SVG = rectangleSVG(1185, 115, 75, 75, 'solid', 'blue');
            	const r3SVG = rectangleSVG(1110, 115, 75, 75, 'solid', 'red');
        
		
		// Append the SVG elements to the SVG canvas
            	svgCanvas.appendChild(rSVG);
            	svgCanvas.appendChild(r2SVG);
		svgCanvas.appendChild(r3SVG);
