import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { id } = params
  const data = await dbConnect('spotCollection').findOne({ _id: new ObjectId(id) });

  return NextResponse.json(data)
}