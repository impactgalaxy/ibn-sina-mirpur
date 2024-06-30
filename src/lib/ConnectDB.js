const { MongoClient, ServerApiVersion } = require("mongodb");

let db;
const uri = `mongodb+srv://${process.env.ibn_sina_user}:${process.env.ibn_sina_password}@cluster0.s7sbkwf.mongodb.net/?appName=Cluster0`;
export const connectDb = async () => {
    if (db) return db;
    try {
        const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
            }
        });

        db = client.db("ibnSinaMirpur");
        return db;
    } catch (error) {
        console.log(error);
    }
}