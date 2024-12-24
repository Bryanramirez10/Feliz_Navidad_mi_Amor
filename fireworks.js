// Select canvas and setup context
const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Array to hold fireworks
let fireworks = [];
const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#FFF733"];

// Firework constructor
class Firework {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.exploded = false;
        this.particles = [];
    }

    update() {
        if (!this.exploded) {
            this.y -= 3; // Move firework upwards
            if (this.y < canvas.height * 0.3) {
                this.explode();
            }
        } else {
            this.particles.forEach(particle => particle.update());
        }
    }

    draw() {
        if (!this.exploded) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        } else {
            this.particles.forEach(particle => particle.draw());
        }
    }

    explode() {
        this.exploded = true;
        for (let i = 0; i < 50; i++) {
            this.particles.push(new Particle(this.x, this.y, this.color));
        }
    }
}

// Particle constructor
class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 3 + 1;
        this.life = 100;
    }

    update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.life--;
    }

    draw() {
        if (this.life > 0) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }
    }
}

// Add a firework
function launchFirework() {
    const x = Math.random() * canvas.width;
    const y = canvas.height;
    const color = colors[Math.floor(Math.random() * colors.length)];
    fireworks.push(new Firework(x, y, color));
}

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireworks.forEach((firework, index) => {
        firework.update();
        firework.draw();
        if (firework.exploded && firework.particles.every(p => p.life <= 0)) {
            fireworks.splice(index, 1);
        }
    });
    requestAnimationFrame(animate);
}

// Show text overlays
let textIndex = 0;
const texts = ["Feliz Navidad mi amor", "Ti amu mucho mi amor"];
const textOverlay = document.getElementById("textOverlay");

function cycleText() {
    if (textIndex < texts.length) {
        textOverlay.textContent = texts[textIndex];
        textOverlay.classList.remove("hidden");
        setTimeout(() => {
            textOverlay.classList.add("hidden");
            textIndex++;
            setTimeout(cycleText, 1000);
        }, 3000);
    }
}

// Resize canvas on window resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Launch fireworks at intervals (adjusted to launch at random intervals)
setInterval(launchFirework, Math.random() * 1500 + 500); // Randomized intervals

// Start animation and text cycling
animate();
cycleText();
