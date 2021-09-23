import React from "react";
import {
  Pressable,
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
} from "react-native";

const Offset = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable
          style={styles.buttonHome}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.homeImage}
            source={require("../src/icons/home.png")}
          />
        </Pressable>
        <Image
          style={styles.logo}
          source={require("../src/icons/carbontrack.png")}
        />
      </View>
      <Text style={styles.title}>Help Offset Carbon</Text>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={require("../src/images/marston-vale.png")}
        />
        <Text style={styles.cardText}>
          The Forest of Marston Vale is a Community Forest and a Charity,
          planting trees and using woodlands to make life better for the people
          and wildlife in the 61 square mile area of the Marston Vale, between
          Bedford and Milton Keynes. The Charity has planted over 2 million
          trees to transform the landscape and improve the prospects of the
          Marston Vale...
        </Text>
        <Pressable style={styles.buttonFind}>
          <Text style={styles.buttonFindText}>Find Out More</Text>
        </Pressable>
      </View>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={require("../src/images/yorkshire-woodland.png")}
        />
        <Text style={styles.cardText}>
          Tree planting is perhaps what the Yorkshire Dales Millennium Trust is
          most well known for. Since starting in 1996 the trust has helped to
          plant around 1.5 million broadleaf trees, creating native woodlands of
          all shapes and sizes throughout the Yorkshire Dales and Nidderdale. In
          this project...
        </Text>
        <Pressable style={styles.buttonFind}>
          <Text style={styles.buttonFindText}>Find Out More</Text>
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
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "center",
    width: "90%",
    height: 60,
  },
  buttonHome: {
    marginLeft: 30,
  },
  title: {
    color: "#2F4847",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    flex: 6,
    justifyContent: "space-around",
    alignItems: "center",
    height: "30%",
    borderRadius: 28,
    backgroundColor: "#D7E7E1",
    width: "90%",
    marginBottom: 20,
  },
  cardText: {
    fontSize: 14,
    margin: 15,
    textAlign: "justify",
  },
  buttonFind: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#2F4847",
    backgroundColor: "#2F4847",
    borderWidth: 1,
    borderRadius: 28,
    padding: 5,
    width: 150,
    marginBottom: 15,
  },
  buttonFindText: {
    color: "white",
    fontSize: 18,
  },

  image: {
    height: 125,
    width: 125,
    marginTop: 15,
  },
  homeImage: {
    height: 35,
    width: 35,
  },
  logo: {
    height: 35,
    width: 240,
    padding: 0,
    margin: 0,
  },
});

export default Offset;
