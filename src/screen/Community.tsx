import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import stylesheet from "../style/stylesheet.tsx";
import CommunityStyle from "../style/Community.style.tsx";
import BasicButton from "../component/BasicButton.tsx";
import SVG from "../component/SVG.tsx";
import {moderateScale} from "../util/ScreenScaler.tsx";

const Community = () => {
    return (
        <SafeAreaView style={[stylesheet.AndroidSafeArea]}>
            <View style={stylesheet.emptyView2}/>
            <View style={CommunityStyle.TitleContainer}>
                <BasicButton
                    buttonStyle={CommunityStyle.TitleButton}
                    textStyle={CommunityStyle.TitleButtonText}
                    stringKey={"community_title1"}
                    disabled={false}
                    enabledColor={'#655753/#FFFFFF/'}
                />
                <BasicButton
                    buttonStyle={CommunityStyle.TitleButton}
                    textStyle={CommunityStyle.TitleButtonText}
                    stringKey={"community_title2"}
                    disabled={true}
                    disabledColor={"#F7F5F2/#655753"}
                />
            </View>
            <ScrollView style={CommunityStyle.ContentsContainer}>
                <View style={stylesheet.emptyView3}/>
                <SVG name={"univercity1"} width={moderateScale(200)} height={moderateScale(200)}/>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Community;
