let player = new Image();
player.src = 'img/player.png';
let playerPosition={
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
  

 
 

  
  playerDraw(player,playerPosition);
  surfaceDraw(surface); 
  move();
  
 
});

let surface=[
  {
    size:20,
    x:100,
    color:"#9B59B6"
  },
  {
    size:30,
    x:130,
    color:"#9B59B6"
  }
]


function surfaceDraw(object){
  console.log("function");
  for (let i = 0; i < object.length; i++) {
    console.log("surface"+i);
    context.fillStyle=object[i].color;
    context.fillRect(object[i].x,canvasDom.height-20,object[i].size,object[i].size);
    
  }
  

}



function playerDraw(player,pos) {
   // body...  
   context.fillStyle = '#DDDDDD';
  context.fillRect(pos.x,pos.y,64,64);
 
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

      playerPosition.y-=1;
   
    console.log("for");
    playerDraw(player,playerPosition);
    }, 200);
    
  }
 

}


function fall(){
let etape = 0;
let posActu = playerPosition.y+7;

if (etape==0) {
  for(let i=playerPosition.y; i < playerPosition.y+7; i+=0.5) {
      
    if (playerPosition.y!=canvasDom.height-7) {
      console.log("while");
    setTimeout(() => {
      playerPosition.y+=0.5;
      playerDraw(player,playerPosition);
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
  
  posActu=playerPosition.y+20;
if (etape==1) {
  for(let i=playerPosition.y; i < playerPosition.y+20 ;i+=0.5) {
      
    if (playerPosition.y!=canvasDom.height-20) {
      console.log("while");
    setTimeout(() => {
      playerPosition.y+=0.5;
      playerDraw(player,playerPosition);
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
  for(let i=playerPosition.y; i < canvasDom.height-92; i+=0.5) {
      
    if (playerPosition.y!=canvasDom.height-20) {
      console.log("while");
    setTimeout(() => {
      playerPosition.y+=0.5;
      playerDraw(player,playerPosition);
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
   if(playerPosition.y<limitH){
    playerPosition.y+=2;
    
    
  playerDraw(player,playerPosition);
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
      if(playerPosition.x>0){
      playerPosition.x-=2;
     
      
      playerDraw(player,playerPosition);
      }
    break;
  case "ArrowRight":
      if(playerPosition.x<limitW){
       playerPosition.x+=2;
       
       
       playerDraw(player,playerPosition);
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

