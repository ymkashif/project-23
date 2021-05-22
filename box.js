class Box {
    constructor(x,y,width,height){
        var options = {
            isStatic  : true
        }
        this.body = bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        Push();
        Translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        Fill(0)
        rectangle(0,0,this.width,this.height);
        Pop();
    }
};