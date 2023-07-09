import User from "@models/user";
import { connectToDb } from "@utils/database";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

 /* The `handler` is a function that is used as the main entry point for NextAuth. It is
responsible for handling authentication requests and callbacks. It is exported as both a GET
and POST handler, which means it can handle both GET and POST requests. */

const
handler = NextAuth({
  providers:[
    GoogleProvider({
      clientId:process.env.GOOGLE_CLIENT_ID,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks:{

    async session({session}){
  
      // get session user from current session
      const sessionUser = await User.findOne({
        email:session.user.email
      })
   
      // set the session.id to the  current users session id 
      session.user.id=sessionUser._id.toString();
  
      return session
    },
    async signIn({profile}){
       
        try{
           await connectToDb()
  
           //check if user already exists
           const userExists = await User.findOne({
            email:profile.email
           })
   
           // if not , create a new user  
          if(!userExists){
            await User.create({
              username: profile.name.replace(' ','').toLowerCase(),
              email:profile.email,
              image:profile.picture
            })
          }
           return true;
        }
        catch(error){
  
         console.error(error)
  
         return false
         
        }
       
    }

  }
})

export { handler as GET, handler as POST };
