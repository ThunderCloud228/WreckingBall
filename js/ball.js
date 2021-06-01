class Ball 
{
    constructor(x, y, r) {
        var options = {
            frictionAir: 0.005,
            density: 1
        };
        this.body = Bodies.circle(x, y, r, options);
        this.radius = r;
        World.add(myWorld, this.body);
    }

    display() {
        var ballPos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(ballPos.x, ballPos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}