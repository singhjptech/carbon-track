import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { getDistance, getCoordinates } from "../dbfunctions/api-functions";
import MapView, {
  Callout,
  Marker,
  PROVIDER_GOOGLE,
  Polyline,
} from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";

export type Props = {
  navigation?: string;
};

const Journey: React.FC<Props> = ({ navigation }) => {
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");
  const [distance, setDistance] = useState(null);
  const [hasErrored, setHasErrored] = useState(false);
  const [coordinates, setCoordinates] = useState({});

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
        setCoordinates(res);
      })
      .catch((err) => {
        setHasErrored(true);
      });
  };

  // const fromAndTo = () => {
  //   const {
  //     latitude,
  //     longitude,
  //     desLatitude.
  //     desLongitude
  //   } = coordinates;
  //   const hasFromAndTO = latitude !== null && desLatitude !== null
  //   if (hasFromAndTO) {
  //     const concatFrom =
  //   }
  // }

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
      {distance && <Text>{distance}</Text>}
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
        <Marker
          coordinate={{ latitude: 53.472133, longitude: -2.238486 }}
          title={"Northcoders Manchester"}
        />
      </MapView>
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
    height: 200,
  },
  image: {
    height: 125,
    width: 175,
  },
});

export default Journey;
