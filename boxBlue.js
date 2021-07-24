class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.3,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    //this.image = loadImage("block1.png");
    World.add(world, this.body);
    this.Visibility=255;
  }

  display()
  {
    var pos=this.body.position;

    if(this.body.speed>2.5)
    {
      World.remove(world,this.body);
      push();
      this.Visibility=this.Visibility-5;
      tint(255,this.Visibility);
      rect(pos.x,pos.y,this.width,this.height)
      pop();
    }
    else
    {
      rectMode(CENTER)
      rect(pos.x,pos.y,this.width,this.height);
    }
    //console.log(this.Visibility)
  }

  
  score()
  {
    if(this.Visibility<0&&this.Visibility>-100)
    {
      score++
    }
  }
}