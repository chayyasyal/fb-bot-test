'use strict';

const token = process.env.FB_PAGE_ACCESS_TOKEN
const bodyParser = require('body-parser')
var express = require('express');
var app = express();
var FBBotFramework = require('fb-bot-framework');
});

// Intialize
var bot = new FBBotFramework({
  page_token: EAAZABLVYbjr8BAIki5BTUauSVlmCi4asMXZCiaWGZB3FRQvda8YHZBoi19LcKy8pEzCHwlLUp41IP5xZC7K9vTiLioZA01hnAZBJOoquuAAedVHkRq5mH5VNLyTKDagB7XKBa7OFZBZAquP6NVY60YjvjY1jaaJ9y9mbhF4mh1lVvJgZDZD
  // verify_token: "VERIFY_TOKEN"

//-> localhost:3000
});

// // Creates the endpoint for our webhook
// app.post('/webhook', (req, res) => {
//
//   let body = req.body;
//
//   // Checks this event is from a page subscription
//   if (body.object === 'page') {
//
//     // Iterates over each entry
//     body.entry.forEach(function(entry) {
//
//       // Gets message
//       let webhook_event = entry.messaging[0];
//       console.log(webhook_event);
//     });
//
//     // Should return a '200 ok' response to all https requests
//     res.status(200).send('EVENT_RECEIVED');
//   } else {
//
//     // 404 not found message should show
//     res.sendStatus(404);
//   }
// });

// Setup Express middleware for /webhook
app.use('/webhook', bot.middleware());
// Setup listener for incoming messages
bot.on('message', function(userID, message){
  bot.sendTextMessage(userID, "Echo Message: " + message);
});
app.get("/webhook", function (req, res){
  res.send("Hello, how may I help you?");
});
// Make Express listening
app.listen(3000);
