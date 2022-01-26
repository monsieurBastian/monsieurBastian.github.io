// Endpoint for all routes
projectData = {};



// Express to run the server
// and start an instance of app
const express = require('express');
const app = express();



/*** 
 * 
 * Middleware
 * 
 ***/

// Configure express to use body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Init main project folder
app.use(express.static('website'));



/***
 * 
 * Server
 * 
 */

// Run the server
const port = 8000;
const server = app.listen(port, () => {
  // Callback to debug
  console.log(`Running on localhost: ${port}`);
});




/***
 * 
 * Routes
 * 
 */

// Init all routes with callback function

// GET route
app.get("/", function(req, res) {
  res.send(projectData);
});

// POST route
app.post("/", function(req, res) {
  res.send('POST received');
});



// GET all data
app.get('/all', function(req, res) {
  res.send(projectData);
});



// POST weather data
app.post('/addweather', function(req, res) {
  newEntry = {
    date: req.body.date,
    temperature: req.body.temperature,
    content: req.body.content,
  }
  projectData = newEntry;
  res.send(projectData);

  console.log("POST route push data", projectData);
});
