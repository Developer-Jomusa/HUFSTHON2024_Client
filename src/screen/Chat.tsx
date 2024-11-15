import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import ChatStyle from '../style/Chat.style';
import BasicText from '../component/BasicText';
import BasicButton from '../component/BasicButton';
import SVG from "../component/SVG.tsx";
import {moderateScale} from "../util/ScreenScaler.tsx";
import UtilityStyles from "../style/UtilityStyles.tsx";
import stylesheet from "../style/stylesheet.tsx";

const Chat = ({ navigation }: any) => {
    const [selectedButton, setSelectedButton] = useState('chat_start'); // 선택된 버튼
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
    
    // 상태 변경 함수
    const handleButtonClick = (button: string) => {
        setSelectedButton(button);
    };

    // 다음 화면으로 이동
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
                    text={chat.chat_start}
                    textSize={12}
                    textWeight={'700'}
                    onPress={() => handleButtonClick(chat.chat_start)}
                    enabledColor={selectedButton === 'chat_start' ? '#FFFFFF/#000000/' : 'none/#71727A/'}
                    style={ChatStyle.btn}
                />
                <Text style={ChatStyle.divide}>|</Text>
                <BasicButton
                    text={chat.chat_ing}
                    textSize={12}
                    textWeight={'700'}
                    onPress={() => handleButtonClick(chat.chat_ing)}
                    enabledColor={selectedButton === 'chat_ing' ? '#FFFFFF/#000000/' : 'none/#71727A/'}
                    style={ChatStyle.btn}
                />
                <Text style={ChatStyle.divide}>|</Text>
                <BasicButton
                    text={chat.chat_end}
                    textSize={12}
                    textWeight={'700'}
                    onPress={() => handleButtonClick(chat.chat_end)}
                    enabledColor={selectedButton === 'chat_end' ? '#FFFFFF/#000000/' : 'none/#71727A/'}
                    style={ChatStyle.btn}
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
                                text={chat.chat_startBtn}
                                textSize={12}
                                textWeight={'700'}
                                onPress={handleNext}
                                style={ChatStyle.enterChatButton}
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
                    style={ChatStyle.startChat}
                    text={chat.chat_startNow}
                    textSize={12}
                    textWeight={'700'}
                    onPress={handleGoToStart}
                    enabledColor='#006FFD/#FFFFFF/'
                />
            </View>
            )}
        </SafeAreaView>
    );
};

export default Chat;
 