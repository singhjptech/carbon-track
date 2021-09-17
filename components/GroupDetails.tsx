import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { addGroup } from "../dbfunctions/dynamo";
const UserDetails: React.FC<Props> = (
  {
    // navigation
  }
) => {
  const [createGroupCode, setCreateGroupCode] = useState(0);
  const [createGroupName, setCreateGroupName] = useState("");
  const [createGroup, setCreateGroup] = useState({});
  const [joinGroupCode, setJoinGroupCode] = useState(0);
  const [joinGroupName, setJoinGroupName] = useState("");
  const [joinGroup, setJoinGroup] = useState({});
  const navigation = useNavigation();

  const handleCreateSubmit = () => {
    const newGroup = { ...createGroup };
    newGroup.groupCode = createGroupCode;
    newGroup.groupName = createGroupName;
    setCreateGroup(newGroup);
    console.log(createGroup, "new state of create group");

    // addGroup(createGroup);
  };

  const handleJoinSubmit = () => {
    const newGroup = { ...joinGroup };
    newGroup.groupCode = joinGroupCode;
    newGroup.groupName = joinGroupName;
    setJoinGroup(newGroup);
    console.log(joinGroup, "new state of join group");
  };

  console.log(joinGroupCode);
  console.log(joinGroupName);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Create Group:</Text>
        <View style={styles.formContainer}>
          <Text style={styles.formLabel}>code:</Text>
          <TextInput
            placeholder={"enter 4 digits"}
            style={styles.formInput}
            onChangeText={(createGroupCode) =>
              setCreateGroupCode(createGroupCode)
            }
          />
        </View>
        <View style={styles.formContainer}>
          <Text>group name:</Text>
          <TextInput
            placeholder={"enter group name"}
            style={styles.formInput}
            onChangeText={(createGroupName) =>
              setCreateGroupName(createGroupName)
            }
          />
        </View>
        <Button title="Create" color="black" onPress={handleCreateSubmit} />
        <Text style={styles.title}>Join Group:</Text>
        <View style={styles.formContainer}>
          <Text style={styles.formLabel}>code:</Text>
          <TextInput
            placeholder="enter group code"
            style={styles.formInput}
            onChangeText={(joinGroupCode) => setJoinGroupCode(joinGroupCode)}
          />
        </View>
        <View style={styles.formContainer}>
          <Text>group name:</Text>
          <TextInput
            placeholder={"enter group name"}
            style={styles.formInput}
            onChangeText={(joinGroupName) => setJoinGroupName(joinGroupName)}
          />
        </View>
        <Button title="Join" color="black" onPress={handleJoinSubmit} />
      </View>
      <View style={styles.footer}>
        <Button
          title="Next"
          color="black"
          onPress={() => navigation.navigate("UserDetails")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  form: {
    justifyContent: "flex-start",
  },
  formContainer: {
    flexDirection: "row",
    justifyContent: "center",
    height: 20,
  },
  formLabel: {
    marginLeft: 45,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  formInput: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
    width: 100,
    marginLeft: 5,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default UserDetails;
