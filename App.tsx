import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { withAuthenticator } from "aws-amplify-react-native";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports.js";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { ScrollView } from "react-native-gesture-handler";
import { createUser, getUser } from "./dbfunctions/dynamo.js";
Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });
import { AmplifyTheme } from "aws-amplify-react-native"
import { urlSafeEncode } from "@aws-amplify/core";


const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

const MyButton= Object.assign({}, AmplifyTheme.button, { backgroundColor: '#2F4847', borderRadius: 28, width: '50%', marginLeft: '25%' });
const MyHeaderText= Object.assign({}, AmplifyTheme.sectionHeaderText, { color: '#2F4847' });
// const MyPhoto= Object.assign({}, AmplifyTheme.photo, { photo: source={"../src/icons/D7E7E1/bike.png"} }
const MyHFooterText= Object.assign({}, AmplifyTheme.sectionFooterLink, { color: '#2F4847' });
const MyTheme = Object.assign({}, AmplifyTheme, { button: MyButton, sectionHeaderText: MyHeaderText, sectionFooterLink: MyHFooterText });



export default withAuthenticator(App, {theme: MyTheme});

// export default withAuthenticator(App);

