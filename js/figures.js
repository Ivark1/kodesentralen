// Funksjon til å initialisere canvas
function initCanvas(canvasId) {
    const canvas = document.getElementById(canvasId);
    const context = canvas.getContext('2d');
    return context;
}



// Funksjon for å tegne en sirkel
function circle(context, x, y, size, fillMode, color) {
    const radius = size / 2;

    context.fillStyle = color;

    if (fillMode === 'solid') {
        context.beginPath();
        context.arc(x + radius, y + radius, radius, 0, 2 * Math.PI);
        context.fill();
    } else if (fillMode === 'outline') {
        context.beginPath();
        context.arc(x + radius, y + radius, radius, 0, 2 * Math.PI); 
        context.stroke();
    } else {
        console.error('Ugyldig input. Bruk "solid" eller "outline".');
    }
}

function rectangle(context, x, y, width, height, fillMode, color) {
    context.fillStyle = color;

    if (fillMode === 'solid') {
        context.fillRect(x, y, width, height);
    } else if (fillMode === 'outline') {
        context.strokeRect(x, y, width, height);
    } else {
        console.error('Ugyldig input. Bruk "solid" eller "outline".');
    }
}


function circlefigure(ctx, centerX, centerY, numCircles, circleRadius, circleColor) {
    const angleIncrement = (2 * Math.PI) / numCircles;

    for (let i = 0; i < numCircles; i++) {
        const angle = i * angleIncrement;
        const x = centerX + circleRadius * Math.cos(angle);
        const y = centerY + circleRadius * Math.sin(angle);

        circle(ctx, x, y, circleRadius, 'solid', circleColor);
    }
}


function circleSVG(x, y, radius, fillMode, color) { // funksjon for å lage en sirkel
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle'); // lager elementet før man putter på attributes
    circle.setAttribute('cx', x); // setter hvor på x aksen sirkelen skal være
    circle.setAttribute('cy', y); // setter hvor på y aksen sirkelen skal være
    circle.setAttribute('r', radius); // setter radiusen til sirkelen
    circle.setAttribute('fill', color); // setter fargen på sirkelen og at hele sirkelen skal fylles

    if (fillMode === 'outline') {
        circle.setAttribute('stroke', color); // setter fargen på kanten av sirkelen
        circle.setAttribute('stroke-width', '2'); // setter hvor tykk kanten på sirkelen skal være
        circle.setAttribute('fill', 'none'); // gjør at sirkelen ikke blir fylt med farge og bare lager en kant
    }
    return circle;
}

// fuksjon for å lage en firkant
function rectangleSVG(x, y, width, height, fillMode, color) {
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect'); // lager elementet før man putter på attributes
    rect.setAttribute('x', x); // setter hvor på x aksen rektanglet skal være
    rect.setAttribute('y', y); // setter hvor på y aksen rektanglet skal være
    rect.setAttribute('width', width); //setter hvor bred rektanglet skal være
    rect.setAttribute('height', height); // setter hvor høy rektanglet skal være
    rect.setAttribute('fill', color); // lager rektanglet med en farge

    if (fillMode === 'outline') { // dette tilfellet gjør at bare kanten på rektanglet blir tegnet
        rect.setAttribute('stroke', color); // setter fargen på kanten
        rect.setAttribute('stroke-width', '2'); // setter hvor tykk kanten skal være
        rect.setAttribute('fill', 'none'); // gjør at rektanglet ikke blir fylt med farge og bare lager en kant
    }

    return rect;
}

// funksjon for å lage en gruppe med sirkler som danner en sirkel
function circlefigureSVG(centerX, centerY, numCircles, circleRadius, circleColor) {
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    const angleIncrement = (2 * Math.PI) / numCircles; // setter hvor stort hoppet mellom hver av sirklene er

    for (let i = 0; i < numCircles; i++) { // teller hvor mange sirkler som har blitt laget og sjekker om det er likt som målet eller ikke
        const angle = i * angleIncrement; // lager en ny sirkel hvis målet ikke er nådd
        const x = centerX + circleRadius * Math.cos(angle); // finner ut hvor på x aksen den neste sirklen skal plasseres og plasserer den
        const y = centerY + circleRadius * Math.sin(angle); // finner ut hvor på x aksen den neste sirklen skal plasseres og plasserer den

        const circle = circleSVG(x, y, circleRadius, 'solid', circleColor);
        group.appendChild(circle);
    }

    return group;
}