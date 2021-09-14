import React from "react";
import { StyleSheet, Text, View } from "react-native";

export type Props = {
  name?: string;
  vehicleMake?: string;
  vehicleModel?: any;
};

const Header: React.FC<Props> = ({
  vehicleMake,
  vehicleModel,
  navigation,
}) => {
 

  return (
    <View style={styles.container}>
      <Text>Carbon OffSet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

export default Header;
