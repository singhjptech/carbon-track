import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { getUser } from "../dbfunctions/dynamo.js";

export type Props = {
  currUser?: string;
  currGroup?: string;
};

const GroupStats: React.FC<Props> = ({ navigation }) => {
  const [currUser, setCurrUser] = useState(null);
  const [hasErrored, setHasErrored] = useState(false);

  useEffect(() => {
    getUser().then((res) => {
      console.log(res, "<-- User Data");
      setCurrUser(res)
    }).catch((err) => {
      setHasErrored(true);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.groupStats}>
        <Text style={styles.groupStatsText}>Group Stats</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
  },
  groupStatsText: {
    fontSize: 28,
    textAlign: "center",
  },
});

export default GroupStats;
