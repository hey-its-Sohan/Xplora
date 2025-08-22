import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {

  const data = await dbConnect('spotCollection').find().toArray();

  return NextResponse.json(data)
}