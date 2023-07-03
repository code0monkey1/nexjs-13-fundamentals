abstract class Test{

  constructor(private name:string){}

  public abstract setName(name);
  
}


class TestingTest extends Test{
   
  constructor(name:string){
    super(name);
  }

  public setName(name: any) {
    throw new Error("Method not implemented.");
  }

}