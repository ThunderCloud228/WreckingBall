class Box 
{
    constructor(x, y, w, h) {
        var options = {
            restitution: 0.8,
            friction: 1,
            density: 0.5
        };
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(myWorld, this.body);
    }

    display() {
        var boxPos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(boxPos.x, boxPos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
    }
}