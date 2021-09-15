import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import {
  SafeAreaView,
  withSafeAreaInsets,
} from "react-native-safe-area-context";
import GroupStats from "./GroupStats";
import UserStats from "./UserStats";

export type Props = {
  currUser?: string;
};

const User: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonHome}>
        <Button
          title="Home"
          color="white"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
      <View style={styles.userHeader}>
        <Text style={styles.userWelcome}>Hey, User</Text>
      </View>
      <UserStats navigation={navigation} />
      <GroupStats navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#2F4847",
  },
  headerText: {
    alignItems: "center",
    justifyContent: "center",
  },
  userHeader: {
    alignItems: "center",
    justifyContent: "center",
  },
  userWelcome: {
    color: "white",
    fontSize: 32,
  },
  buttonHome: {
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  buttonHomeText: {
    fontSize: 40,
  },
});

export default User;
