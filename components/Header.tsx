import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Header: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.userProfile}>
        <Button
          title="User"
          color="black"
          onPress={() => navigation.navigate("User")}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Carbon OffSet</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "skyblue",
    width: "90%",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "teal",
  },
  headerText: {
    fontSize: 32,
  },
  userProfile: {
    alignItems: "flex-end",
    justifyContent: "flex-start",
    backgroundColor: "steelblue",
  },
});

export default Header;
