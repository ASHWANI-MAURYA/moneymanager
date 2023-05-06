import React from "react";
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Trans  from "../Screens/AuthScreens/Trans.js"
import Stats  from "../Screens/AuthScreens/Stats.js"
import Accounts  from "../Screens/Accounts.js"
import More  from "../Screens/More.js"
import Entypo from 'react-native-vector-icons/Entypo'
import { COLORS } from "../Global/Styles";

const Tab = createBottomTabNavigator();

const Tabs = () => {

    return (
        <Tab.Navigator 
            // tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.primary : COLORS.gray;

                    switch (route.name) {
                        case "Trans":
                            return (
                                <Image
                                    source={require('../../assets/icons/flash_icon.png')}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            );
                        case "Stats":
                            return (
                                <Image
                                    source={require('../../assets/icons/cube_icon.png')}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            );
                        case "Accounts":
                            return (
                                <Image
                                    source={require('../../assets/icons/search_icon.png')}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            );
                        case "More":
                            return (<>
                            {/* <Entypo name={'dots-three-horizontal'} size={18} color={'#000'} style={{
                                        tintColor: tintColor,
                                    }}/> */}
                                <Image
                                    source={require('../../assets/icons/heart_icon.png')}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                                 </>
                            );
                    }
                }
            })}
        >
            <Tab.Screen
                name="Trans"
                component={Trans} options={{headerShown:false}}
            />
            <Tab.Screen
                name="Stats"
                component={Stats} options={{headerShown:false}}
            />
            <Tab.Screen
                name="Accounts"
                component={Accounts} options={{headerShown:false}}
            />
            <Tab.Screen
                name="More"
                component={More} options={{headerShown:false}}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
