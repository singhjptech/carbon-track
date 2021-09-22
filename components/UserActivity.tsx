import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UserActivity = () => {
  return (
    <>
      <Text style={styles.title}>User Activity</Text>
      <View style={styles.container}>
        <View style={styles.userColumn}>
          <Text style={styles.text}>UA</Text>
          <Text style={styles.text}>GX</Text>
        </View>
        <View style={styles.textColumn}>
          <Text style={styles.text}>User A has saved 0.2kg of CO2 today</Text>
          <Text style={styles.text}>
            Group XYZ are 10% away from their goal this month
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: "70%",
    width: "90%",
  },
  title: {
    color: "#2F4847",
    fontSize: 28,
    fontWeight: "bold",
    margin: 16,
  },
  userColumn: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "30%",
  },
  textColumn: {
    flexDirection: "column",
    justifyContent: "space-around",
    width: "70%",
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default UserActivity;
