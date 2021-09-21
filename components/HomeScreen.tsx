import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";
import Goals from "./Goals";
import Estimate from "./Estimate";
import UserActivity from "./UserActivity";
import Offset from "./Offset";

export type Props = {
  navigation?: string;
};

const HomeScreen: React.FC<Props> = ({
  // route,
  navigation,
}) => {
  // const { userVehicle } = route.params;
  // console.log(userVehicle, "VEHICLE");
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.smallCard}>
        <Goals />
      </View>
      <View style={styles.card}>
        <Estimate navigation={navigation} />
      </View>
      <View style={styles.card}>
        <UserActivity />
      </View>
      <View style={styles.smallCard}>
        <Offset />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  card: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    height: "30%",
    borderRadius: 28,
    backgroundColor: "#D7E7E1",
    margin: 20,
    width: "90%",
  },
  smallCard: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    height: "30%",
    borderRadius: 28,
    backgroundColor: "#D7E7E1",
    margin: 20,
    width: "90%",
  },
});

export default HomeScreen;
