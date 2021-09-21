import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export type Props = {
  currUser?: string;
  currGroup?: string;
};

const GroupStats: React.FC<Props> = ({ navigation }) => {
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
