class Rubber {
    constructor(x,y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(this.x, this.y,(this.r-20)/2,options);
     
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle)
      ellipseMode(RADIUS);
      

     
      pop();
        }
  };