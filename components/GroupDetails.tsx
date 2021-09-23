import React, { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { addGroup, addUserToGroup } from "../dbfunctions/dynamo";

export type Props = {
  navigation?: any;
};

const GroupDetails: React.FC<Props> = ({ navigation }) => {
  const [createGroupCode, setCreateGroupCode] = useState(null);
  const [createGroupName, setCreateGroupName] = useState("");
  const [createGroup, setCreateGroup] = useState({});
  const [joinGroupCode, setJoinGroupCode] = useState(null);
  const [joinGroupName, setJoinGroupName] = useState("");
  const [joinGroup, setJoinGroup] = useState({});
  const [hasErrored, setHasErrored] = useState(false);

  const handleCreateSubmit = () => {
    const newGroup = { ...createGroup };
    newGroup.GroupCode = createGroupCode;
    newGroup.GroupName = createGroupName;
    addGroup(newGroup)
      .then(() => {
        setCreateGroup(newGroup);
        setCreateGroupCode(null);
        setCreateGroupName("");
      })
      .catch((err) => setHasErrored(true));
  };

  const handleJoinSubmit = () => {
    const newGroup = { ...joinGroup };
    newGroup.GroupCode = joinGroupCode;
    newGroup.GroupName = joinGroupName;
    addUserToGroup(newGroup).catch((err) => setHasErrored(true));
    setJoinGroup(newGroup);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../src/icons/carbontrack.png")}
      />
      <View style={styles.form}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Create Group:</Text>
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
        <View style={styles.formContainer}>
          <Text style={styles.title}>Join Group:</Text>
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
        <Image
          style={styles.image}
          source={require("../src/icons/2F4847/solo.png")}
        />
        <Pressable
          style={styles.buttonSolo}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonSoloText}>Ridin' Solo</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  form: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  title: {
    color: "#2F4847",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 4,
  },
  formContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 28,
    backgroundColor: "#D7E7E1",
    width: "90%",
    marginBottom: 20,
  },
  formLabel: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 18,
    textAlign: "center",
  },
  formInput: {
    fontSize: 18,
    textAlign: "center",
    color: "black",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "white",
    height: "15%",
    width: 160,
    marginBottom: 10,
  },
  buttonForm: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#2F4847",
    backgroundColor: "#2F4847",
    borderWidth: 1,
    borderRadius: 28,
    padding: 5,
    width: 150,
    marginTop: 15,
    marginBottom: 15,
  },
  buttonFormText: {
    color: "white",
    fontSize: 18,
  },
  buttonSolo: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#2F4847",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 28,
    padding: 5,
    width: 150,
    marginTop: 15,
    marginBottom: 15,
  },
  buttonSoloText: {
    color: "#2F4847",
    fontSize: 18,
  },
  logo: {
    height: 35,
    width: 240,
    padding: 0,
    marginBottom: 25,
  },
  image: {
    height: 125,
    width: 150,
  },
});

export default GroupDetails;
