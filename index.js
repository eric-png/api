// index.js

// Import the time.js file
const time = require('./time.js');

// Create an API that tells the time
const api = (req, res) => {
  // Get the current time
  const currentTime = time.getTime();

  // Send the current time as a response
  res.send(currentTime);
};

// Export the API
module.exports = api;