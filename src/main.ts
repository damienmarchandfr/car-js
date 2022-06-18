import { Abstract } from './Abstract';
import { Car } from './Car';
import './style.css';
import { Wall } from './Wall';

var canvas: HTMLCanvasElement;
let width = window.innerWidth - 40;
let height = window.innerHeight - 40;

export let ctx: CanvasRenderingContext2D

let car: Car
let elements : Abstract[] = []

function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.clearRect(0,0,width,height)
    car.update()

for (const element of elements) {
    element.update()
}

    car.draw()

    for (const element of elements) {
        element.draw()
    }

}


document.addEventListener("DOMContentLoaded", function(){
    const container = document.createElement('div');
    container.id = "container";

    canvas = document.createElement('canvas');
    canvas.id = "game";
    canvas.width = width;
    canvas.height = height;
    container.appendChild(canvas);
    document.body.appendChild(container);

    ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,width,height)

    car = new Car(width/2,height/2)

    elements.push(new Wall(20,20))


    gameLoop();
});
