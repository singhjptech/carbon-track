import React, { useState } from "react";
import {
  Button,
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
  const [track, setTrack] = useState(false);

  const handleSubmit = () => {
<<<<<<< HEAD
    getDistance(fromInput, toInput).then((res) => {
      setDistance(res);
    }).catch((err) => {
      setHasErrored(true);
    });

    getCoordinates(fromInput, toInput).then((res) => {
      setCoords(res)
    }).catch((err) => {
      setHasErrored(true);
    });

    getSteps(fromInput, toInput).then((res) => {
      setSteps(res)
    }).catch((err) => {
      setHasErrored(true);
    });

    getCar().then((res) => {
      setUserVehicle(res)
    }).catch((err) => {
      setHasErrored(true);
=======
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

    getSteps(fromInput, toInput)
      .then((res) => {
        setSteps(res);
      })
      .catch((err) => {
        setHasErrored(true);
      });

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
>>>>>>> fc3bde6e6ed76f9e2a090818c008da63bea8a690
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>From:</Text>
      <TextInput
        defaultValue={fromInput}
        placeholder="PostCode/Location"
        style={styles.input}
        onChangeText={(fromInput) => setFromInput(fromInput)}
      />
      <Image
        style={styles.image}
        source={require("../src/icons/2F4847/journey.png")}
      />
      <Text style={styles.label}>To:</Text>
      <TextInput
        defaultValue={toInput}
        placeholder="PostCode/Location"
        style={styles.input}
        onChangeText={(toInput) => setToInput(toInput)}
      />
      <Button title="Submit" color="black" onPress={handleSubmit} />

      <Button
        title="Back"
        color="black"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />

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
          strokeColors={["#E5845C"]}
          strokeWidth={6}
        />
        <Marker
          coordinate={{ latitude: coords.endLat, longitude: coords.endLng }}
          title={"End of Carbon Offset"}
        />
      </MapView>

      {userVehicle && (
        <View style={styles.calcContainer}>
          <Text style={styles.calcTitle}>Your Journey Emits...</Text>
          <Text style={styles.calcText}>
            {distance * userVehicle[0].emissions} g/KM
          </Text>
          <Pressable style={styles.buttonTrack} onPress={handleTrack}>
            <Text style={styles.buttonTrackText}>Track</Text>
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
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
    // textAlign: "center",
  },
  input: {
    fontSize: 18,
    textAlign: "center",
    color: "black",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "white",
    height: "3%",
    width: 160,
  },
  mapView: {
    width: Dimensions.get("window").width,
    height: 300,
  },
  image: {
    height: 125,
    width: 175,
  },
  calcContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "40%",
    borderRadius: 28,
    backgroundColor: "#D7E7E1",
    margin: 20,
    width: "80%",
  },
  calcText: {
    color: "black",
    fontSize: 20,
  },
  calcTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 15,
    textAlign: "center",
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
    height: "16%",
    marginTop: 15,
    marginBottom: 15,
  },
  buttonTrackText: {
    color: "white",
    fontSize: 18,
  },
});

export default Journey;
