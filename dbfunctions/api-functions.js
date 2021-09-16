const axios = require("axios");
import { googleAPI, dvlaAPI } from "./apikeys";

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
  axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&${destination}=Montreal&key=${googleAPI}`);
}

// const getMap = async () => {
//   const myLatLng = { lat: 53.4721, 2.2382 };
//   const mapOptions = 
//     {
//       center: myLatLng,
//       zoom: 7,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     };

//   const map = new google.maps.Map(document.getElementById('googleMap'), )
// }

module.exports = { getData, getMap };
