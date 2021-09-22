import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

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
      {/* <Text style={styles.headerText}>Carbon OffSet</Text> */}
      <View style={styles.headerContainer}>
        <Image
          style={styles.image}
          source={require("../src/icons/carbontrack.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    borderColor: "red",
    borderWidth: 2,
    height: 500,
  },
  headerContainer: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    width: "80%",
    borderColor: "blue",
    borderWidth: 2,
  },
  headerText: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
  },
  userProfile: {
    flex: 1,
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
  image: {
    height: 30,
    width: 200,
    padding: 0,
    margin: 0,
  },
});

export default Header;
