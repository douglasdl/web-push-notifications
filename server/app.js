const express = require("express");
const app = express();
const webpush = require('web-push');
const cors = require("cors")
require('dotenv').config();

const port = 3000;

const apiKeys = {
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY
}

webpush.setVapidDetails(
  'mailto:douglas_san@hotmail.com',
  apiKeys.publicKey,
  apiKeys.privateKey
)

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
})

const subDatabse = [];

app.post("/save-subscription", (req, res) => {
  subDatabse.push(req.body);
  res.json({ status: "Success", message: "Subscription saved!" })
})

app.get("/send-notification", (req, res) => {
  webpush.sendNotification(subDatabse[0], "Hello world");
  res.json({ 
    "statue": "Success", 
    "message": "Message sent to push service" 
  });
})

app.listen(port, () => {
  console.log("Server running on port 3000!");
})