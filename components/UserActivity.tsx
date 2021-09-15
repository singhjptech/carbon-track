import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UserActivity = () => {
  return (
    <View style={styles.container}>
      <Text>User A has saved 0.2kg of CO2 today</Text>
      <Text>Group XYZ are 10% away from their goal this month</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "powderblue",
    width: "90%",
  },
});

export default UserActivity;
