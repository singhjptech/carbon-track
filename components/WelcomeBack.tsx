import React, {useState} from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { addUser, getUser } from "../dbfunctions/dynamo";
import { useNavigation } from "@react-navigation/core";
import { Auth } from "aws-amplify";

export type Props = {
    navigation?: any,
    route?: any
  };

const WelcomeBack: React.FC<Props> = ({ navigation, route }) => {
    const { setCurrUser, currUser } = route.params;
    console.log(setCurrUser);

    const handlePress = () => {
        getUser().then((userData) => {
            if(!userData) {
                console.log(currUser, '<----if')
                addUser().then(() => {
                    setCurrUser({
                        UserName: Auth.user.username,
                        Vehicles: [],
                        TotalEmissions: 0,
                        EmissionsSaved: 0,
                        Journey: [],
                        Groups: []})
                    })                    
                } else {
                    setCurrUser(userData);
                    console.log(userData, '<---else')
            }
        })
        navigation.navigate('GroupDetails')
        console.log(currUser, '<---handlePress')
    };

return (
    <SafeAreaView>
        <View>
            <Text>Welcome back</Text>
            <Pressable onPress={handlePress}><Text>Enter</Text></Pressable>
        </View>
    </SafeAreaView>
)
}
  
export default WelcomeBack;