'use server'
import dbConnect from "@/lib/dbConnect";
import bcrypt from 'bcrypt'

export const loginUser = async (payload) => {
  const { email, password } = payload

  const userCollection = await dbConnect('userCollection')
  const user = await userCollection.findOne({ email })

  if (!user) {
    console.log("Not user");
    return null
  }
  const isPasswordOK = await bcrypt.compare(password, user.password)
  if (!isPasswordOK) return null

  return user
}