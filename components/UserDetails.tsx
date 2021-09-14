import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export type Props = {
  name?: string;
  vehicleMake?: string;
  vehicleModel?: any;
};

const UserDetails: React.FC<Props> = ({
  vehicleMake,
  vehicleModel,
  navigation,
}) => {
  const [inputMake, setInputMake] = useState("");
  const [inputModel, setInputModel] = useState("");

  const handleSubmit = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.make}>Vehicle Make:</Text>
      <TextInput
        defaultValue={inputMake}
        placeholder="enter make"
        style={styles.input}
        onChangeText={(inputMake) => setInputMake(inputMake)}
      />
      <Text style={styles.model}>Vehicle Model:</Text>
      <TextInput
        defaultValue={inputModel}
        placeholder="enter model"
        style={styles.input}
        onChangeText={(inputModel) => setInputModel(inputModel)}
      />
      <Button title="Submit" color="black" onPress={handleSubmit} />
      <Button
        title="Back"
        color="black"
        onPress={() => navigation.navigate("GroupDetails")}
      />
      <Button
        title="Next"
        color="black"
        onPress={() => navigation.navigate("HomeScreen")}
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
  make: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 16,
  },
  model: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 16,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: 100,
  },
});

export default UserDetails;
