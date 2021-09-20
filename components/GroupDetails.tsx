import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { addGroup, addUserToGroup } from "../dbfunctions/dynamo";
const UserDetails: React.FC<Props> = ({ navigation }) => {
  const [createGroupCode, setCreateGroupCode] = useState(null);
  const [createGroupName, setCreateGroupName] = useState("");
  const [createGroup, setCreateGroup] = useState({});
  const [joinGroupCode, setJoinGroupCode] = useState(0);
  const [joinGroupName, setJoinGroupName] = useState("");
  const [joinGroup, setJoinGroup] = useState({});
  const [hasErrored, setHasErrored] = useState(false);

  // const navigation = useNavigation();

  const handleCreateSubmit = () => {
    const newGroup = { ...createGroup };
    newGroup.GroupCode = createGroupCode;
    newGroup.GroupName = createGroupName;
    console.log(newGroup, "new group");
    addGroup(newGroup).catch((err) => setHasErrored(true));
    //nothing executed after addGroup called
    setCreateGroup(newGroup);
    console.log(createGroup, "state");
    setCreateGroupCode(null);
    setCreateGroupName("");
  };

  const handleJoinSubmit = () => {
    const newGroup = { ...joinGroup };
    newGroup.GroupCode = joinGroupCode;
    newGroup.GroupName = joinGroupName;
    addUserToGroup(newGroup).catch((err) => setHasErrored(true));
    console.log(newGroup, "join group");
    setJoinGroup(newGroup);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Create Group:</Text>
        <View style={styles.formContainer}>
          <Text style={styles.formLabel}>code:</Text>
          <TextInput
            placeholder={"1234"}
            style={styles.formInput}
            onChangeText={(createGroupCode) =>
              setCreateGroupCode(createGroupCode)
            }
          />
          <Text style={styles.formLabel}>group name:</Text>
          <TextInput
            placeholder={"asynchrosaurus"}
            style={styles.formInput}
            onChangeText={(createGroupName) =>
              setCreateGroupName(createGroupName)
            }
          />
          <Pressable style={styles.buttonForm} onPress={handleCreateSubmit}>
            <Text style={styles.buttonFormText}>Create</Text>
          </Pressable>
        </View>
        <Text style={styles.title}>Join Group:</Text>
        <View style={styles.formContainer}>
          <Text style={styles.formLabel}>code:</Text>
          <TextInput
            placeholder="4321"
            style={styles.formInput}
            onChangeText={(joinGroupCode) => setJoinGroupCode(joinGroupCode)}
          />
          <Text style={styles.formLabel}>group name:</Text>
          <TextInput
            placeholder={"green team"}
            style={styles.formInput}
            onChangeText={(joinGroupName) => setJoinGroupName(joinGroupName)}
          />
          <Pressable style={styles.buttonForm} onPress={handleJoinSubmit}>
            <Text style={styles.buttonFormText}>Join</Text>
          </Pressable>
        </View>
        <Pressable
          style={styles.buttonForm}
          onPress={() => navigation.navigate("UserDetails")}
        >
          <Text style={styles.buttonFormText}>Ridin' Solo</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // borderWidth: 4,
    // borderColor: "red",
    backgroundColor: "white",
  },
  form: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "green",
    width: "80%",
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 16,
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 250,
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 28,
    backgroundColor: "#D7E7E1",
    margin: 20,
    width: "90%",
  },
  formLabel: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 20,
    textAlign: "center",
  },

  formInput: {
    textAlign: "center",
    color: "black",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "white",
    height: 40,
    width: 160,
  },
  buttonForm: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#2F4847",
    backgroundColor: "#2F4847",
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
    width: 110,
    marginTop: 15,
    marginBottom: 15,
  },
  buttonFormText: {
    color: "white",
    fontSize: 20,
  },
});

export default UserDetails;
