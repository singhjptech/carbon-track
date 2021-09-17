import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { getData } from "../dbfunctions/api-functions.js";
import { addCar } from "../dbfunctions/dynamo.js";

export type Props = {
  navigation?: string;
};

const UserDetails: React.FC<Props> = ({ navigation }) => {
  const [inputReg, setInputReg] = useState("");
  const [userVehicle, setUserVehicle] = useState(null);
  const [hasErrored, setHasErrored] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    getData(inputReg)
      .then((vehicle) => {
        setUserVehicle(vehicle);
        addCar(vehicle);
        setInputReg("");
      })
      .catch((err) => {
        setHasErrored(true);
        setUserVehicle(null);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.vehicleReg}>Enter Vehicle Registration:</Text>
      <TextInput
        autoCapitalize="characters"
        defaultValue={inputReg}
        placeholder="vehicle registration"
        style={styles.input}
        onChangeText={(inputReg) => setInputReg(inputReg)}
      />
      {hasErrored && (
        <Text style={styles.inputError}>Error, invalid input</Text>
      )}
      {!userVehicle && (
        <Button title="Submit" color="black" onPress={handleSubmit} />
      )}

      {userVehicle && (
        <View>
          <Text>Make: {userVehicle.make}</Text>
          <Text>Colour: {userVehicle.colour}</Text>
          <Text>Year: {userVehicle.year}</Text>
          <Text>Fuel Type: {userVehicle.fuelType}</Text>
          <Text>C02 Emissions: {userVehicle.emissions}</Text>
          <Button
            title="Confirm"
            color="black"
            onPress={() => navigation.navigate("Home", { userVehicle })}
          />
        </View>
      )}
      <Button
        title="Back"
        color="black"
        onPress={() => navigation.navigate("GroupDetails")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  vehicleReg: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 16,
  },
  inputError: {
    fontSize: 16,
    color: "red",
    margin: 16,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: 150,
  },
});

export default UserDetails;
