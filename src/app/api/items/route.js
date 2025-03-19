// https://nextjs.org/docs/app/building-your-application/routing/route-handlers

import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

// export async function GET() {
//   const data = {
//     message: "Successfully get data",
//     error: false,
//     status: 200,
//   };
//   return Response.json({ data });
// }

export async function GET() {
  const data = await dbConnect("comments").find({}).toArray();
  return Response.json(data);
}

export async function POST(req) {
  const postedData = await req.json();
  const result = await dbConnect("comments").insertOne(postedData);

  // if data forcefully cached then only show cached data . updated or new post data not showing on ui so for updated data showing in ui need to use this revalidatePath. this process reduced  network traffic.

  revalidatePath("/products")
  return Response.json( result);
}

// export async function POST(req) {
//   const postedData = await req.json();

//   return Response.json({ postedData });
// }
