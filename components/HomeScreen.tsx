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
          <Image
            style={styles.userImage}
            source={require("../src/icons/user.png")}
          />
        </Pressable>
        <Image
          style={styles.logo}
          source={require("../src/icons/carbontrack.png")}
        />
      </View>
      <View style={styles.cardTop}>
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
    width: "90%",
    height: 60,
    marginBottom: 20,
  },
  buttonUser: {
    marginLeft: 30,
  },
  logo: {
    height: 35,
    width: 240,
    padding: 0,
    margin: 0,
  },
  cardTop: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    height: "30%",
    width: "100%",
    marginBottom: 20,
  },
  card: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    height: "30%",
    borderRadius: 28,
    backgroundColor: "#D7E7E1",
    width: "90%",
    marginBottom: 20,
  },
  smallCard: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    height: "30%",
    borderRadius: 28,
    backgroundColor: "#D7E7E1",
    width: "90%",
    marginBottom: 20,
  },
  userImage: {
    height: 35,
    width: 35,
  },
});

export default HomeScreen;
