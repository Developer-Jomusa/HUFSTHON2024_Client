import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ProfileStyle from "../style/Profile.style.tsx";
import BasicText from "../component/BasicText.tsx";
import UtilityStyles from "../style/UtilityStyles.tsx";
import {SafeAreaView} from "react-native-safe-area-context";
import SVG from "../component/SVG.tsx";
import {moderateScale} from "../util/ScreenScaler.tsx";
import stylesheet from "../style/stylesheet.tsx";
import {next} from "../../asset/svg";
import ProfileMenu from "../component/ProfileMenu.tsx";

const Profile = () => {
    return (
        <SafeAreaView style={ProfileStyle.MainContainer}>
            <View style={ProfileStyle.TitleContainer}>
                <BasicText stringKey={"profile_title"} style={[UtilityStyles.fc_black,UtilityStyles.fs_little,UtilityStyles.fw_700]}/>
            </View>
            <View style={ProfileStyle.ProfileImageContainer}>
                <View style={ProfileStyle.ProfileImage}>
                    <SVG name={"Profile"} fill={"#B4DBFF"} width={moderateScale(60)} height={moderateScale(60)}/>
                </View>
                <BasicText stringKey={"profile_nickname"} style={[UtilityStyles.fc_black,UtilityStyles.fs_small,UtilityStyles.fw_800]}/>
            </View>
            <View style={ProfileStyle.ContentsContainer}>
                <View style={stylesheet.emptyView1}/>
                <ProfileMenu stringKey={"profile_edit"}/>
                <ProfileMenu stringKey={"profile_destroy"}/>
                <ProfileMenu stringKey={"profile_bub"}/>
            </View>
        </SafeAreaView>
    );
};


export default Profile;
