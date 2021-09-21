import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Header: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.userProfile}>
        <Pressable
          style={styles.buttonUser}
          onPress={() => navigation.navigate("User")}
        >
          <Text style={styles.buttonUserText}>User</Text>
        </Pressable>
      </View>
      <Text style={styles.headerText}>Carbon OffSet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
  },
  headerText: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
  },
  userProfile: {
    alignItems: "flex-end",
    justifyContent: "flex-start",
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
});

export default Header;
