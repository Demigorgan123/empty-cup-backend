require('dotenv').config()
const express = require('express')
const {MongoClient} = require('mongodb')
const cors = require('cors')
const db_url = `mongodb+srv://Dhanishkumar:${process.env.PASS_WD}@cluster0.snxi3hb.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(db_url)
const app = express()
app.use(cors({
    origin:"*"
}))
app.get('/', async (req, resp)=>{
    const connect = await client.connect()
    const db = connect.db('MyDB')
    const coll = db.collection('Designers')
    const res = await coll.find().toArray();
    resp.send(res);
    
})
app.listen(process.env.PORT, ()=>console.log('listening on port 5000...'))
