class Mango{
    constructor(x,y,r){
        var options = {
            isStatic:  true,
            restitution:0,
            friction:1
        }
this.image2 = loadImage("mango.png")

    this.x=x;
    this.y=y;
    this.r=r;
    this.body = Bodies.circle(this.x,this.y,this.r/2,options)    
    World.add(world,this.body)
    }
    display(){
        var mangoesPos = this.body.position;
        
        push ()
        translate(mangoesPos.x,mangoesPos.y)
        rectMode(CENTER)
        strokeWeight(3)
        fill ("white")
        image(this.image2,0,0,this.r,this.r)
        pop ()
    }
}