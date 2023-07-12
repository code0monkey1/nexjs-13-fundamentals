import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import User from "../../../../models/user";
import { connectToDb } from "../../../../utils/database";

 /* The `handler` is a function that is used as the main entry point for NextAuth. It is
responsible for handling authentication requests and callbacks. It is exported as both a GET
and POST handler, which means it can handle both GET and POST requests. */

const handler = NextAuth({
  providers:[
    GoogleProvider({
      clientId:process.env.GOOGLE_CLIENT_ID,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  /* The `callbacks` property in the NextAuth configuration is used to define functions that handle
  specific events during the authentication process. In this code, there are two callback functions
  defined: `session` and `signIn`. */
  callbacks:{

    /* The `session` callback function is responsible for modifying the session object that is
    passed to the client after a successful authentication. In this code, the `session`
    function is used to add the user's ID to the session object. It retrieves the user's ID
    from the database based on their email address and sets it as the `id` property of the
    `session.user` object. This allows the user's ID to be easily accessed and used in
    subsequent requests or pages. */

    async session({session}){
  
      // get session user from current session
      const sessionUser = await User.findOne({
        email:session.user.email
      })
   
      // set the session.id to the  current users session id 
      session.user.id=sessionUser._id.toString();
  
      return session
    },

    /**
     * The function signIn checks if a user already exists in the database, and if not, creates a new
     * user with the provided profile information.
     * @returns a boolean value. If the function is successful, it will return true. If there is an
     * error, it will return false.
     */
    
    async signIn({profile}){
       
        try{

          // every time you sign in , you need to connect to the db 
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
