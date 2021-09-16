import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { getData } from "../dbfunctions/api-functions.js";
import { addCar } from "../dbfunctions/dynamo.js";

// export type Props = {
//   navigation?: string;
// };

const UserDetails: React.FC<Props> = ({
  // navigation,
  userVehicle,
  setUserVehicle,
}) => {
  const [inputReg, setInputReg] = useState("");
  const [submitReg, setSubmitReg] = useState("");
  const [hasErrored, setHasErrored] = useState(false);
  const [confirmVehicle, setConfirmVehicle] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    if (submitReg.length >= 4) {
      getData(submitReg)
        .then((vehicle) => {
          setUserVehicle(vehicle);
          addCar(vehicle);
        })
        .catch((err) => {
          if (err) {
            setHasErrored(true);
            setUserVehicle("");
          }
        });
    }
  }, [submitReg]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setHasErrored(false);
    setSubmitReg(inputReg);
    setInputReg("");
    vehicleAdded();
  };

  const vehicleAdded = () => {
    console.log(userVehicle, "VA func");

    if (Object.keys(userVehicle).length === 5) {
      console.log("here?");
      setConfirmVehicle(true);
    }
  };

  console.log(userVehicle, "<--VEHICLE");
  console.log(Object.keys(userVehicle).length, "<--length");
  console.log(submitReg, "<--SUBMIT");
  console.log(confirmVehicle, "<--Confirm");

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
      {hasErrored && (
        <Text style={styles.inputError}>Error, invalid input</Text>
      )}
      <Button title="Submit" color="black" onPress={handleSubmit} />

      {confirmVehicle && (
        <>
          <Text>Make: {userVehicle.make}</Text>
          <Text>Colour: {userVehicle.colour}</Text>
          <Text>Year: {userVehicle.year}</Text>
          <Text>Fuel Type: {userVehicle.fuelType}</Text>
          <Text>C02 Emissions: {userVehicle.emissions}</Text>
          <Button
            title="Confirm"
            color="black"
            onPress={navigation.navigate("Home")}
          />
        </>
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
    width: 100,
  },
});

export default UserDetails;
