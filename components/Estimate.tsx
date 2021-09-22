import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const Estimate: React.FC<Props> = ({ navigation }) => {
  const handleSubmit = () => {};

  return (
    <>
      <Text style={styles.title}>Track</Text>
      <Image
        style={styles.image}
        source={require("../src/icons/2F4847/track-journey.png")}
      />
      <Pressable
        style={styles.buttonEstimate}
        onPress={() => navigation.navigate("Journey")}
      >
        <Text style={styles.buttonEstimateText}>Journey</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    margin: 16,
  },
  buttonEstimate: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#2F4847",
    backgroundColor: "#2F4847",
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
    width: 110,
    height: "15%",
    marginTop: 15,
    marginBottom: 15,
  },
  buttonEstimateText: {
    color: "white",
    fontSize: 20,
  },
  image: {
    height: 125,
    width: 175,
  },
});

export default Estimate;
