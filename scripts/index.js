//GIT HUB: https://github.com/Alesso-ai/ExamenDwecTema3-AlejandroRuizPrieto.git


import { Ball } from "./balls.js";
import { loop } from "./canvas-setup.js";
import { random } from "./canvas-setup.js";
import { width } from "./canvas-setup.js";
import { height } from "./canvas-setup.js";
import { randomRGB } from "./canvas-setup.js";

export const balls = [];
while (balls.length < 4) {
    const size = random(10, 20);
    const ball = new Ball(
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        size
    );

    balls.push(ball);
}



loop();











