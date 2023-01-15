class EntityProperties{
constructor(sizeX,sizeY){

    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.horizontalCollision = 0;
    this.verticalCollision = 0;

}



    verifyHorizontalCollision(object,entity){

        
          if (object.x-object.size < entity.x && entity.x < object.x+object.size) {
            
            this.horizontalCollision+= 1;
        }
        else{
            this.horizontalCollision+=0 ;
        }
        
      console.log(this.horizontalCollision);
      return this.horizontalCollision; 
      }


      verifyVerticalCollision(object,entity){

        
          if ( entity.y > object.y-this.sizeY) {
            this.verticalCollision+= 1;
          }
          else{
            this.verticalCollision+=0 ;
          }
          
        
        console.log(this.verticalCollision);
        return this.verticalCollision;
        }
        recupHorizontalCollision(){
        return this.horizontalCollision;
       }

        recupVerticalCollision(){
        return this.verticalCollision;
       }

       
       resetVerticalCollision(){
        this.verticalCollision= 0
        return this.verticalCollision;
       }
       resetHorizontalCollision(){
        this.horizontalCollision= 0
        return this.horizontalCollision;
       }
}

export default EntityProperties;