class Airplane{
     private speed;


     public setSpeed(speed:string){
          this.setSpeed(speed)
     } 
     public displaySpeed(){
      console.log(this.speed)
     }
}

class Jet extends Airplane{

     
      public displaySpeed(): void {
          super.displaySpeed()
      }


}