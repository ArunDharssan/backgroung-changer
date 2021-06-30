var g=0;
var r=0;
var b=0;
var btn_red;
var btn_green;



function setup() {
  createCanvas(400, 400); 
   btn_red=createButton("RED");
   btn_red.position(100,50);
   btn_red.mousePressed(button);
btn_green=createButton("GREEN");
btn_green.position(250,50);
btn_green.mousePressed(button1);





}

function draw() {
  
  background(r,g,b);
  

}


function button(){
 
r=255;
g=0;
b=0;
}
function button1(){
  
  r=0;
  g=255;
  b=0;
}