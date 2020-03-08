class Ground{
constructor(){
    var options ={isStatic:true}
this.body=Bodies.rectangle(200,380,400,40,options)
World.add(world,this.body)

}
display(){
var pos=this.body.position
rectMode(CENTER)
fill("blue")
rect(pos.x,pos.y,400,40)


}
}