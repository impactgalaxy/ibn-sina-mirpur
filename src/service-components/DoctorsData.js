const { MongoClient, ServerApiVersion } = require('mongodb');


// Create a MongoClient with a MongoClientOptions object to set the Stable API version


// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
    
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);

export default async function DoctorsData() {
    try {
        const doctorsCollection =  client.db("ibnSinaMirpur").collection("doctors")
    } catch (error) {
        console.log(error);
    }
  return (
    <div>
      
    </div>
  )
}
