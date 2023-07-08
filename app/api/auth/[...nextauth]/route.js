import { connectToDb } from "@utils/database";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers:[
    GoogleProvider({
      clientId:process.env.GOOGLE_CLIENT_ID,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  async session({session}){

  },
  async signIn({profile}){
     
      try{
         await connectToDb()

         //check if user already exists

         // if not , create a new user  

         return true;
      }
      catch(error){

       console.error(error)

       return false
       
      }
     
  }
})

export { handler as GET, handler as POST };
