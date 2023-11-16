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

// Eksempel på bruk av funksjonene
const circleOfCirclesCenterX = 150;
const circleOfCirclesCenterY = 150;
const numCirclesInCircle = 12;
const circleRadius = 20;
const circleColor = '#FFB266';

drawCircleOfCircles(ctx, circleOfCirclesCenterX, circleOfCirclesCenterY, numCirclesInCircle, circleRadius, circleColor);
