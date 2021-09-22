import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ColorSchemeName } from "react-native";

import UserDetails from "../components/UserDetails";
import GroupDetails from "../components/GroupDetails";
import HomeScreen from "../components/HomeScreen";
import User from "../components/User";
import Journey from "../components/Journey";
import WelcomeBack from "../components/WelcomeBack";

const Stack = createNativeStackNavigator();
export type Props = {
  setCurrUser?: any,
  currUser?: any
};

export default function Navigation({
  // props,
  colorScheme,
}: // currUser,
  // setCurrUser
  {
    colorScheme: ColorSchemeName;
  }) {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="User">

        <Stack.Screen name="WelcomeBack" component={WelcomeBack} />

        <Stack.Screen name="GroupDetails" component={GroupDetails} />

        <Stack.Screen name="UserDetails" component={UserDetails} />

        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="User" component={User} />

        <Stack.Screen name="Journey" component={Journey} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
