import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import {prisma} from '../../../db'


export default NextAuth({
  adapter: PrismaAdapter(prisma),
  secret:<string>process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: <string>process.env.GOOGLE_CLIENT_ID,
      clientSecret: <string>process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
   pages:{
    signIn:'/auth/signin'
  } 
})