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
  context.drawImage(player,pos.x,pos.y);
  
}
function jump(){
console.log("function");
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {

      position.y-=1;
   
    console.log("for");
    playerDraw(player,position);
    }, 200);
    
  }
 

}


function fall(){
let etape = 0;
let posActu = position.y+7;

if (etape==0) {
  for(let i=position.y; i < position.y+7; i+=0.5) {
      
    if (position.y!=canvasDom.height-7) {
      console.log("while");
    setTimeout(() => {
      position.y+=0.5;
      playerDraw(player,position);
    }, 500); 
    }
    else{
      i=posActu;
      etape="ouf";
      console.log(i);
      console.log(etape);
    }
    
  }
 etape++;
}
  
  posActu=position.y+20;
if (etape==1) {
  for(let i=position.y; i < position.y+20 ;i+=0.5) {
      
    if (position.y!=canvasDom.height-20) {
      console.log("while");
    setTimeout(() => {
      position.y+=0.5;
      playerDraw(player,position);
    }, 500); 
    }
    else{
      i=posActu;
      etape="ouf";
      console.log(i);
      console.log(etape);
    }
  }
  etape++;
}

posActu=canvasDom.height-92;
 if (etape==2) {
  for(let i=position.y; i < canvasDom.height-92; i+=0.5) {
      
    if (position.y!=canvasDom.height-20) {
      console.log("while");
    setTimeout(() => {
      position.y+=0.5;
      playerDraw(player,position);
    }, 500); 
    }
    else{
      i=posActu;
      etape="ouf";
      console.log(i);
      console.log(etape);
    }
    
  }
 }

}
  



function move(){
 
 let limitH= canvasDom.height-65;
let limitW= canvasDom.width-44;
 window.addEventListener("keydown", function (event) {
console.log(event.key)
switch (event.key) {
  case "ArrowDown":
   if(position.y<limitH){
    position.y+=2;
    
    
  playerDraw(player,position);
   }
    break;
  case "ArrowUp":
    console.log("jump");
      window.requestAnimationFrame(jump);
      setTimeout(() => {
        window.requestAnimationFrame(fall);
      }, 750);
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

    case " ":
      console.log("jump");
      window.requestAnimationFrame(jump);
      setTimeout(() => {
        window.requestAnimationFrame(fall);
      }, 750);
      
    
    break;
     default:
    return;
}

event.preventDefault();
}, true);}

