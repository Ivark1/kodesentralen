		rectangle(ctx, 150, 40, 75, 75, 'solid', 'chartreuse');
        	rectangle(ctx, 185, 115, 75, 75, 'solid', 'blue');
		rectangle(ctx, 110, 115, 75, 75, 'solid', 'red');
			
			
            	// Draw using SVG functions
            	const rSVG = rectangleSVG(150, 40, 75, 75, 'solid', 'chartreuse');
            	const r2SVG = rectangleSVG(185, 115, 75, 75, 'solid', 'blue');
            	const r3SVG = rectangleSVG(110, 115, 75, 75, 'solid', 'red');
        
		
		// Append the SVG elements to the SVG canvas
            	svgCanvas.appendChild(rSVG);
            	svgCanvas.appendChild(r2SVG);
		svgCanvas.appendChild(r3SVG);
