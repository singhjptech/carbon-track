import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GroupStats from "./GroupStats";
import UserStats from "./UserStats";

export type Props = {
  currUser?: string;
};

const User: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonHomeContainer}>
        <Pressable
          style={styles.buttonHome}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonHomeText}>Home</Text>
        </Pressable>
      </View>
      <View style={styles.userHeader}>
        <Text style={styles.userWelcome}>Hey, User</Text>
      </View>
      <View style={styles.statsContainer}>
        <UserStats navigation={navigation} />
      </View>
      <View style={styles.statsContainer}>
        <GroupStats navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderWidth: 4,
    borderColor: "red",
  },
  headerText: {
    alignItems: "center",
    justifyContent: "center",
  },
  userHeader: {
    color: "black",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "purple",
  },
  userWelcome: {
    fontSize: 28,
    fontWeight: "bold",
  },
  buttonHomeContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-start",
    marginRight: 20,
    borderWidth: 2,
    borderColor: "blue",
  },
  statsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 250,
    borderRadius: 28,
    backgroundColor: "#D7E7E1",
    margin: 20,
    borderWidth: 2,
    borderColor: "green",
  },
  buttonHome: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#2F4847",
    backgroundColor: "#2F4847",
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
    width: 80,
  },
  buttonHomeText: {
    color: "white",
    fontSize: 20,
  },
});

export default User;
