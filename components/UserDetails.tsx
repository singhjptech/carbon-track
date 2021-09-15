import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { getData } from "../dbfunctions/api-functions.js";

export type Props = {
  name?: string;
};

const UserDetails: React.FC<Props> = ({ navigation }) => {
  const [inputReg, setInputReg] = useState("");
  const [submitReg, setSubmitReg] = useState("");
  const [userVehicle, setUserVehicle] = useState({});
  const [hasErrored, setHasErrored] = useState(false);

  useEffect(() => {
    getData(submitReg)
      .then((vehicle) => {
        setUserVehicle(vehicle);
      })
      .catch((err) => {
        if (err) {
          setHasErrored(true);
          setUserVehicle("");
        }
      });
  }, [submitReg]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setHasErrored(false);
    setSubmitReg(inputReg);
    setInputReg("");
  };
  console.log(hasErrored, "<- HAS ERRORED");
  console.log(submitReg, "<--Submitted");
  console.log(userVehicle, "Veh Obj");

  return (
    <View style={styles.container}>
      <Text style={styles.vehicleReg}>Enter Vehicle Registration:</Text>
      <TextInput
        autoCapitalize="characters"
        defaultValue={inputReg}
        placeholder="enter make"
        style={styles.input}
        onChangeText={(inputReg) => setInputReg(inputReg)}
      />
      {hasErrored && <Text style={styles.inputError}>Error, invalid input</Text>}
      <Button title="Submit" color="black" onPress={handleSubmit} />
      <Button
        title="Back"
        color="black"
        onPress={() => navigation.navigate("GroupDetails")}
      />
      <Button
        title="Next"
        color="black"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    width: 100,
  },
});

export default UserDetails;
