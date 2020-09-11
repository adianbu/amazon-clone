const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HPveXC8C08aqok9dkyGBSCj1lXLWxI57pz1CQozqbscBubF6niIIioOYa2AKG70depmkSkNufh8q689JO39pkhV00RtT8BM95"
);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//API

//App config
const app = express();

//middleware
app.use(cors({ origin: true }));
app.use(express.json());

//api routes
app.get("/", (request, response) => response.status(200).send("hello"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM. for this amount>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  //Ok-Created  201 means its ok and it has created something
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//listen command

exports.api = functions.https.onRequest(app);

//Example endpoint
// http://localhost:5001/clone-9c7e8/us-central1/api
