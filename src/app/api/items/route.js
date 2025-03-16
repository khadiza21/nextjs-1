// https://nextjs.org/docs/app/building-your-application/routing/route-handlers

import dbConnect from "@/lib/dbConnect";

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
  return Response.json( result);
}

// export async function POST(req) {
//   const postedData = await req.json();

//   return Response.json({ postedData });
// }
