import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import ChatStyle from '../style/Chat.style';
import BasicText from '../component/BasicText';
import BasicButton from '../component/BasicButton';
import SVG from "../component/SVG.tsx";
import { moderateScale } from "../util/ScreenScaler.tsx";
import UtilityStyles from "../style/UtilityStyles.tsx";
import stylesheet from "../style/stylesheet.tsx";
import { createChatRoom } from "../api";
import { useUserState } from "../store/UserStore.ts";
import SVGButton from "../component/SVGButton.tsx";
import i18n from '../../src/i18n.config'

const Chat = ({ navigation }: any) => {
    const [selectedButton, setSelectedButton] = useState<keyof typeof chat>('menu1');
    const [language, setLanguage] = useState<'ko' | 'en'>('ko'); // 언어 상태 추가
    const iconSize = 20;

    const chat = {
        chat_header: "chat_header",
        menu1: "menu1",
        menu2: "menu2",
        menu3: "menu3",
        chat_startBtn: "chat_startBtn",
    };
    const handleLanguageToggle = () => {
        const newLanguage = language === 'ko' ? 'en' : 'ko';
        i18n.changeLanguage(newLanguage); // 언어 변경
        setLanguage(newLanguage);
    }

    const createExpert = (index: number, name: string, message: string, score: number) => ({
        star: "star" as keyof typeof SVG,
        svg: `person${index}` as keyof typeof SVG,
        name,
        message,
        score,
    });

    const expertsByMenu: Record<keyof typeof chat, { star: keyof typeof SVG; svg: keyof typeof SVG; name: string; message: string; score: number }[]> = {
        menu1: [
            createExpert(1, "chat_person1", "chat_chat1", 4.8),
            createExpert(2, "chat_person2", "chat_chat2", 4.0),
            createExpert(3, "chat_person3", "chat_chat3", 3.8),
            createExpert(4, "chat_person4", "chat_chat4", 4.5),
            createExpert(5, "chat_person5", "chat_chat5", 5.0),
        ],
        menu2: [
            createExpert(6, "chat_person6", "chat_chat6", 4.3),
            createExpert(7, "chat_person7", "chat_chat7", 4.7),
            createExpert(8, "chat_person8", "chat_chat8", 3.9),
            createExpert(9, "chat_person9", "chat_chat9", 4.2),
            createExpert(10, "chat_person10", "chat_chat10", 4.6),
        ],
        menu3: [
            createExpert(11, "chat_person11", "chat_chat11", 3.5),
            createExpert(12, "chat_person12", "chat_chat12", 4.1),
            createExpert(13, "chat_person13", "chat_chat13", 4.9),
            createExpert(14, "chat_person14", "chat_chat14", 3.6),
            createExpert(15, "chat_person15", "chat_chat15", 4.4),
        ],
        chat_header: [],
        chat_startBtn: []
    };

    const handleButtonClick = (button: keyof typeof chat) => {
        setSelectedButton(button);
    };

    const userState = useUserState();
    const createChatRoomRequest = async () => {
        const requestData = {
            roomName: "Samplename",
            username: userState.name,
        };

        try {
            const response = await createChatRoom(requestData);
            console.log("채팅방 생성 성공:", response);
            userState.setWebsocketUrl(response.webSocketUrl);
            navigation.navigate("Chatting");
        } catch (error) {
            console.error("채팅방 생성 실패:", error);
        }
    };

    const renderExpertList = () => {
        const experts = expertsByMenu[selectedButton];
        return (
            <View style={ChatStyle.startChatMain}>
                {experts.map((expert, index) => (
                    <View key={index} style={ChatStyle.chatRoom}>
                        <SVG
                            name={expert.svg as keyof typeof SVG}
                            width={moderateScale(47)}
                            height={moderateScale(47)}
                        />
                        <View style={ChatStyle.chatText}>
                            <View style={ChatStyle.stars}>
                                <BasicText
                                    stringKey={expert.name}
                                    style={[ChatStyle.chatPerson, UtilityStyles.fc_black, UtilityStyles.fw_700, UtilityStyles.fs_little]}
                                />
                                <SVG
                                    name={expert.star as keyof typeof SVG}
                                    width={iconSize}
                                    height={iconSize}
                                    style={ChatStyle.star}
                                />
                                <Text style={ChatStyle.score}>{expert.score}</Text>
                            </View>
                            <BasicText
                                stringKey={expert.message}
                                style={[ChatStyle.chatMessage, UtilityStyles.fw_500, UtilityStyles.fs_tiny]}
                            />
                        </View>
                        <BasicButton
                            buttonStyle={ChatStyle.enterChatButton}
                            stringKey={chat.chat_startBtn}
                            textStyle={[UtilityStyles.fs_tiny, UtilityStyles.fw_700]}
                            onPress={() => createChatRoomRequest()}
                            enabledColor="#FCF596/#000000/#D3D3D3"
                        />
                    </View>
                ))}
            </View>
        );
    };

    return (
        <SafeAreaView style={[ stylesheet.AndroidSafeArea]}>
            {/* <View style={ChatStyle.header}>
                <BasicText stringKey={chat.chat_header} style={[ChatStyle.headerText, UtilityStyles.fc_black]} />
            </View> */}
            <View style={ChatStyle.language}>
                <SVG
                    name={"country"}
                    width={30}
                    height={30}
                    style={ChatStyle.country}
                />
                <SVGButton
                    svgName={"language"}
                    svgSize={30}
                    style={ChatStyle.language}
                    onPress={() => {
                        handleLanguageToggle();
                    }}
                    disabled={false}
                    fill={"#006FFD"}
                />
                
            </View>
            <View style={ChatStyle.MainContainer}>
                {/* 상단 탭 버튼 */}
                <View style={ChatStyle.bar}>
                    {["menu1", "menu2", "menu3"].map((menu) => (
                        <React.Fragment key={menu}>
                            <BasicButton
                                buttonStyle={ChatStyle.btn}
                                textStyle={[UtilityStyles.fs_tiny, UtilityStyles.fw_700]}
                                stringKey={chat[menu as keyof typeof chat]}
                                disabled={false}
                                onPress={() => handleButtonClick(menu as keyof typeof chat)}
                                enabledColor={selectedButton === menu ? '#FFFFFF/#000000/' : '#00000000/#71727A/'}
                            />
                            {menu !== "menu3" && <Text style={ChatStyle.divide}>|</Text>}
                        </React.Fragment>
                    ))}
                </View>

                {/* 전문가 리스트 렌더링 */}
                {renderExpertList()}
            </View>
        </SafeAreaView>
    );
};

export default Chat;
