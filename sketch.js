
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;
var  pendulumDiameter=50;


function setup() {
	canvas=createCanvas(800, 600);


    engine = Engine.create();
    world = engine.world;

    let canvasmouse=Mouse.create(canvas.elt);
     canvasmouse.pixelRatio=pixelDensity();
     
     var options = {
       mouse: canvasmouse
     }

     mConstraint = MouseConstraint.create(engine,options);
     World.add(world,mConstraint);

    pendulum1 = new Bob(300, 350, 50);
    pendulum2 = new Bob(350, 350, 50);
    pendulum3 = new Bob(400, 350, 50);
    pendulum4 = new Bob(450, 350, 50);
    pendulum5 = new Bob(500, 350, 50);
    roof = new Roof(400, 100, 300, 40);
    sling1 = new String(pendulum1.body, roof.body, -pendulumDiameter*2.4, 0);
    sling2 = new String(pendulum2.body, roof.body, -pendulumDiameter*1.2, 0);
    sling3 = new String(pendulum3.body, roof.body, pendulumDiameter*0, 0);
    sling4 = new String(pendulum4.body, roof.body, pendulumDiameter*1.2, 0);
    sling5 = new String(pendulum5.body, roof.body, pendulumDiameter*2.4, 0);

	  Engine.run(engine);
  
}


function draw() {
  background("blue");

  fill("white");
  textSize(20);
  text("Drag the bob with the mouse", 270, 20)
  
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();

  roof.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
}













