class Ball{
    constructor(x,y,r){
        var options ={
            restitution :0.8,
            friction : 0.3,
            density : 0.1
           
        }
        this.r =r;
        this.body = Bodies.circle(x,y,r,options);
        World.add(myworld,this.body);


    }
    display(){
        var pos = this.body.position;
        var angle= this.body.angle;
        push();
        
        
        fill("navy")
        stroke("black");
        strokeWeight(1);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,1.5*this.r)
        pop();

    }
}