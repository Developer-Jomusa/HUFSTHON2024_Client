import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import stylesheet from "../style/stylesheet.tsx";
import CommunityStyle from "../style/Community.style.tsx";
import BasicButton from "../component/BasicButton.tsx";
import SVG from "../component/SVG.tsx";
import {moderateScale} from "../util/ScreenScaler.tsx";
import ChatStyle from "../style/Chat.style.tsx";
import BasicText from "../component/BasicText.tsx";
import UtilityStyles from "../style/UtilityStyles.tsx";
import JuaText from "../component/JuaText.tsx";

const Community = () => {
    return (
        <SafeAreaView style={[stylesheet.AndroidSafeArea]}>
            <View style={stylesheet.emptyView2}/>
            <View style={CommunityStyle.TitleContainer}>
                <BasicButton
                    buttonStyle={CommunityStyle.TitleButton}
                    textStyle={CommunityStyle.TitleButtonText}
                    stringKey={"community_title1"}
                    disabled={true}
                    enabledColor={'#655753/#FFFFFF/'}
                    disabledColor={"#F7F5F2/#655753"}
                />
                <BasicButton
                    buttonStyle={CommunityStyle.TitleButton}
                    textStyle={CommunityStyle.TitleButtonText}
                    stringKey={"community_title2"}
                    disabled={true}
                    enabledColor={'#655753/#FFFFFF/'}
                    disabledColor={"#F7F5F2/#655753"}
                />
                <BasicButton
                    buttonStyle={CommunityStyle.TitleButton}
                    textStyle={CommunityStyle.TitleButtonText}
                    stringKey={"community_title3"}
                    disabled={false}
                    enabledColor={'#655753/#FFFFFF/'}
                    disabledColor={"#F7F5F2/#655753"}
                />
            </View>
            <ScrollView style={CommunityStyle.ContentsContainer}>
                <View style={stylesheet.emptyView3}/>
                <SVG name={"univercity1"} width={moderateScale(200)} height={moderateScale(200)}/>
                <View style={stylesheet.emptyView3}/>
                <View style={ChatStyle.chatRoom}>
                    <SVG
                        name={"person10"}
                        width={moderateScale(47)}
                        height={moderateScale(47)}
                    />
                    <View style={ChatStyle.chatText}>
                        <View style={ChatStyle.stars}>
                            <BasicText
                                stringKey={"chat_person9"}
                                style={[ChatStyle.chatPerson, UtilityStyles.fc_black, UtilityStyles.fw_700, UtilityStyles.fs_little]}
                            />
                            <SVG
                                name={"star"}
                                width={moderateScale(20)}
                                height={moderateScale(20)}
                                style={ChatStyle.star}
                            />
                            <JuaText style={ChatStyle.score}>4.8</JuaText>
                        </View>
                        <BasicText
                            stringKey={"chat_chat9"}
                            style={[ChatStyle.chatMessage, UtilityStyles.fw_500, UtilityStyles.fs_tiny]}
                        />
                    </View>
                    <BasicButton
                        buttonStyle={ChatStyle.enterChatButton}
                        stringKey={"chat_startBtn"}
                        textStyle={[UtilityStyles.fs_tiny, UtilityStyles.fw_700]}
                        enabledColor="#FCF596/#000000/#D3D3D3"
                    />
                </View>
                <View style={stylesheet.emptyView3}/>
                <SVG name={"univercity2"} width={moderateScale(200)} height={moderateScale(200)}/>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Community;
