import React, { useState } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { addUser, getUser } from "../dbfunctions/dynamo";
import { useNavigation } from "@react-navigation/core";
import { Auth } from "aws-amplify";

export type Props = {
    navigation?: any,
    route?: any
};

const WelcomeBack: React.FC<Props> = ({ navigation, route }) => {
    const [currUser, setCurrUser] = useState({})

    const handlePress = () => {
        console.log(setCurrUser);
        getUser().then((userData) => {
            if (!userData) {
                console.log(currUser, '<----if')
                addUser().then(() => {

                    setCurrUser(() => {
                        return {
                            UserName: Auth.user.username,
                            Vehicles: [],
                            TotalEmissions: 0,
                            EmissionsSaved: 0,
                            Journey: [],
                            Groups: []
                        }
                    })
                    console.log(currUser, '<---handlePress')
                })
            } else {
                setCurrUser(userData);
                console.log(currUser, '<---else');
            }
        })
        navigation.navigate('GroupDetails', { currUser, setCurrUser });
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