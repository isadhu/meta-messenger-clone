import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
    // ...add more providers here
  ],

  secret: process.env.NEXTAUTH_SECRET!, // You can quickly create a good value on the command line via this openssl command. $ openssl rand -base64 32
  pages:{
    signIn:'/auth/signin',
  }
}

export default NextAuth(authOptions)
