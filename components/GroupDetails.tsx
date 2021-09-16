import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const UserDetails: React.FC<Props> = (
  {
    // navigation
  }
) => {
  const [createGroup, setCreateGroup] = useState("");
  const [joinGroup, setJoinGroup] = useState("");

  const navigation = useNavigation();

  const handleSubmit = () => { };

  return (
    <View style={styles.container}>
      <Text style={styles.make}>Create Group:</Text>
      <TextInput
        defaultValue={createGroup}
        placeholder="Group Name"
        style={styles.input}
        onChangeText={(createGroup) => setCreateGroup(createGroup)}
      />
      <Button title="Create" color="black" onPress={handleSubmit} />
      <Text style={styles.model}>Join Group:</Text>
      <TextInput
        defaultValue={joinGroup}
        placeholder="Join Group"
        style={styles.input}
        onChangeText={(joinGroup) => setJoinGroup(joinGroup)}
      />
      <Button title="Join" color="black" onPress={handleSubmit} />
      <Button
        title="Next"
        color="black"
        onPress={() => navigation.navigate("UserDetails")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  make: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 16,
  },
  model: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 16,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: 100,
  },
});

export default UserDetails;
