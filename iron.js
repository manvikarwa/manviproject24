class Iron{
    constructor(x,y){
        var options={
            'restitution': 0.5,
            'friction':3,
            'density': 30
        }
        this.body = Bodies.rectangle(x,y,80,50,options);
        this.width=80;
        this.height=50;
        World .add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate (angle);
        fill ("green");
        rect(0,0,this.width,this.height);
        pop ();

    }
}