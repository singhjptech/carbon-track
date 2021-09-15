import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Estimate from "./Estimate";
import Header from "./Header";

export type Props = {
  navigation?: string
};

const HomeScreen: React.FC<Props> = ({
  navigation,
}) => {
 

  return (
    <View style={styles.container}>
      <Header />
      <Estimate navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default HomeScreen;
