import { connectDb } from "@/lib/ConnectDB";

export const GET = async () => {
    try {
        const db = await connectDb()
        const doctorsCollection = db.collection("doctors");
        const resp = await doctorsCollection.find().toArray();
        return Response.json(resp);
    } catch (error) {
        console.log(error);
    }
}
