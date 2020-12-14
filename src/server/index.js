const dotenv = require('dotenv')
dotenv.config();

const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";
const API_KEY = process.env.API_KEY;

const path = require('path');
const mockAPIResponse = require('./mockAPI');
const fetch = require("node-fetch");

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.text());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'));

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log('App running on port 8081!')
});

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});

app.post("/article", async (req, res) => {
  const resp = await fetch(`${baseUrl}${API_KEY}&lang=auto&url=${req.body}`);
  try {
    const data = await resp.json();
    res.send(data);
  } catch (err) {
    console.log("error", err);
  }
});
  


