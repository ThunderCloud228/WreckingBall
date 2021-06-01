class Rope 
{
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,            
            pointB: pointB,
            stiffness: 1,
            length: 250
        };
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(myWorld, this.rope);
    }
    
    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        stroke("white");
        strokeWeight(5)
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}