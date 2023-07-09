// time.js
// This file contains the code for the time API

// Import the Date object
const Date = require('date-and-time');

// Create a function to get the current time
const getTime = () => {
  // Get the current date and time
  const now = Date.now();

  // Format the date and time
  const formattedTime = Date.format(now, 'YYYY/MM/DD HH:mm:ss');

  // Return the formatted date and time
  return formattedTime;
};

// Export the getTime function
module.exports = {
  getTime
};