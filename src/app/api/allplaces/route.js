import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (req) => {

  const data = await dbConnect('spotCollection').find().toArray();
  revalidatePath('/allspots')

  return NextResponse.json(data)
}