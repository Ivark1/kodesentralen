         
            rectangle(ctx, 50, 100, 170, 100, 'solid', 'navy'); // Tegner et blått rektangel
            rectangle(ctx, 50, 170, 170, 30, 'solid', 'green'); // Tegner et grønt rektangel
			circle(ctx, 60, 105, 40, 'solid','orange'); // Tegner en sirkel med radius 40
	 
		
			
            // Draw using SVG functions
            const cSVGCUR = circleSVG(80, 125, 20, 'solid', 'orange'); // Tegner en sirkel med radius 20 
            const rSVGCUR = rectangleSVG(50, 100, 170, 100, 'solid', 'navy'); // Tegner et blått rektangel 
            const r2SVGCUR = rectangleSVG(50, 170, 170, 30, 'solid', 'green'); // Tegner et grønt rektangel
        
		
			// Append the SVG elements to the SVG canvas
            svgCanvas.appendChild(rSVGCUR);
            svgCanvas.appendChild(r2SVGCUR);
		    svgCanvas.appendChild(cSVGCUR);
