import React from "react";
import { Pressable, StyleSheet, Text, Image } from "react-native";

const Offset = () => {
  return (
    <>
      <Text style={styles.title}>Help Offset Carbon</Text>
      <Pressable>
        <Image
          style={styles.image}
          source={require("../src/icons/2F4847/plant.png")}
        />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 5,
  },
  image: {
    height: 75,
    width: 75,
  },
});

export default Offset;
