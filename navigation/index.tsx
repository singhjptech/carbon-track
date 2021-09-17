import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ColorSchemeName, Pressable } from "react-native";

import UserDetails from "../components/UserDetails";
import GroupDetails from "../components/GroupDetails";
import HomeScreen from "../components/HomeScreen";
import User from "../components/User";
import Journey from "../components/Journey";

const Stack = createNativeStackNavigator();

export default function Navigation({
  // props,
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  // const [userVehicle, setUserVehicle] = useState({});
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="GroupDetails" component={GroupDetails} />

        <Stack.Screen name="UserDetails" component={UserDetails} />
        {/* { {(props) => (
            <UserDetails
              userVehicle={userVehicle}
              setUserVehicle={setUserVehicle}
            />
          )}}
        {</Stack.Screen>  */}

        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="User" component={User} />

        <Stack.Screen
          name="Journey"
          component={Journey}
          options={{ title: "Your Journey Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
