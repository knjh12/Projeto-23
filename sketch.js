const Mecanismo = Matter.Mecanismo;
const Mundo= Matter.Mundo;
const Corpos = Matter.Corpos;

var mecanismo, mundo;
var caixa1;

function setup(){
    var telas = createCanvas(400,400);
    mecanismo = Mecanismo.create();
    mundo = mecanismo.mundo;

    caixa1 = new Box(200,300,50,50);
}

function draw(){
    background(0);
    Mecanismo.update(mecanismo);
    caixa1.display();
   
}