import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Explore from "../screen/Explore";
import Chat from "../screen/Chat";
import Profile from "../screen/Profile";
import SVG from "../component/SVG.tsx";
import {moderateScale} from "../util/ScreenScaler.tsx";
import {useTranslation} from "react-i18next";
import Community from "./Community.tsx";

const Tab = createBottomTabNavigator();

const MainTabs = () => {

    const {t} = useTranslation();

    return (
        <Tab.Navigator
            initialRouteName={"Chat"}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused}) => {
                    const fillColor = focused ? "#006FFD" : "gray";
                    switch (route.name) {
                        case "Explore":
                            return <SVG name="Explore" fill={fillColor}/>;
                        case "Chat":
                            return <SVG name="Chat" fill={fillColor}/>;
                        case "Profile":
                            return <SVG name="Profile" fill={fillColor}/>;
                        case "Community":
                            return <SVG name="Community" fill={fillColor}/>;
                        default:
                            return null;
                    }
                },
                tabBarLabel: t(`menu_${route.name.toLowerCase()}`),
                headerShown: false,
                tabBarIconStyle: {
                    width: moderateScale(20),
                    height: moderateScale(20),
                },
                tabBarStyle: {
                    height: moderateScale(80),
                    display: "flex",
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarItemStyle: {
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                },
                tabBarLabelStyle: {
                    fontSize: moderateScale(10)
                },
            })}
        >
            <Tab.Screen name="Explore" component={Explore}/>
            <Tab.Screen name="Chat" component={Chat}/>
            <Tab.Screen name="Profile" component={Profile}/>
            <Tab.Screen name="Community" component={Community}/>
        </Tab.Navigator>
    );
};

export default MainTabs;
