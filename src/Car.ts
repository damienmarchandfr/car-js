import { Controller } from "./utils/Controller"
import { ctx } from './main'
import { Abstract } from "./Abstract"

export class Car implements Abstract {
    private x: number
    private y: number

    private width = 40
    private height = 70

    private maxSpeed = 3

    private speed = 0
    private acceleration = .2
    private friction = .05
    private angle = 0

    private controller = new Controller()

    private polygon: { x: number, y: number }[] = []


    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    update() {
        this.move();
        this.polygon = this.createPolygon();
    }

    private createPolygon() {
        const points = [];
        const rad = Math.hypot(this.width, this.height) / 2;
        const alpha = Math.atan2(this.width, this.height);
        points.push({
            x: this.x - Math.sin(this.angle - alpha) * rad,
            y: this.y - Math.cos(this.angle - alpha) * rad,
        });
        points.push({
            x: this.x - Math.sin(this.angle + alpha) * rad,
            y: this.y - Math.cos(this.angle + alpha) * rad,
        });
        points.push({
            x: this.x - Math.sin(Math.PI + this.angle - alpha) * rad,
            y: this.y - Math.cos(Math.PI + this.angle - alpha) * rad,
        });
        points.push({
            x: this.x - Math.sin(Math.PI + this.angle + alpha) * rad,
            y: this.y - Math.cos(Math.PI + this.angle + alpha) * rad,
        });
        return points;
    }

    private move() {
        if (this.controller.actions.UP) {
            this.speed += this.acceleration;
        }
        if (this.controller.actions.DOWN) {
            this.speed -= this.acceleration;
        }

        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
        if (this.speed < -this.maxSpeed / 2) {
            this.speed = -this.maxSpeed / 2;
        }

        if (this.speed > 0) {
            this.speed -= this.friction;
        }
        if (this.speed < 0) {
            this.speed += this.friction;
        }
        if (Math.abs(this.speed) < this.friction) {
            this.speed = 0;
        }

        if (this.speed != 0) {
            const flip = this.speed > 0 ? 1 : -1;
            if (this.controller.actions.LEFT) {
                this.angle += 0.03 * flip;
            }
            if (this.controller.actions.RIGHT) {
                this.angle -= 0.03 * flip;
            }
        }

        this.x -= Math.sin(this.angle) * this.speed;
        this.y -= Math.cos(this.angle) * this.speed;
    }

    private collide(elements: Abstract[]) {

    }


    draw() {
        ctx.fillStyle = 'blue';

        ctx.beginPath();
        ctx.moveTo(this.polygon[0].x, this.polygon[0].y);
        for (let i = 1; i < this.polygon.length; i++) {
            ctx.lineTo(this.polygon[i].x, this.polygon[i].y);
        }
        ctx.fill();
    }
}