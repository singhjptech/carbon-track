const axios = require('axios');

const data = JSON.stringify({ registrationNumber: 'AA19AAA' });

const config = {
  method: 'post',
  url:
    'https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles',
  headers: {
    'x-api-key': 'zsisXTnLTG7Ho55QW6rYY2A9oYp5LldN9eOLjt2i',
    'Content-Type': 'application/json',
  },
  data: data,
};

const getData = () => {
  return axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      console.log(response.data.fuelType, "<- Fuel Type");
    })
    .catch((error) => {
      console.log(error);
    })
};

module.exports = { getData };