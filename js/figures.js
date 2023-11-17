// Funksjon til å initialisere canvas
function initCanvas(canvasId) {
    const canvas = document.getElementById(canvasId);
    const context = canvas.getContext('2d');
    return context;
}



// Funksjon for å tegne en sirkel
function drawCircle(context, x, y, size, fillMode, color) {
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
        console.error('Invalid fill mode. Use "solid" or "outline".');
    }
}

function drawRect(context, x, y, width, height, fillMode, color) {
    context.fillStyle = color;

    if (fillMode === 'solid') {
        context.fillRect(x, y, width, height);
    } else if (fillMode === 'outline') {
        context.strokeRect(x, y, width, height);
    } else {
        console.error('Invalid fill mode. Use "solid" or "outline".');
    }
}



function drawCircleOfCircles(ctx, centerX, centerY, numCircles, circleRadius, circleColor) {
    const angleIncrement = (2 * Math.PI) / numCircles;

    for (let i = 0; i < numCircles; i++) {
        const angle = i * angleIncrement;
        const x = centerX + circleRadius * Math.cos(angle);
        const y = centerY + circleRadius * Math.sin(angle);

        drawCircle(ctx, x, y, circleRadius, 'solid', circleColor);
    }
}


/*
Eksempel på bruk av funksjonene
const circleOfCirclesCenterX = 150;
const circleOfCirclesCenterY = 150;
const numCirclesInCircle = 12;
const circleRadius = 20;
const circleColor = '#FFB266';

drawCircleOfCircles(ctx, circleOfCirclesCenterX, circleOfCirclesCenterY, numCirclesInCircle, circleRadius, circleColor);*/

// SVG

function createCircleSVG(x, y, radius, fillMode, color) {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', radius);
    circle.setAttribute('fill', color);

    if (fillMode === 'outline') {
        circle.setAttribute('stroke', color);
        circle.setAttribute('stroke-width', '2');
        circle.setAttribute('fill', 'none');
    }

    return circle;
}

// fuksjon for å lage en firkant
function createRectSVG(x, y, width, height, fillMode, color) {
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', x);
    rect.setAttribute('y', y);
    rect.setAttribute('width', width);
    rect.setAttribute('height', height);
    rect.setAttribute('fill', color);

    if (fillMode === 'outline') {
        rect.setAttribute('stroke', color);
        rect.setAttribute('stroke-width', '2');
        rect.setAttribute('fill', 'none');
    }

    return rect;
}

// funksjon for å lage en gruppe med sirkler som danner en sirkel
function createCircleOfCirclesSVG(centerX, centerY, numCircles, circleRadius, circleColor) {
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    const angleIncrement = (2 * Math.PI) / numCircles;

    for (let i = 0; i < numCircles; i++) {
        const angle = i * angleIncrement;
        const x = centerX + circleRadius * Math.cos(angle);
        const y = centerY + circleRadius * Math.sin(angle);

        const circle = createCircleSVG(x, y, circleRadius, 'solid', circleColor);
        group.appendChild(circle);
    }

    return group;
}

/*
// Example usage:
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
document.body.appendChild(svg); // legger svg-elementet til i body

// tegner en sirkel
const circle = createCircleSVG(50, 50, 30, 'solid', 'blue');
svg.appendChild(circle);

// tegner en firkant
const rect = createRectSVG(100, 50, 50, 30, 'outline', 'green');
svg.appendChild(rect);

// tegner en gruppe med sirkler som danner en sirkel
const circleOfCircles = createCircleOfCirclesSVG(200, 50, 8, 20, 'red');
svg.appendChild(circleOfCircles);
*/