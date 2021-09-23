import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getUser } from "../dbfunctions/dynamo.js";

export type Props = {
  currUser?: any;
};

const UserStats: React.FC<Props> = ({ navigation, currUser }) => {
  const [hasErrored, setHasErrored] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.userStats}>
        <Text style={styles.userStatsTitle}>Your Stats</Text>
        <Text style={styles.userStatsText}>
          Your Total Emissions: {Math.ceil(currUser.TotalEmissions)} grams
        </Text>
        <Text style={styles.userStatsText}>
          Saved Emissions: {Math.ceil(currUser.EmissionsSaved)} grams
        </Text>
        <Text style={styles.userStatsText}>
          Total Journeys: {currUser.Journey.length}
        </Text>
      </View>
      <View style={styles.vehicleContainer}>
        <Text style={styles.userStatsTitle}>Your Vehicles</Text>

        <Text style={styles.userVehicleText}>
          Vehicle 1: {currUser.Vehicles[0].make}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userStats: {
    flex: 1,
    justifyContent: "center",
  },
  vehicleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  userStatsTitle: {
    color: "#2F4847",
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 15,
  },
  userStatsText: {
    fontSize: 18,
    // textTransform: "capitalize",
    marginBottom: 10,
  },
  userVehicleText: {
    fontSize: 18,
    textTransform: "capitalize",
    marginBottom: 10,
  },
});

export default UserStats;
