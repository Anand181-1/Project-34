class Bob {
    constructor(x, y) {
      var options = {
          restitution: 1,
          friction: 0,
          inertia: Infinity,
          slop: 0,
          frictionAir: 0.0 
      }
      this.body = Bodies.circle(x, y,30,options);
      this.x = x;
      this.y = y;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;   
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("lime");
      ellipse(0, 0,60,60);
      pop();
    }
  }