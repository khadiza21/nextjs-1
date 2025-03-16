import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const p = await params;
  const singleData = await dbConnect("comments").findOne({
    _id: new ObjectId(p.id),
  });

  return Response.json(singleData);
  //return Response.json({ params: p });
}

export async function DELETE(req, { params }) {
  const p = await params;
  const response = await dbConnect("comments").deleteOne({
    _id: new ObjectId(p.id),
  });

  return Response.json(response);
}

export async function PATCH(req, { params }) {
  const p = await params;
  const postedData = await req.json();
  const filter = { _id: new ObjectId(p.id) };
  const updatedResponse = await dbConnect("comments").updateOne(filter, {$set: {...postedData}}, {upsert:true});

  return Response.json(updatedResponse);
}
