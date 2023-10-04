// /api/new-meetup

import { MongoClient } from "mongodb";

//get data from node.js & express.js
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    //MongoDB connection
    const client = await MongoClient.connect(":::using-mongodb-command:::"); //MongoDB command
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    //insult data
    const result = await meetupsCollection.insertOne({
      data,
    });

    //close db connection
    client.close();

    //return response
    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
