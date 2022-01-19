/* INSTALL PACKAGES ON THE MACHINE */
/*
1. install the necessary packages in terminal
    - node > node -v > v17.3.0
    - express > npm list express > express@4.17.2
    - body parser > npm list body-parser > body-parser@1.19.1
    - cors > npm list cors > cors@2.8.5
*/


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

// Allow cross origin with Cors
const cors = require('cors');
app.use(cors());

// Init project folder
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