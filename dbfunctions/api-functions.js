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

// const vehicleData = {
//   emissions: 0,
//   make: '',
//   fuelType: ''
// }

// const getData = async () => {
//   await axios(config)
//     .then((response) => {
//       let vehicleData = {};
//       vehicleData.emissions = response.data.co2Emissions;
//       vehicleData.make = response.data.make;
//       vehicleData.fuelType = response.data.fuelType;
//       return vehicleData;
//     })
//     .catch((error) => {
//       console.log(error);
//     })
// };

const getData = async () => {
  const { data } = await axios(config)
  let vehicleData = {};
  vehicleData.emissions = data.co2Emissions;
  vehicleData.make = data.make;
  vehicleData.fuelType = data.fuelType;
  console.log(vehicleData, '<- OUR DATA')
  return vehicleData;
}

console.log(getData());

module.exports = { getData };