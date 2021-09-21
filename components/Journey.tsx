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
import MapView, { Callout, Marker, PROVIDER_GOOGLE, Polyline } from 'react-native-maps';

export type Props = {
  navigation?: string;
};

const Journey: React.FC<Props> = ({ navigation }) => {
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");
  const [distance, setDistance] = useState(null);
  const [hasErrored, setHasErrored] = useState(false);
  const [coords, setCoords] = useState({})

  const handleSubmit = () => {
    getDistance(fromInput, toInput).then((res) => {
      setDistance(res);
    }).catch((err) => {
      setHasErrored(true);
    })

    getCoordinates(fromInput, toInput).then((res) => {
      setCoords(res)

    }).catch((err) => {
      setHasErrored(true);
    })
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
      {distance && <Text>{distance}</Text>}
      <Button
        title="Back"
        color="black"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />


      
        <MapView style={styles.mapView}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 53.481162,
          longitude: -2.244259,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
           }} >
          <Marker
          coordinate={{ latitude: coords.startLat, longitude: coords.startLng }}
          pinColor={'black'}
          />
          <Polyline
          coordinates={[
            { latitude: coords.startLat, longitude: coords.startLng },
            { latitude: coords.endLat, longitude: coords.endLng },
          ]}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={[
            '#E5845C',
          ]}
          strokeWidth={6}
          />
          <Marker
          coordinate={{ latitude: coords.endLat, longitude: coords.endLng }}
          title={'End of Carbon Offset'}
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
  image: {
    height: 125,
    width: 175,
  },
    width: Dimensions.get('window').width,
    height: 300,
  },
});

export default Journey;
