import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Estimate: React.FC<Props> = ({ navigation }) => {

  const handleSubmit = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.estimate}>Estimate</Text>
      <Button
        title="Next"
        color="black"
        onPress={() => navigation.navigate("Journey")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  estimate: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16
  }
});

export default Estimate;