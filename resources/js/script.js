let player = new Image();
player.src = '../resources/img/player.png';
let position={
    x:50,
    y:30,
    };
let canvasDom;
let context;



document.addEventListener('DOMContentLoaded', function(){
  
    // objet du DOM Canvas
  canvasDom = document.querySelector('#canvas');
  
  // Utiliser la librairie permetant de manipulation 2D
  context= canvasDom.getContext("2d");
  

 
 

  
  playerDraw(player,position);
  
  move();
 
});





function playerDraw(player,pos) {
   // body...  
   context.fillStyle = '#DDDDDD';
  context.fillRect(0,0,canvasDom.width,canvasDom.height);
 
  context.mozImageSmoothingEnabled = false;
  context.webkitImageSmoothingEnabled = false;
  context.msImageSmoothingEnabled = false;
  context.imageSmoothingEnabled = false;
    context.drawImage(player,pos.x,pos.y,90,90);
   
}

function move(){
 let limitH= canvasDom.height-20;
let limitW= canvasDom.width-20;
 window.addEventListener("keydown", function (event) {

switch (event.key) {
  case "ArrowDown":
   if(position.y<limitH){
    position.y+=2;
    
    
  playerDraw(player,position);
   }
    break;
  case "ArrowUp":
    if(position.y>0){
   position.y-=2;
   console.log(position.y);
  
   
   playerDraw(player,position);
    }
    break;
  case "ArrowLeft":
      if(position.x>0){
      position.x-=2;
     
      
      playerDraw(player,position);
      }
    break;
  case "ArrowRight":
      if(position.x<limitW){
       position.x+=2;
       
       
       playerDraw(player,position);
      }
    
    break;
     default:
    return;
}
event.preventDefault();
}, true);}

