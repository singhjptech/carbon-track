import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { getUser } from "../dbfunctions/dynamo.js";

export type Props = {
  currUser?: string;
  currGroup?: string;
};

const UserStats: React.FC<Props> = ({ navigation }) => {
  const [currUser, setCurrUser] = useState(null);
  const [hasErrored, setHasErrored] = useState(false);

  useEffect(() => {
    getUser().then((res) => {
      setCurrUser(res)
    }).catch((err) => {
      setHasErrored(true);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.userStats}>
        <Text style={styles.userStatsTitle}>Your Stats</Text>
        <Text>Total Emissions</Text>
        <Text>Saved Emissions</Text>
        <Text>Saved Emissions</Text>
        <Text>Total Journeys</Text>
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
