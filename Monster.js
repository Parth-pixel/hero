class Monster{
    constructor(x, y) {
        var options = {
          isStatic : true,
           // frictionAir : 1,
            density : 1,
            restitution : 1
        }
      this.body = Bodies.rectangle(x, y, 200,200, options);
        this.width = 300;
        this.height = 300;
        this.image = loadImage("pro-c34+images/images/Monster-01.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
       // fill("white");
        image( this.image,0, 0, this.width, this.height);
        pop();
      }
  }