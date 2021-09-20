import React, { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
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
        setInputReg("");
        setHasErrored(false);
      })
      .catch((err) => {
        setHasErrored(true);
        setUserVehicle(null);
      });
    addCar();
  };

  const handleReEnter = () => {
    setUserVehicle(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.regInputTitle}>Enter Vehicle Registration:</Text>
        <TextInput
          autoCapitalize="characters"
          defaultValue={inputReg}
          placeholder="AA19AAA"
          style={styles.input}
          onChangeText={(inputReg) => setInputReg(inputReg)}
        />
        {hasErrored && (
          <Text style={styles.inputError}>Error, invalid input</Text>
        )}
        {!userVehicle && (
          <Pressable style={styles.buttonForm} onPress={handleSubmit}>
            <Text style={styles.buttonFormText}>Submit</Text>
          </Pressable>
        )}

        {userVehicle && (
          <View style={styles.confirmContainer}>
            <Text style={styles.confirmTitle}>Your Vehicle Details</Text>
            <View style={styles.confirmContainerText}>
              <Text style={styles.confirmText}>Make: {userVehicle.make}</Text>
              <Text style={styles.confirmText}>
                Colour: {userVehicle.colour}
              </Text>
              <Text style={styles.confirmText}>Year: {userVehicle.year}</Text>
              <Text style={styles.confirmText}>
                Fuel Type: {userVehicle.fuelType}
              </Text>
              <Text style={styles.confirmText}>
                C02 Emissions: {userVehicle.emissions}
              </Text>
            </View>
            <Pressable
              style={styles.buttonForm}
              onPress={() =>
                navigation.navigate(
                  "GroupDetails"
                  // , { userVehicle }
                )
              }
            >
              <Text style={styles.buttonFormText}>Confirm</Text>
            </Pressable>
            <Pressable style={styles.buttonReEnter} onPress={handleReEnter}>
              <Text style={styles.buttonReEnterText}>Re-Enter</Text>
            </Pressable>
          </View>
        )}
      </View>

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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 4,
    // borderColor: "red",
    backgroundColor: "white",
  },
  regInputTitle: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 16,
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 450,
    // borderWidth: 2,
    // borderColor: "blue",
    borderRadius: 28,
    backgroundColor: "#D7E7E1",
    margin: 20,
    width: "90%",
  },
  inputError: {
    fontSize: 16,
    color: "red",
    margin: 16,
  },
  input: {
    textAlign: "center",
    color: "black",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "white",
    height: 40,
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
    marginTop: 15,
    marginBottom: 15,
  },
  buttonFormText: {
    color: "white",
    fontSize: 20,
  },
  confirmContainer: {
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 2,
    // borderColor: "red",
  },
  confirmContainerText: {
    textAlign: "left",
  },
  confirmTitle: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  confirmText: {
    fontSize: 16,
    textTransform: "capitalize",
    marginBottom: 5,
  },
  buttonReEnter: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#2F4847",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
    width: 110,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonReEnterText: {
    color: "#2F4847",
    fontSize: 20,
  },
});

export default UserDetails;
