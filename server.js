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

// GET route to return the project data
app.get("/", function(req, res) {
  res.send(projectData);
  console.log('the GET route');
});

// POST route
app.post("/", function(req, res) {
  res.send('POST received');
  console.log('the POST route');
});