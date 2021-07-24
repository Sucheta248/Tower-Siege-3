class polygon
{
    constructor(x,y,r)
    {
        var options=
        {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            
        }

        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.r=r;
       // this.image=loadImage("polygon.png")
    }

    display()
    {
        ellipseMode(RADIUS);
       // imageMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
    }

}