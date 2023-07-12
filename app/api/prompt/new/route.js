import User from "../../../../models/user";
import { connectToDb } from "../../../../utils/database";

export async function POST(req,res){
 
   try{
      connectToDb()

      if(!req.body){

        res.status(501).send("Error : No body found")

      }

   }
   catch(e){

    res.status(500).send("Error : "+e.message)

   } 
  
     
}