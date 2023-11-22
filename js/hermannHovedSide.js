rectangle(ctx, 950, 40, 75, 75, 'solid', 'chartreuse');
        	rectangle(ctx, 985, 115, 75, 75, 'solid', 'blue');
		rectangle(ctx, 910, 115, 75, 75, 'solid', 'red');
			
			
            	// Draw using SVG functions
            	const rSVG = rectangleSVG(950, 40, 75, 75, 'solid', 'chartreuse');
            	const r2SVG = rectangleSVG(985, 115, 75, 75, 'solid', 'blue');
            	const r3SVG = rectangleSVG(910, 115, 75, 75, 'solid', 'red');
        
		
		// Append the SVG elements to the SVG canvas
            	svgCanvas.appendChild(rSVG);
            	svgCanvas.appendChild(r2SVG);
		svgCanvas.appendChild(r3SVG);
