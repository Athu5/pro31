class Part{

constructor(x, y, r){

var options ={

    restitution : 0.5,
    friction : 0.1,
    density : 1.3

}

this.x=x;
this.y=y;

this.body = Bodies.circle(x, y,this.r, options);
this.color(random(0,255), random(0,255), random(0,255));
World.add(world, this.body);

}
display(){
 
    var pos =this.body.position;
    ellipceMode(CENTER);
    fill(this.color);
    ellipce(pos.x, pos.y, this.r,this.r);

  }
}