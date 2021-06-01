class Ground 
{
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        };
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(myWorld, this.body);
    }

    display() {
        var groundPos = this.body.position;
        rectMode(CENTER);
        noStroke();
        fill("brown");
        rect(groundPos.x, groundPos.y, this.width, this.height);
    }
}