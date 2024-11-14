import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Explore from "../screen/Explore";
import Chat from "../screen/Chat";
import Profile from "../screen/Profile";

const Tab = createBottomTabNavigator();

const MainTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: "blue",
                tabBarInactiveTintColor: "gray",
                tabBarLabel: route.name,
                headerShown: false,
            })}
        >
            <Tab.Screen name="Explore" component={Explore} />
            <Tab.Screen name="Chat" component={Chat} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

export default MainTabs;
