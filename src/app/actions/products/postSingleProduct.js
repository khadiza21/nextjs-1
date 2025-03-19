"use server"

import dbConnect from "@/lib/dbConnect";

export const postSingleData = async (data) => {

try {

    const result = await dbConnect("comments").insertOne(data);
    revalidatePath("/products")
    return  result;
} catch (error) {
    return null
}
}