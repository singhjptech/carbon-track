const axios = require("axios");

// const data = JSON.stringify({ registrationNumber: "AA19AAA" });

// const config = {
//   method: "post",
//   url: "https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles",
//   headers: {
//     "x-api-key": "zsisXTnLTG7Ho55QW6rYY2A9oYp5LldN9eOLjt2i",
//     "Content-Type": "application/json",
//   },
//   data: reg,
// };

const getData = async (regNum) => {
  console.log(regNum, "<-- regNum in GET DATA");
  const reg = JSON.stringify({ registrationNumber: regNum });
  const config = {
    method: "post",
    url: "https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles",
    headers: {
      "x-api-key": "zsisXTnLTG7Ho55QW6rYY2A9oYp5LldN9eOLjt2i",
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
