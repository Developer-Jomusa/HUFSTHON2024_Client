﻿import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import ChatStyle from '../style/Chat.style';
import BasicText from '../component/BasicText';
import BasicButton from '../component/BasicButton';
import SVG from "../component/SVG.tsx";
import {moderateScale} from "../util/ScreenScaler.tsx";
import UtilityStyles from "../style/UtilityStyles.tsx";
import stylesheet from "../style/stylesheet.tsx";

const Chat = ({ navigation }: any) => {
    const [selectedButton, setSelectedButton] = useState('chat_start');
    
    const chat = {
        chat_header:"chat_header",
        chat_start:"chat_start",
        chat_ing:"chat_ing",
        chat_end:"chat_end",
        chat_person1:"chat_person1",
        chat_person2:"chat_person2",
        chat_person3:"chat_person3",
        chat_person4:"chat_person4",
        chat_person5:"chat_person5",
        chat_chat1:"chat_chat1",
        chat_chat2:"chat_chat2",
        chat_chat3:"chat_chat3",
        chat_chat4:"chat_chat4",
        chat_chat5:"chat_chat5",
        chat_startBtn:"chat_startBtn",
        chat_noEndChat:"chat_noEndChat",
        chat_startChatNow:"chat_startChatNow",
        chat_startNow:"chat_startNow"
    };
    const experts = [
        { svg: "person1" as keyof typeof SVG, name: chat.chat_person1, message: chat.chat_chat1 },
        { svg: "person2" as keyof typeof SVG, name: chat.chat_person2, message: chat.chat_chat2 },
        { svg: "person3" as keyof typeof SVG, name: chat.chat_person3, message: chat.chat_chat3 },
        { svg: "person4" as keyof typeof SVG, name: chat.chat_person4, message: chat.chat_chat4 },
        { svg: "person5" as keyof typeof SVG, name: chat.chat_person5, message: chat.chat_chat5 },
    ];
    
    const handleButtonClick = (button: string) => {
        setSelectedButton(button);
    };

    const handleNext = () => {
        navigation.navigate("Chatting");
    };
    const handleGoToStart =()=>{
        setSelectedButton(chat.chat_start);
       
    };
    return (
        <SafeAreaView style={[ChatStyle.MainContainer,stylesheet.AndroidSafeArea]}>
            <View style={ChatStyle.header}>
                <BasicText stringKey={chat.chat_header} style={[ChatStyle.headerText,UtilityStyles.fc_black]} />
            </View>

            {/* 상단 탭 버튼 */}
            <View style={ChatStyle.bar}>
                <BasicButton
                    buttonStyle={ChatStyle.btn}
                    textStyle={[UtilityStyles.fs_tiny,UtilityStyles.fw_700]}
                    stringKey={chat.chat_start}
                    disabled={false}
                    onPress={() => handleButtonClick(chat.chat_start)}
                    enabledColor={selectedButton === 'chat_start' ? '#FFFFFF/#000000/' : '#00000000/#71727A/'}
                />
                <Text style={ChatStyle.divide}>|</Text>
                <BasicButton
                    buttonStyle={ChatStyle.btn}
                    textStyle={[UtilityStyles.fs_tiny,UtilityStyles.fw_700]}
                    stringKey={chat.chat_ing}
                    disabled={false}
                    onPress={() => handleButtonClick(chat.chat_ing)}
                    enabledColor={selectedButton === 'chat_ing' ? '#FFFFFF/#000000/' : '#00000000/#71727A/'}
                />
                <Text style={ChatStyle.divide}>|</Text>
                <BasicButton
                    buttonStyle={ChatStyle.btn}
                    textStyle={[UtilityStyles.fs_tiny,UtilityStyles.fw_700]}
                    stringKey={chat.chat_end}
                    disabled={false}
                    onPress={() => handleButtonClick(chat.chat_end)}
                    enabledColor={selectedButton === 'chat_end' ? '#FFFFFF/#000000/' : '#00000000/#71727A/'}
                />
            </View>

            {selectedButton === 'chat_start' && (
                <View style={ChatStyle.startChatMain}>
                    {experts.map((expert, index) => (
                        <View key={index} style={ChatStyle.chatRoom}>
                            <SVG
                               name={expert.svg as keyof typeof SVG}
                               width={moderateScale(47)}
                               height={moderateScale(47)}
                           />
                            <View style={ChatStyle.chatText}>
                                <BasicText
                                    stringKey={expert.name}
                                    style={[ChatStyle.chatPerson,UtilityStyles.fc_black,UtilityStyles.fw_700,UtilityStyles.fs_little]}
                                />
                                <BasicText
                                    stringKey={expert.message}
                                    style={[ChatStyle.chatMessage,UtilityStyles.fw_500,UtilityStyles.fs_tiny]}
                                />
                            </View>
                            <BasicButton
                                buttonStyle={ChatStyle.enterChatButton}
                                stringKey={chat.chat_startBtn}
                                textStyle={[UtilityStyles.fs_tiny,UtilityStyles.fw_700]}
                                onPress={handleNext}
                                enabledColor='#7C92FF/#FFFFFF/'
                            />
                        </View>
                    ))}
                </View>
            )}


            {selectedButton === 'chat_ing' && (
                <View style={ChatStyle.main}>
                    
                </View>
            )}

            {selectedButton === 'chat_end' && (
                <View style={ChatStyle.main}>
                <BasicText stringKey={chat.chat_noEndChat} style={ChatStyle.mainText} />
                <BasicText stringKey={chat.chat_startChatNow} style={ChatStyle.startChatNow} />
                <BasicButton
                    buttonStyle={ChatStyle.startChat}
                    textStyle={[UtilityStyles.fs_tiny,UtilityStyles.fw_700]}
                    stringKey={chat.chat_startNow}
                    onPress={handleGoToStart}
                    enabledColor='#006FFD/#FFFFFF/'
                />
            </View>
            )}
        </SafeAreaView>
    );
};

export default Chat;
 