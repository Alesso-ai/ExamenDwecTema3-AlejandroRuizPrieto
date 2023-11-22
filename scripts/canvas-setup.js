import { balls } from "./index.js";


export const canvas = document.querySelector('canvas');
export const ctx = canvas.getContext('2d');

export const width = canvas.width = window.innerWidth; // Se cambia al inner witdh no inner height
export const height = canvas.height = window.innerHeight;


export function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

 export function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

export function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';//error de color de fondo 245 por 0
    ctx.fillRect(0, 0, width, height);

    for (const ball of balls) {
        ball.draw(); 
        ball.update();
        for (const otherBall of balls) {
            if (ball !== otherBall) {
                ball.collisionDetect(otherBall);
            }
        }
    }

    requestAnimationFrame(loop);
}






