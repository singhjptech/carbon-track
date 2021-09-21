import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { addGroup, addUserToGroup } from "../dbfunctions/dynamo";


const UserDetails: React.FC<Props> = ({ navigation }) => {
  const [createGroupCode, setCreateGroupCode] = useState(null);
  const [createGroupName, setCreateGroupName] = useState("");
  const [createGroup, setCreateGroup] = useState({});
  const [joinGroupCode, setJoinGroupCode] = useState(null);
  const [joinGroupName, setJoinGroupName] = useState("");
  const [joinGroup, setJoinGroup] = useState({});
  const [hasErrored, setHasErrored] = useState(false);

  const navigation = useNavigation();

  const handleSubmit = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
      </ScrollView>
    </SafeAreaView>
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
