const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()

const dbConnet = () => {
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.eg5lvmc.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client.connect(err => {
        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
        console.log('db connect from utils')
        client.close();
    });
}

module.exports = dbConnet;
