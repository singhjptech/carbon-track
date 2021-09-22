import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { getGroup, getUser, getGroupEmissions } from "../dbfunctions/dynamo.js";

export type Props = {
  navigation?: any,
  currGroup?: any,
  currUser?: any,
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
  console.log(currGroup, '<---group current');
  
  return (
    <View style={styles.container}>
      <View style={styles.groupStats}>
        <Text style={styles.groupStatsText}>{currGroup.Item.GroupName} - Group Stats:</Text>
        {currGroup.Item.GroupMembers.map((member) => {
          console.log(member, '<---MEMBER')
          return (
            <Text key={member.UserName}>
              <Text>{member.UserName}    </Text>
              <Text>Total Emissions: {member.TotalEmissions}</Text>
              {/* <Text>Emissions Saved: {member.EmissionsSaved}</Text> */}
            </Text>
          )
 
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
  },
  groupStatsText: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 5.
  },
});

export default GroupStats;
