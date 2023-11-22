function initCanvas(canvasId) {
    const canvas = document.getElementById(canvasId);
    const context = canvas.getContext('2d');
    return context;
}

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