// Import dependencies
const express = require('express');
const cors = require('cors');

// Initialize the Express app and choose the port for the server to listen on
const app = express();
const port = 43922;

// Enable CORS middleware in the app
app.use(cors());

// Parse incoming request bodies with JSON payloads
app.use(express.json());

// Define route handlers
app.get('/', (req, res) => {
  // Handle GET requests
  res.send('Mi primera API');
});

app.post('/', (req, res) => {
  // Handle POST requests
  res.send('Received a POST request');
});

// Start the Express server and listen for incoming requests on a specific port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});