const axios = require('axios');

async function checkStatusCode() {
  try {
    // Send GET request to https://reqres.in/api/users/2
    const response = await axios.get('https://reqres.in/api/users/2');

    // Validate that the status code is 200
    if (response.status === 200) {
      console.log('Test Passed: Status code is 200');
    } else {
      console.log(`Test Failed: Expected 200, but got ${response.status}`);
    }
  } catch (error) {
    console.error('Error making GET request:', error.message);
  }
}

checkStatusCode();

