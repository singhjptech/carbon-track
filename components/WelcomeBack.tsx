import React, { useEffect, useState } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { addUser, getUser } from "../dbfunctions/dynamo";
import { useNavigation } from "@react-navigation/core";
import { Auth } from "aws-amplify";

export type Props = {
    navigation?: any,
    route?: any
};

const WelcomeBack: React.FC<Props> = ({ navigation, route }) => {
    const [currUser, setCurrUser] = useState({});
    const [hasLoaded, setHasLoaded] = useState(false)
    useEffect(() => {
        if (hasLoaded) navigation.navigate('GroupDetails', { screen: 'GroupDetails', params: { currUser, setCurrUser } });
    }, [currUser, hasLoaded])
    const handlePress = () => {
        console.log(setCurrUser);
        getUser().then((userData) => {
            if (!userData) {
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
                })
            } else {
                setCurrUser(userData);
            }
            setHasLoaded(true);
        })
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