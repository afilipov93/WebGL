window.onload = function() {
var inf = new Infinitorium();
inf.initializeCanvas();
}


function Infinitorium() {

 var canvas = document.getElementById("infinitorium");
 var context = canvas.getContext("2d");

this.initializeCanvas = function() {
   fillCanvasToWindow(canvas);
   displayDimension(context);
   window.addEventListener("resize", function() {
     fillCanvasToWindow(canvas);
     displayDimension(context);
   });
}

function fillCanvasToWindow(canvas) {
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
}

function displayDimension(context) {
  var width = context.canvas.width;
  var height = context.canvas.height;
  context.fillStyle = "rgba(255,255,255,0.3)";
  context.fillText("W:"+ width + " H:" + height, 10, 20);
}

};




