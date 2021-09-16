const axios = require("axios");

<<<<<<< HEAD
=======
// const data = JSON.stringify({ registrationNumber: "AA19AAA" });

// const config = {
//   method: "post",
//   url: "https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles",
//   headers: {
//     "x-api-key": "",
//     "Content-Type": "application/json",
//   },
//   data: reg,
// };

>>>>>>> 537a0201b5e3a981bff44fb9f59304dcb4c0ffa9
const getData = async (regNum) => {
  const reg = JSON.stringify({ registrationNumber: regNum });
  const config = {
    method: "post",
    url: "https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles",
    headers: {
      "x-api-key": "",
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
