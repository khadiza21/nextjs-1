"use server"

import dbConnect from "@/lib/dbConnect";

export  const getProducts = async () => {
try {
    const data = await dbConnect("comments").find({}).toArray();
     return data;
} catch (error) {
    return []
}
 
}
