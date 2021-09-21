import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { withAuthenticator } from "aws-amplify-react-native";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports.js";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { createUser, getUser } from "./dbfunctions/dynamo.js";
Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [currUser, setCurrUser] = useState({});
  const [hasErrored, setHasErrored] = useState(false);

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

export default withAuthenticator(App);
// export default App;
