class Bob{
    constructor(x,y,radius){
        
        
    var option={
      isStactic:true,
     
      
     
      
    }    
      
      
    this.body=Bodies.circle(x,y,radius,option)
    this.radius=radius
   
    World.add(world,this.body)
    
    }
    display(){
    var pos=this.body.position
    push();
   rectMode(CENTER)
    fill("pink")
    circle(pos.x,pos.y,this.radius,this.radius)
    pop();
    }
    }
    