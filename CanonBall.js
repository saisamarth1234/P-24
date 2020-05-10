class CanonBall {
  constructor(x, y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
  
    }
    this.image = loadImage("sprites/cannonBall.png");
  };

  display(){
    Ball.display();
  };
};
