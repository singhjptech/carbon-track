import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export type Props = {
  currUser?: string;
  currGroup?: string;
};

const UserStats: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.userStats}>
        <Text style={styles.userStatsText}>Your Stats</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: "column",
    backgroundColor: "skyblue",
  },
  userStatsText: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default UserStats;
