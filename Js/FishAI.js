class FishAI {
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 20;
        var options = {
          //  restitution:1.0
          isStatic:true
        }
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world, this.body);
        }
        display(){
    var pos = this.body.position;
    push();
    fill("green");
    // pos.x += 2;
    // if(pos.x >= 1200){
    // pos.x -= 4;
    // }
    Matter.Body.setVelocity(this.body,{x:2, y:0})
    rect(pos.x, pos.y, this.width, this.height);
    pop();
    
    }
}