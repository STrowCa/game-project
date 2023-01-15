
let player = new Image();
player.src = 'img/player.png';
let playerPosition={
    x:20,
    y:60,
    jumpHeightLimit: 30,
    jumpPosition:0,
    jumpSpeed:0.87,
    fallingSpeed:1,
    ascensionSpeed:3,
    dropSpeed:0.2,
    weight:22,
    fallState:0,
    collisionState:0
    };

    let surface=[
  {
    height:10,
    weight:300,
    color:"#9B59B6",
    x:0,
    y:131
  },
  {
    height:20,
    weight:20,
    color:"#9B59B6",
    x:100,
    y:131
  },
  {
    height:40,
    weight:20,
    x:130,
    color:"#9B59B6",
    y:131
  },
  {
    height:30,
    weight:20,
    x:150,
    color:"#9B59B6",
    y:131
  },
  
]
let verticalCollision= [];
let horizontalCollision= [];





let canvasDom;
let context;

function verifyHorizontalCollision(object){
  let difference;
// Vérifie si l'entitée se trouve entre la gauche et la droite d'une surface, effectue cette verification pour chaque surface présente dans le niveau
  for (let i = 0; i < object.length; i++) {
    difference= 20-object[i].weight;
    if (object[i].x-object[i].weight-playerPosition.weight-difference<playerPosition.x && playerPosition.x< object[i].x-difference) {
      //si l'entitée est présente dans la zone de collision, on rajoute une erreur à la variable
      horizontalCollision[i]= 1;
  }
  else{
    horizontalCollision[i]= 0 ;
  }
  }
//window.requestAnimationFrame(verifyHorizontalCollision(object))
}
function verifyVerticalCollision(object){
  let difference;
// Vérifie si l'entitée se trouve entre le haut et le bas d'une surface, effectue cette verification pour chaque surface présente dans le niveau
for (let i = 0; i < object.length; i++) {
  difference= object[i].y-130;
  if ( playerPosition.y> object[i].y-object[i].height-43-difference && playerPosition.y< object[i].y+object[i].height) {
    //si l'entitée est présente dans la zone de collision, on rajoute une erreur à la variable
    verticalCollision[i]= 1;
  }
  else{
    verticalCollision[i]= 0;
  }
  
}
//window.requestAnimationFrame(verifyVerticalCollision(object))
}

function verifyCollision(collisionType1,collisionType2,object,Entity){
  verifyHorizontalCollision(object);
  verifyVerticalCollision(object);
  for(let i=0; i<collisionType1.length;i++){
    
    if(collisionType1[i] > 0 && collisionType2[i] > 0){
      console.log(Entity.collisionState)
      return Entity.collisionState= 1;
    }
  }
  console.log(Entity.collisionState)
  return Entity.collisionState = 0;
}


document.addEventListener('DOMContentLoaded', function(){
  
    // objet du DOM Canvas
  canvasDom = document.querySelector('#canvas');
  
  // Utiliser la librairie permetant de manipulation 2D
  context= canvasDom.getContext("2d");
  
  
  
  Draw();
  fall(playerPosition);
  move();
  
 
});


//dessine toutes les surfaces du niveau
function surfaceDraw(object){
  for (let i = 0; i < object.length; i++) {
    context.fillStyle=object[i].color;
    context.fillRect(object[i].x,19+object[i].y-(object[i].height),object[i].weight,object[i].height);
  }
}

//dessine le fond du niveau
function backgroundDraw(){
  context.fillStyle = '#9FE3F9';
  context.fillRect(0,0,canvasDom.width,canvasDom.height);
}

//dessine le joueur
function playerDraw(player,pos) {
  //on désactive tout les lissages de l'image pour garder le pixel art nette
  context.mozImageSmoothingEnabled = false;
  context.webkitImageSmoothingEnabled = false;
  context.msImageSmoothingEnabled = false;
  context.imageSmoothingEnabled = false;
  context.drawImage(player,pos.x,pos.y);
}

  
//applique tout les dessins dans le bonne ordre pour évité qu'un dessin soit trop mis en avant
function Draw(){
//dessine le fond du niveau
backgroundDraw();
//dessine toutes les surfaces du niveau
surfaceDraw(surface);
//dessine le joueur
playerDraw(player,playerPosition);


}

//fonction de saut, vitesse d'ascension dégressive à retravailler 
function jump(){
  verifyCollision(horizontalCollision, verticalCollision, surface, playerPosition);
   playerPosition.ascensionSpeed*=playerPosition.jumpSpeed;
   //vérifie les collisions
   //verifyHorizontalCollision(surface);
   //verifyVerticalCollision(surface);
  
   //vérifie si l'entitée peut continuer son ascension
   if (playerPosition.jumpPosition < playerPosition.jumpHeightLimit && playerPosition.collisionState< 1 ){
   window.requestAnimationFrame(jump);
   playerPosition.y-=playerPosition.ascensionSpeed;
   Draw();
   playerPosition.jumpSpeed*=1.06;
   playerPosition.jumpPosition+=playerPosition.ascensionSpeed;
   
   
  }
  //reset toutes les variables modifié lors de l'application de la fonction (évite des sauts à hauteur exponentielle, réutilisable en power up)
  else{
    //verticalCollision=0;
    //horizontalCollision=0;
    playerPosition.jumpSpeed=0.87;
    playerPosition.jumpPosition=0;
    playerPosition.ascensionSpeed=0.63;
    
  }

}


//fonction de chute, vitesse de chute progréssive à faire !!!
function fall(Entity){
  verifyCollision(horizontalCollision, verticalCollision, surface, playerPosition);
   /* playerPosition.dropSpeed*=playerPosition.fallingSpeed;
   verifyHorizontalCollision(surface);
   verifyVerticalCollision(surface);
 


if (playerPosition.y > canvasDom.height-65 ){ 
  
    verifyHorizontalCollision(surface);
    verifyVerticalCollision(surface);
    
  
  playerPosition.y = canvasDom.height-65;
  Draw();
}
if (playerPosition.y < canvasDom.height-65 && verticalCollision === 0 && horizontalCollision === 0 || playerPosition.jumpPosition < playerPosition.jumpHeightLimit && verticalCollision >= 1 && horizontalCollision === 0 || playerPosition.jumpPosition < playerPosition.jumpHeightLimit && verticalCollision === 0 && horizontalCollision >= 1 ) {
  for (let i = 0; i < surface.length; i++) {
    verifyHorizontalCollision(surface);
    verifyVerticalCollision(surface);
    
  }
 requestAnimationFrame(fall);
playerPosition.y+=playerPosition.dropSpeed;
 Draw();
 playerPosition.fallingSpeed += 1.2;
 verticalCollision = 0;
 horizontalCollision = 0;
}*/

   switch (Entity.fallState) {
    case 0:
      setTimeout(() => {
        
        
          
          verifyCollision(horizontalCollision, verticalCollision, surface, playerPosition);
          Entity.fallState=1;
          fall(playerPosition);
      }, 1000);
      break;
    case 1:
      
      
      if (Entity.y < canvasDom.height-65 && Entity.collisionState<1 ) {
        while(Entity.y < canvasDom.height-65 && Entity.collisionState<1){
          Entity.y +=2;
          
          verifyCollision(horizontalCollision, verticalCollision, surface, playerPosition);
        }
        if(Entity.y > canvasDom.height-65 || Entity.collisionState>0){
          
          Entity.y-=2;
          Entity.fallState=0;
          }
          
          
      Draw();
      
   }
   
     
      break;
   
   
    
     

   
   }

   
   
   
 

/*else{
  
    verifyHorizontalCollision(surface);
    verifyVerticalCollision(surface);
    
  
  playerPosition.fallingSpeed=1;
  playerPosition.dropSpeed=0.2;
  
}*/

}

//fonction de déplacement, à refaire afin de pouvoir utiliser plusieur touche à la fois
function move(){
  verifyCollision(horizontalCollision, verticalCollision, surface, playerPosition);
 let limitW= canvasDom.width-44;
 window.addEventListener("keydown", function (event) {
 console.log(event.key)
 switch (event.key) {
  
   case "ArrowUp":
      window.requestAnimationFrame(jump);
      setTimeout(() => {
        fall(playerPosition);
      }, 750);

    break;

   case "ArrowLeft":
    //fait reculer le joueur de 2 pixels
      if(playerPosition.x>0){
        playerPosition.x-=2;
        verifyCollision(horizontalCollision,verticalCollision,surface,playerPosition);
        
      //si le joueur rentre en collision avec une surface, déplace le jouer de 2 pixel en avant pour donner l'illusion de collision
       if(playerPosition.collisionState>0){
        playerPosition.x+=2;
        verifyCollision(horizontalCollision,verticalCollision,surface,playerPosition);
        Draw();
        
       }
       else{
         Draw();
       }
      }
      if(playerPosition.collisionState<1){
        fall(playerPosition);
      }

    break;

  case "ArrowRight":
    //fait avancer le joueur de 2 pixels
      if(playerPosition.x<limitW){
         playerPosition.x+=2;
         verifyCollision(horizontalCollision,verticalCollision,surface,playerPosition);
        //si le joueur rentre en collision avec une surface, déplace le jouer de 2 pixel en arrière pour donner l'illusion de collision
         if(playerPosition.collisionState>0){
           playerPosition.x-=2;
           verifyCollision(horizontalCollision,verticalCollision,surface,playerPosition);
           Draw();
         }
         else{
           Draw();
         }

      
      }
      if(playerPosition.collisionState<1){
        fall(playerPosition);
      }
      
    break;

    case " ":
      
    window.requestAnimationFrame(jump);
    setTimeout(() => {
      fall(playerPosition);
    }, 750);
     
      
      
    break;
     default:
    return;
}

event.preventDefault();
}, true);}

