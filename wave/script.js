const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let wave = {
    y: canvas.height / 2,
    length: 0.02,
    amplitude: 100,
    frequency: 0.015,
    speed: 0.02
};

let increment = 0;

function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = '#0e0e0e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);

    for (let i = 0; i <= canvas.width; i++) {
        ctx.lineTo(
            i,
            wave.y + Math.sin(i * wave.length + increment) * wave.amplitude * Math.sin(increment)
        );
    }

    ctx.strokeStyle = '#00aaff';
    ctx.lineWidth = 2;
    ctx.stroke();

    increment += wave.speed;
}

animate();
// Adjust wave parameters for ocean effect
wave.length = 0.01;
wave.amplitude = 75;
wave.frequency = 0.02;
wave.speed = 0.03;

// Change stroke style to ocean color
ctx.strokeStyle = '#1E90FF';