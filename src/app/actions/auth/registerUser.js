'use server';

import dbConnect from "@/lib/dbConnect";
import bcrypt from 'bcrypt'

export const registerUser = async (payload) => {
  const userCollection = dbConnect('userCollection')

  // Validation
  const { email, password } = payload
  if (!email || !password) return null

  const user = await userCollection.findOne({ email: payload.email })

  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 10)
    payload.password = hashedPassword
    const result = await userCollection.insertOne(payload)
    result.insertedId = result.insertedId.toString()
    return { ok: true, result };
  }
  return { ok: false, message: "User already exists" }
}