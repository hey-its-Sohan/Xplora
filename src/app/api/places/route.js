import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';

export async function POST(req) {
  try {
    const data = await req.json();

    const spotCollection = await dbConnect('spotCollection');

    const result = await spotCollection.insertOne(data);

    return NextResponse.json({ success: true, insertedId: result.insertedId });
  } catch (error) {
    console.error('Error saving place:', error);
    return NextResponse.json({ success: false, message: 'Failed to save place' }, { status: 500 });
  }
}
