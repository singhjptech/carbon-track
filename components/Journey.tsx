import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { getDistance } from "../dbfunctions/api-functions";


const Journey: React.FC<Props> = ({ navigation }) => {
  const [fromInput, setFromInput] = useState('');
  const [toInput, setToInput] = useState('');
  const [distance, setDistance] = useState(null);
  const [hasErrored, setHasErrored] = useState(false);

  const handleSubmit = () => {
    getDistance(fromInput, toInput).then((res) => {
      console.log(res, "<- handle Submit response");

      setDistance(res);
    }).catch((err) => {
      setHasErrored(true);
    });
  };
  console.log(distance, "<- outside distance");

  return (
    <View style={styles.container}>
      <Text style={styles.from}>From:</Text>
      <TextInput
        defaultValue={fromInput}
        placeholder="PostCode/Location"
        style={styles.input}
        onChangeText={(fromInput) => setFromInput(fromInput)}
      />
      <Text style={styles.to}>To:</Text>
      <TextInput
        defaultValue={toInput}
        placeholder="PostCode/Location"
        style={styles.input}
        onChangeText={(toInput) => setToInput(toInput)}
      />
      <Button title="Submit" color="black" onPress={handleSubmit} />
      {distance && <Text>{distance}</Text>}
      <Button title="Back" color="black" onPress={() => { navigation.navigate("Home") }} />


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  from: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 16,
  },
  to: {
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

export default Journey;