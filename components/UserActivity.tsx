import React from "react";
import { StyleSheet, Text, View } from "react-native";

export type Props = {
  currUser?: any,
  currGroup?: any;
};

const UserActivity: React.FC<Props> = ({ currUser, currGroup }) => {
  return (
    <>
      <Text style={styles.title}>User Activity</Text>
      <View style={styles.container}>
        <View style={styles.userColumn}>
          {/* <Text style={styles.text}>UA</Text>
          <Text style={styles.text}>GX</Text> */}
        </View>
        <View style={styles.textColumn}>
          <Text style={styles.text}>Matt has saved 200g of CO2 today</Text>
          <Text style={styles.text}>
            Group Asynchrosaurus have saved 1000g of CO2 this month
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
  // userColumn: {
  //   flexDirection: "column",
  //   justifyContent: "space-around",
  //   alignItems: "center",
  //   width: "30%",
  // },
  textColumn: {
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 20,
    justifyContent: "space-around",
    width: "90%",
  },
  text: {
    fontSize: 18,
    marginBottom: 16,
  },
});

export default UserActivity;
