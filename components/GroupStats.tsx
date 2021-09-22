import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { getGroup, getUser, getGroupEmissions } from "../dbfunctions/dynamo.js";
import Auth from "@aws-amplify/auth";

export type Props = {
  navigation?: any;
  currGroup?: any;
  currUser?: any;
};

const GroupStats: React.FC<Props> = ({ navigation, currGroup, currUser }) => {
  // const [currGroup, setCurrGroup] = useState(null);
  const [hasErrored, setHasErrored] = useState(false);

  // useEffect(() => {
  //   getGroup(currUser.Groups[0]).then((res) => {
  //     setCurrGroup(res)
  //   }).catch((err) => {
  //     setHasErrored(true);
  //   });
  // }, []);
  console.log(currGroup, "<---group current");

  return (
    <View style={styles.container}>
      <View style={styles.groupStats}>
        <Text style={styles.groupStatsTitle}>
          {currGroup.Item.GroupName} - Group Stats:
        </Text>
        {currGroup.Item.GroupMembers.map((member) => {
          console.log(member, "<---MEMBER");
          if (Auth.user.username !== member.UserName) {
            return (
              <Text style={styles.groupStatsText} key={member.UserName}>
                <Text style={styles.groupStatsText}>{member.UserName} </Text>
                <Text style={styles.groupStatsText}>
                  Total Emissions: {member.TotalEmissions}
                </Text>
                {/* <Text>Emissions Saved: {member.EmissionsSaved}</Text> */}
              </Text>
            );
          }
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  groupStatsTitle: {
    color: "#2F4847",
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 15,
  },
  groupStatsText: {
    fontSize: 18,
    textTransform: "capitalize",
    marginBottom: 10,
  },
});

export default GroupStats;
