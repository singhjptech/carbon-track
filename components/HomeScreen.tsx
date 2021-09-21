import React from "react";
import { Pressable, Image, StyleSheet, Text, View } from "react-native";
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
      <View style={styles.headerContainer}>
        <Pressable
          style={styles.buttonUser}
          onPress={() => navigation.navigate("User")}
        >
          <Text style={styles.buttonUserText}>User</Text>
        </Pressable>
        <Image
          style={styles.logo}
          source={require("../src/icons/carbontrack.png")}
        />
      </View>
      {/* <View style={styles.smallCard}>
        <Goals />
      </View> */}
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
  headerContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "center",
    width: "90%",
    height: 60,
  },
  buttonUser: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#2F4847",
    backgroundColor: "#2F4847",
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
    width: 80,
  },
  buttonUserText: {
    color: "white",
    fontSize: 20,
  },
  logo: {
    height: 35,
    width: 240,
    padding: 0,
    margin: 0,
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
