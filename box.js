class Box {
  constructor(x, y, width, height) {
      var options = {
          restitution : 0.7,
          friction : 0.6,
          isStatic : false,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("pink.png");
      this.visibility = 255;

      World.add(world, this.body);
  }
  
  score(){
    if(this.visibility < 0 && this.visibility > -105){
      score++;
    }
  }

  display(){
      if(this.body.speed < 3){
          var pos =this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image,0,0,this.width,this.height);
          pop();
      } else {
          World.remove(world,this.body);
          push();
          this.visibility = this.visibility - 5;
          tint(255,this.visibility);
          imageMode(CENTER);
          image(this.image, this.body.position.x, this.body.position.y,this.width,this.height);
          pop();
        }
  }
};
