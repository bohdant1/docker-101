// Import required modules
const express = require('express');

// Create an Express application
const app = express();
const port = 3001; // Port number for the server to listen on


// Define a route for the '/{myname}' endpoint
app.get('/:myname', (req, res) => {
  const { myname } = req.params; // Get the value of the parameter 'myname' from the request
  res.send(`Hello, World, ${myname}`); // Send 'Hello, World, {myname}' as the response
});

// Start the server and make it listen on the specified port
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
