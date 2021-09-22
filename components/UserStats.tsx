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
        <Text>Your Total Emissions: {currUser.TotalEmissions}</Text>
        <Text>Saved Emissions: {currUser.EmissionsSaved}</Text>
        <Text>Total Journeys: {currUser.Journey.length}</Text>
      </View>
      <View style={styles.vehicleContainer}>
        <Text>Your Vehicles: {currUser.Vehicles[0].make}</Text>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userStatsTitle: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 5,
  },
});

export default UserStats;
