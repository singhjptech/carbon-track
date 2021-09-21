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

const getDistance = async (origin, destination) => {
  const { data } = await axios.post(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${googleAPI}`);
  const distance = data.routes[0].legs[0].distance.text;
  return distance;
};

const getCoordinates = async (origin, destination) => {
  const { data } = await axios.post(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${googleAPI}`);
  let coordinates = {}
  coordinates.startLat = data.routes[0].legs[0].start_location.lat;
  coordinates.startLng = data.routes[0].legs[0].start_location.lng;
  coordinates.endLat = data.routes[0].legs[0].end_location.lat;
  coordinates.endLng = data.routes[0].legs[0].end_location.lng;
  return coordinates;
};

const getSteps = async (origin, destination) => {
  const { data } = await axios.post(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${googleAPI}`);
  const steps = data.routes[0].legs[0].steps;
  const directions = steps.map((step) => {
    let endCoords = { latitude: 0, longitude: 0 };
    endCoords.latitude = step.end_location.lat;
    endCoords.longitude = step.end_location.lng;
    return endCoords;
  })
  console.log("STEEEEEEEEPPPPPPPPPSSSSSS -------->", directions, "<------------------STEEEEEEEEPPPPPPPPPSSSSSS");
  return directions;
}

module.exports = { getData, getDistance, getCoordinates, getSteps };