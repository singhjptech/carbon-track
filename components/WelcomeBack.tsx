import React, { useEffect, useState } from "react";
import { 
    Pressable, 
    SafeAreaView, 
    Text, 
    View, 
    StyleSheet,
    Image 
} from "react-native";
import { addUser, getUser } from "../dbfunctions/dynamo";
import { Auth } from "aws-amplify";

export type Props = {
    navigation?: any,
};

const WelcomeBack: React.FC<Props> = ({ navigation }) => {
    

    const handlePress = () => {
        navigation.navigate('UserDetails');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
              <Image
               style={styles.image}
               source={require("../src/icons/D7E7E1/bike.png")}
              />
                <Text 
                style={styles.welcome}>
                    Welcome back
                </Text>
                <Pressable
                style={styles.button} 
                onPress={handlePress}>
                <Text style={styles.enter}>Enter</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
    },
    image: {
      height: 125,
      width: 175,
    },
    welcome: {
      fontSize: 28,
      fontWeight: "bold",
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      borderColor: "#2F4847",
      backgroundColor: "#2F4847",
      borderWidth: 1,
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 10
    },
    enter: {
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: 20,
    },
  });

export default WelcomeBack;