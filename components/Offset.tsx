import React from "react";
import { Pressable, StyleSheet, Text, Image } from "react-native";

const Offset = () => {
  return (
    <>
      <Text style={styles.title}>Help Offset Carbon</Text>
      <Pressable>
        <Image
          style={styles.image}
          source={require("../src/icons/2F4847/eco.png")}
        />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#2F4847",
    fontSize: 28,
    fontWeight: "bold",
  },
  image: {
    height: 75,
    width: 100,
  },
});

export default Offset;
