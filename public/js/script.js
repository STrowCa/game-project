let player = new Image();
player.src = 'img/player.png';
let playerPosition={
    x:20,
    y:85,
    jumpHeightLimit: 30,
    jumpPosition:0,
    jumpSpeed:0.87,
    fallingSpeed:1,
    ascensionSpeed:3,
    dropSpeed:0.2
    };

let verticalCollision= 0;
let horizontalCollision= 0;





let canvasDom;
let context;



document.addEventListener('DOMContentLoaded', function(){
  
    // objet du DOM Canvas
  canvasDom = document.querySelector('#canvas');
  
  // Utiliser la librairie permetant de manipulation 2D
  context= canvasDom.getContext("2d");
  

 
 

  
  Draw();
  move();
  
 
});

let surface=[
  {
    size:20,
    color:"#9B59B6",
    x:100,
    y:130
  },
  {
    size:30,
    x:130,
    color:"#9B59B6",
    y:120
  }
]

function verifyVerticalCollision(object){

for (let i = 0; i < object.length; i++) {
  if ( playerPosition.y=== object[i].y-65) {
    verticalCollision+= 1;
  }
  else{
    verticalCollision+=0 ;
  }
  
}
console.log(verticalCollision);
}


function verifyHorizontalCollision(object){

  for (let i = 0; i < object.length; i++) {
    if (object[i].x-object[i].size<playerPosition.x && playerPosition.x< object[i].x+object[i].size) {
      
      horizontalCollision+= 1;
  }
  else{
    horizontalCollision+=0 ;
  }
  }
console.log(horizontalCollision);
}

function surfaceDraw(object){
  console.log("function");
  for (let i = 0; i < object.length; i++) {
    console.log("surface"+i);
    context.fillStyle=object[i].color;
    context.fillRect(object[i].x,object[i].y,object[i].size,object[i].size);
    
  }
  

}

function backgroundDraw(){

  context.fillStyle = '#9FE3F9';
  context.fillRect(0,0,canvasDom.width,canvasDom.height);

}

function playerDraw(player,pos) {
   // body...  
  
 
  context.mozImageSmoothingEnabled = false;
  context.webkitImageSmoothingEnabled = false;
  context.msImageSmoothingEnabled = false;
  context.imageSmoothingEnabled = false;
  context.drawImage(player,pos.x,pos.y);
  
}

  

function Draw(){

backgroundDraw();

surfaceDraw(surface);

playerDraw(player,playerPosition);


}


function jump(){
  playerPosition.ascensionSpeed*=playerPosition.jumpSpeed;

  verifyHorizontalCollision(surface);
  verifyVerticalCollision(surface);
    if (playerPosition.jumpPosition < playerPosition.jumpHeightLimit && verticalCollision === 0 && horizontalCollision === 0){
   requestAnimationFrame(jump);
  playerPosition.y-=playerPosition.ascensionSpeed;
   Draw();
   playerPosition.jumpSpeed*=1.06;
   playerPosition.jumpPosition+=playerPosition.ascensionSpeed;
   console.log(playerPosition.y)
   verticalCollision=0;
   horizontalCollision=0;
  }
  else{
    playerPosition.jumpSpeed=0.87;
    playerPosition.jumpPosition=0;
    playerPosition.ascensionSpeed=0.63;
    console.log("fin "+playerPosition.jumpSpeed);
  }

}



function fall(){
  
 playerPosition.dropSpeed*=playerPosition.fallingSpeed;
 verifyHorizontalCollision(surface);
 verifyVerticalCollision(surface);

if (playerPosition.y > canvasDom.height-65 ){
  playerPosition.y = canvasDom.height-65;
  Draw();
} 
 
if (playerPosition.y < canvasDom.height-65 && verticalCollision === 0 && horizontalCollision === 0){
 requestAnimationFrame(fall);
playerPosition.y+=playerPosition.dropSpeed;
 Draw();
 playerPosition.fallingSpeed+=1.2;
 verifyVerticalCollision= 0;
 horizontalCollision=0;
}

else{
  playerPosition.fallingSpeed=1;
  playerPosition.dropSpeed=0.2;
  console.log("fin "+playerPosition.fallingSpeed);
}

}


function move(){
 
 let limitH= canvasDom.height-65;
let limitW= canvasDom.width-44;
 window.addEventListener("keydown", function (event) {
console.log(event.key)
switch (event.key) {
  
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
      verifyVerticalCollision(surface);
      verifyHorizontalCollision(surface);
       if(horizontalCollision >0 && verticalCollision > 0){

        playerPosition.x+=2;
        Draw();
        horizontalCollision=0;
        verticalCollision=0;
       }
       else{
       
        Draw();
      
      }
      
      }
    break;
  case "ArrowRight":
      if(playerPosition.x<limitW){
       playerPosition.x+=2;
       verifyVerticalCollision(surface);
       verifyHorizontalCollision(surface);
       console.log(playerPosition.x);
       console.log(horizontalCollision);
       if(horizontalCollision > 0 && verticalCollision > 0){

        playerPosition.x-=2;
        Draw();
        horizontalCollision=0;
        verticalCollision=0;
       }
       else{
       
        Draw();
      
      }
      }
    
    break;

    case " ":
      console.log("jump");
      window.requestAnimationFrame(jump);
      
      setTimeout(() => {
         window.requestAnimationFrame(fall);
      }, 1000);
     
      
      
    
    break;
     default:
    return;
}

event.preventDefault();
}, true);}

