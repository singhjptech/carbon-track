import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  Dimensions,
  SafeAreaView,
  View,
  Pressable,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import {
  getDistance,
  getCoordinates,
  getSteps,
} from "../dbfunctions/api-functions";
import { addJourney, getCar } from "../dbfunctions/dynamo.js";
import MapView, {
  Callout,
  Marker,
  PROVIDER_GOOGLE,
  Polyline,
} from "react-native-maps";

export type Props = {
  navigation?: string;
};

const Journey: React.FC<Props> = ({ navigation }) => {
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");
  const [distance, setDistance] = useState(null);
  const [hasErrored, setHasErrored] = useState(false);
  const [coords, setCoords] = useState({});
  const [steps, setSteps] = useState([]);
  const [userVehicle, setUserVehicle] = useState(null);
  const [travel, setTravel] = useState("driving");

  const [calc, setCalc] = useState(false);
  const [track, setTrack] = useState(false);

  const handleSubmit = () => {
    getDistance(fromInput, toInput)
      .then((res) => {
        setDistance(res);
      })
      .catch((err) => {
        setHasErrored(true);
      });

    getCoordinates(fromInput, toInput)
      .then((res) => {
        setCoords(res);
      })
      .catch((err) => {
        setHasErrored(true);
      });

    getSteps(fromInput, toInput, travel)
      .then((res) => {
        setSteps(res);
      })
      .catch((err) => {
        setHasErrored(true);
      });
    setCalc(true);
    setTrack(false);
    getCar()
      .then((res) => {
        setUserVehicle(res);
      })
      .catch((err) => {
        setHasErrored(true);
      });
  };

  const handleTrack = () => {
    addJourney({
      from: fromInput,
      to: toInput,
      emissions: distance * userVehicle[0].emissions,
      emissionsSaved: Math.round(
        distance * options.driving - distance * options[travel]
      ),
    });
    setCalc(false);
    setTrack(true);
  };

  const handleTransit = () => {
    setTravel("transit");
    if (travel === "transit") {
      getSteps(fromInput, toInput, travel)
        .then((res) => {
          setSteps(res);
        })
        .catch((err) => {
          setHasErrored(true);
        });
    }
  };

  const handleBicycle = () => {
    setTravel("bicycling");
    if (travel === "bicycling") {
      getSteps(fromInput, toInput, travel)
        .then((res) => {
          setSteps(res);
        })
        .catch((err) => {
          setHasErrored(true);
        });
    }
  };

  const handleWalk = () => {
    setTravel("walking");
    if (travel === "walking") {
      getSteps(fromInput, toInput, travel)
        .then((res) => {
          setSteps(res);
        })
        .catch((err) => {
          setHasErrored(true);
        });
    }
  };

  const handleCar = () => {
    setTravel("driving");
    if (travel === "driving") {
      getSteps(fromInput, toInput, travel)
        .then((res) => {
          setSteps(res);
        })
        .catch((err) => {
          setHasErrored(true);
        });
    }
  };

  let options = {};

  if (userVehicle) {
    options.driving = userVehicle[0].emissions;
    options.transit = 87;
    options.bicycling = 0;
    options.walking = 0;
  }
  console.log(travel, "<---- TRAVEL");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable
          style={styles.buttonHome}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonHomeText}>Home</Text>
        </Pressable>
        <Image
          style={styles.logo}
          source={require("../src/icons/carbontrack.png")}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.formLabel}>From:</Text>
        <TextInput
          autoCapitalize="characters"
          defaultValue={fromInput}
          placeholder="origin"
          style={styles.formInput}
          onChangeText={(fromInput) => setFromInput(fromInput)}
        />
        <Text style={styles.formLabel}>To:</Text>
        <TextInput
          autoCapitalize="characters"
          defaultValue={toInput}
          placeholder="destination"
          style={styles.formInput}
          onChangeText={(toInput) => setToInput(toInput)}
        />
        <Pressable style={styles.buttonForm} onPress={handleSubmit}>
          <Text style={styles.buttonFormText}>Search</Text>
        </Pressable>
      </View>

      <MapView
        style={styles.mapView}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 53.481162,
          longitude: -2.244259,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Polyline
          coordinates={steps}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={["#FF6584"]}
          strokeWidth={4}
        />
        <Marker
          coordinate={{ latitude: coords.endLat, longitude: coords.endLng }}
          title={"End of Carbon Offset"}
        />
      </MapView>

      <View style={styles.optionContainer}>
        <Pressable style={styles.buttonOption} onPress={handleTransit}>
          <Text style={styles.buttonOptionText}>Bus</Text>
        </Pressable>
        <Pressable style={styles.buttonOption} onPress={handleBicycle}>
          <Text style={styles.buttonOptionText}>Bicycle</Text>
        </Pressable>
        <Pressable style={styles.buttonOption} onPress={handleWalk}>
          <Text style={styles.buttonOptionText}>Walk</Text>
        </Pressable>
        <Pressable style={styles.buttonOption} onPress={handleCar}>
          <Text style={styles.buttonOptionText}>Car</Text>
        </Pressable>
      </View>

      {userVehicle && !track && (
        <View style={styles.calcContainer}>
          <Text style={styles.calcTitle}>Your Journey Emits...</Text>
          <Text style={styles.calcText}>
            {Math.ceil(distance * options[travel])} grams of CO2
          </Text>
          <Text style={styles.calcText}>
            {" "}
            You have saved{" "}
            {Math.ceil(distance * options.driving - distance * options[travel])}
            grams of CO2
          </Text>
          <Pressable style={styles.buttonTrack} onPress={handleTrack}>
            <Text style={styles.buttonTrackText}>Track</Text>
          </Pressable>
        </View>
      )}
      {track && (
        <View style={styles.calcContainer}>
          <Text style={styles.calcTitle}>
            Journey has been added. See your profile
          </Text>
          <Pressable
            style={styles.buttonTrack}
            onPress={() => navigation.navigate("User")}
          >
            <Text style={styles.buttonTrackText}>Profile</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  headerContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "center",
    width: "90%",
    height: 60,
  },
  buttonHome: {
    alignItems: "center",
    borderColor: "#2F4847",
    backgroundColor: "#2F4847",
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
    width: 80,
  },
  buttonHomeText: {
    color: "white",
    fontSize: 20,
  },
  // title: {
  //   textAlign: "center",
  //   fontSize: 24,
  //   fontWeight: "bold",
  //   marginTop: 4,
  // },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "22%",
    borderRadius: 28,
    backgroundColor: "#D7E7E1",
    width: "90%",
    marginBottom: 5,
  },
  formLabel: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 18,
    textAlign: "center",
  },
  formInput: {
    fontSize: 18,
    textAlign: "center",
    color: "black",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "white",
    height: "15%",
    width: 160,
  },
  buttonForm: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#2F4847",
    backgroundColor: "#2F4847",
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
    width: 110,
    height: "18%",
    marginTop: 10,
    marginBottom: 10,
  },
  buttonFormText: {
    color: "white",
    fontSize: 18,
  },
  mapView: {
    width: "90%",
    height: 300,
    borderRadius: 28,
    marginBottom: 5,
  },
  calcContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "40%",
    borderRadius: 28,
    backgroundColor: "#D7E7E1",
    // margin: 20,
    width: "90%",
  },
  calcText: {
    color: "#FF6584",
    fontSize: 20,
    fontWeight: "bold",
  },
  calcTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 5,
    textAlign: "center",
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    borderWidth: 1,
    height: 35,
    borderColor: "red",
    marginBottom: 5,
  },
  buttonOption: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#2F4847",
    backgroundColor: "#2F4847",
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
    width: 80,
    height: "100%",
    // marginTop: 15,
    // marginBottom: 15,
  },

  buttonOptionText: {
    color: "white",
    fontSize: 18,
  },
  buttonTrack: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#2F4847",
    backgroundColor: "#2F4847",
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
    width: 110,
    height: "25%",
    marginTop: 15,
    marginBottom: 15,
  },
  buttonTrackText: {
    color: "white",
    fontSize: 18,
  },
  logo: {
    height: 35,
    width: 240,
    padding: 0,
    margin: 0,
  },
});

export default Journey;
