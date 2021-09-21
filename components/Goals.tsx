import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Goals = () => {
  return (
    <>
      <Text style={styles.title}>Your Goals</Text>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    margin: 16,
  },
});

export default Goals;
