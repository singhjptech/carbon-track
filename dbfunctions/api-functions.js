const axios = require("axios");
const { API_KEY_DVLA } = require("../apikeys");

const getData = async (regNum) => {
  const reg = JSON.stringify({ registrationNumber: regNum });
  const config = {
    method: "post",
    url: "https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles",
    headers: {
      "x-api-key": API_KEY_DVLA,
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

module.exports = { getData };
