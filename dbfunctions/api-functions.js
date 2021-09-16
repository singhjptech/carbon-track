const axios = require("axios");
const { googleAPI, dvlaAPI } = require('./apikeys');

const getData = async (regNum) => {
  const reg = JSON.stringify({ registrationNumber: regNum });
  const config = {
    method: "post",
    url: "https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles",
    headers: {
      "x-api-key": dvlaAPI,
      "Content-Type": "application/json",
    },
    data: reg,
  };
  const { data } = await axios(config);
  let vehicleData = {};
  vehicleData.emissions = data.co2Emissions;
  vehicleData.make = data.make;
  vehicleData.colour = data.colour;
  vehicleData.year = data.yearOfManufacture;
  vehicleData.fuelType = data.fuelType;
  return vehicleData;
};

const getDistance = (origin, destination) => {
  return axios.post(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${googleAPI}`)
    .then((res) => {
      console.log(`${origin} to ${destination} is ${res.data.routes[0].legs[0].distance.text}`);
    }, (err) => {
      console.log(err, "<- GOOGLE ERROR!");
    });
};

module.exports = { getData, getDistance };
