//Node js imports
const functions = require("firebase-functions");
//npm install express for testing
const express = require("express");
const cors = require("cors"); //npm i cors

//npm i stripe
const stripe = require("stripe")(
  "sk_test_51HXOAJHtRE2uExnXJiPkq5DtkuvODnnzUBopgYyRBc3oeICUwlP2iog95XaxIfj5wijhEDqNctiGOjmjHq9SVIDo00HYlZwhhj"
);

// - API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true })); //for security purpose
app.use(express.json()); //pass data in json format

// - API routes

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total; //request pram can also used

  console.log("Payment Request Recieved >> for this amount", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount : total,
    currency: "usd",
  });
  // OK -Created
  response.status(201).send({
    clientSecret : paymentIntent.client_secret,
  });
});

// - Listen command

exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/clone-202df/us-central1/api
