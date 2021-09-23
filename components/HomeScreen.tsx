import React, { useState, useEffect } from "react";
import { Pressable, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Estimate from "./Estimate";
import UserActivity from "./UserActivity";
import { getUser, getGroup } from "../dbfunctions/dynamo.js";

export type Props = {
  navigation?: string;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [currUser, setCurrUser] = useState(null);
  const [hasErrored, setHasErrored] = useState(false);
  const [currGroup, setCurrGroup] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  // useEffect(() => {
  //   getUser()
  //     .then((res) => {
  //       setCurrUser(res);
  //       setHasLoaded(true);
  //     })
  //     .catch((err) => {
  //       setHasErrored(true);
  //     });
  // }, []);

  // useEffect(() => {
  //   if (hasLoaded) {
  //     console.log("hello");
  //     console.log(currUser.Groups[0].length, "<--current group");

  //     getGroup(currUser.Groups[currUser.Groups.length - 1])
  //       .then((res) => {
  //         console.log('************** getGroup **************')
  //         setCurrGroup(res);
  //       })
  //       .catch((err) => {
  //         setHasErrored(true);
  //       });
  //   }
  // }, [hasLoaded]);

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
        <UserActivity currUser={currUser} currGroup={currGroup} />
      </View>
      <View style={styles.smallCard}>
        <Text style={styles.title}>Help Offset Carbon</Text>
        <Pressable onPress={() => navigation.navigate("Offset")}>
          <Image
            style={styles.image}
            source={require("../src/icons/2F4847/eco.png")}
          />
        </Pressable>
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
  title: {
    color: "#2F4847",
    fontSize: 28,
    fontWeight: "bold",
  },
  image: {
    height: 75,
    width: 100,
  },
});

export default HomeScreen;
