import React, { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
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
        addCar(vehicle);
      })
      .catch((err) => {
        setHasErrored(true);
        setUserVehicle(null);
      });
  };

  const handleReEnter = () => {
    setUserVehicle(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.logo}
          source={require("../src/icons/carbontrack.png")}
        />
      </View>
      <View style={styles.formContainer}>
        {!userVehicle ? (
          <Text style={styles.regInputTitle}>Enter Vehicle Registration:</Text>
        ) : (
          <Text style={styles.regInputTitle}>Your Vehicle Details:</Text>
        )}
        {hasErrored && (
          <Text style={styles.inputError}>Error, invalid input</Text>
        )}
        {!userVehicle && (
          <>
            <TextInput
              autoCapitalize="characters"
              defaultValue={inputReg}
              placeholder="AA19AAA"
              style={styles.input}
              onChangeText={(inputReg) => setInputReg(inputReg)}
            />
            <Pressable style={styles.buttonForm} onPress={handleSubmit}>
              <Text style={styles.buttonFormText}>Search</Text>
            </Pressable>
          </>
        )}

        {userVehicle && (
          <View style={styles.confirmContainer}>
            <View style={styles.confirmContainerText}>
              <Text style={styles.confirmText}>Make: {userVehicle.make}</Text>
              <Text style={styles.confirmText}>
                Colour: {userVehicle.colour}
              </Text>
              <Text style={styles.confirmText}>Year: {userVehicle.year}</Text>
              <Text style={styles.confirmText}>
                Fuel Type: {userVehicle.fuelType}
              </Text>
              <Text style={styles.text}>
                CO2 Emissions: {userVehicle.emissions}
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
              <Text style={styles.buttonFormText}>Add</Text>
            </Pressable>
            <Pressable style={styles.buttonReEnter} onPress={handleReEnter}>
              <Text style={styles.buttonReEnterText}>Re-Enter</Text>
            </Pressable>
          </View>
        )}
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../src/icons/D7E7E1/car.png")}
        />
      </View>
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
  headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
    width: "90%",
    height: 60,
  },
  regInputTitle: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
  },
  formContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    height: "40%",
    borderRadius: 28,
    backgroundColor: "#D7E7E1",
    margin: 20,
    width: "80%",
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
    height: "10%",
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
  text: {
    fontSize: 16,
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
  logo: {
    height: 40,
    width: 275,
    padding: 0,
    marginTop: 30,
  },
  imageContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 200,
    width: 350,
  },
});

export default UserDetails;
