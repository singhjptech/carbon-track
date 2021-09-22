import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const Estimate: React.FC<Props> = ({ navigation }) => {
  return (
    <>
      <Image
        style={styles.image}
        source={require("../src/icons/2F4847/track-journey.png")}
      />
      <Text style={styles.title}>Track Journey</Text>
      <Pressable
        style={styles.buttonEstimate}
        onPress={() => navigation.navigate("Journey")}
      >
        <Text style={styles.buttonEstimateText}>Start</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#2F4847",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
  },
  buttonEstimate: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#2F4847",
    backgroundColor: "#2F4847",
    borderWidth: 1,
    borderRadius: 28,
    padding: 5,
    width: 150,
    marginTop: 15,
    marginBottom: 15,
  },
  buttonEstimateText: {
    color: "white",
    fontSize: 20,
  },
  image: {
    height: 155,
    width: 280,
  },
});

export default Estimate;
