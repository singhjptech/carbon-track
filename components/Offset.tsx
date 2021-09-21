import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Offset = () => {
  return (
    <Pressable>
      <Text style={styles.title}>Help Offset Carbon</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 16,
  },
});

export default Offset;
