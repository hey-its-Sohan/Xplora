import { loginUser } from "@/app/actions/auth/loginUser"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import dbConnect from "./dbConnect";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Enter Email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const user = await loginUser(credentials)

        // If no error and we have user data, return it
        if (user) {
          return user
        }
        // Return null if user data could not be retrieved
        return null
      }
    }),

    // google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log({ user, account, profile, email, credentials });
      if (account) {
        const { providerAccountId, provider } = account
        const { email: user_email, image, name } = user
        const userCollection = dbConnect('userCollection')
        const isUserExist = await userCollection.findOne({ providerAccountId })
        if (!isUserExist) {
          const payload = { providerAccountId, provider, email: user_email, image, name }
          await userCollection.insertOne(payload)
        }

      }
      return true
    },
  }
}
