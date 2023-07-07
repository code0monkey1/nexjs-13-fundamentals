import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

console.log(process.env.GOOGLE_CLIENT_SECRET)
console.log(process.env.GOOGLE_CLIENT_ID)

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

     
  }
})

export { handler as GET, handler as POST };
