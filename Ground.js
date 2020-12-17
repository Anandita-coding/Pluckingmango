class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("boy.png")
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("green");
      image(this.image,pos.x, pos.y+100, this.width+200, this.height+300);
    }
  };