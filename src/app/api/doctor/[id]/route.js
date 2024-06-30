import { connectDb } from "@/lib/ConnectDB";
import { ObjectId } from "mongodb";

export const GET = async (request, {params}) => {
    try {
        const db = await connectDb()
        const doctorsCollection = db.collection("doctors");
        const query = {_id : new ObjectId(params.id)}
        const resp = await doctorsCollection.findOne(query);
        return Response.json(resp);
    } catch (error) {
        console.log(error);
    }
}