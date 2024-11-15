import React, { useEffect, useRef, useState } from "react";
import {
    SafeAreaView,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import Unity, { InterfaceData } from "../component/Unity.tsx";
import SVG from "../component/SVG.tsx";
import BasicText from "../component/BasicText.tsx";
import UtilityStyles from "../style/UtilityStyles.tsx";
import ChattingStyle from "../style/Chatting.style.tsx";
import { moderateScale } from "../util/ScreenScaler.tsx";
import ChatBubble from "react-native-chat-bubble";
import SVGButton from "../component/SVGButton.tsx";
import BasicInput from "../component/BasicInput.tsx";
import {setupWebSocket} from "../api";
import stylesheet from "../style/stylesheet.tsx";
import {useUserState} from "../store/UserStore.ts";

interface Message {
    content: string;
    isOwnMessage: boolean;
}

export enum Emotion {
    Default = 0, // 기본
    Joy = 1,     // 행복
    Angry = 2,   // 화남
    Surprised = 3, // 놀람
    Sad = 4,     // 슬픔
    Laughing = 5, // 웃김
    Praise = 6,  // 칭찬
    Bored = 7,   // 좌절
    Bye = 8      // 마무리 인사
}

const Chatting = ({ navigation }: any) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState<string>("");
    const sendToUnityRef = useRef<(data: InterfaceData) => void>();
    const scrollRef = useRef<ScrollView>(null);

    const userState = useUserState();
    // WebSocket 관련 상태
    const [webSocket, setWebSocket] = useState<ReturnType<typeof setupWebSocket> | null>(null);

    // 메시지 추가 함수
    const addMessage = (content: string, isOwnMessage: boolean) => {
        setMessages((prev) => [...prev, { content, isOwnMessage }]);
    };

    // 메시지 전송 처리
    const handleSendMessage = (isOwnMessage: boolean) => {
        if (webSocket && inputText.trim() !== "") {
            webSocket.sendMessage(inputText); // WebSocket으로 메시지 전송
            addMessage(inputText, true); // 내 메시지 추가
            setInputText(""); // 입력창 초기화
        }
    };

    // Unity와 연동된 감정 표현 처리
    const playEmotion = (emotion: Emotion) => {
        const sendData: InterfaceData = {
            name: "N2U_NTY_ExpressEmotion",
            data: JSON.stringify({ emotionType: emotion }),
        };
        if (sendToUnityRef.current) {
            sendToUnityRef.current(sendData);
        }
    };

    // WebSocket 설정 및 메시지 수신 처리
    useEffect(() => {
        const webSocketInstance = setupWebSocket(
            userState.websocketUrl, // WebSocket 서버 URL
            (message: string) => {
                // 수신 메시지 처리
                addMessage(message, false);
                scrollRef.current?.scrollToEnd({ animated: true });
            }
        );

        setWebSocket(webSocketInstance);

        return () => {
            webSocketInstance.closeConnection(); // 컴포넌트가 언마운트될 때 WebSocket 연결 종료
        };
    }, []);

    return (
        <SafeAreaView style={[ChattingStyle.MainContainer, stylesheet.AndroidSafeArea]}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                style={ChattingStyle.MainContainer}
            >
                <Unity
                    style={ChattingStyle.UnityContainer}
                    onSendMessage={(sendToUnity) => { sendToUnityRef.current = sendToUnity; }}
                />

                <View style={ChattingStyle.ContentContainer}>
                    <View style={ChattingStyle.TitleContainer}>
                        <SVGButton
                            svgName={"next"}
                            svgSize={20}
                            style={UtilityStyles.flipX}
                            onPress={() => {
                                navigation.goBack();
                            }}
                            disabled={false}
                            fill={"#006FFD"}
                        />
                        <BasicText
                            stringKey={"심리전문가 이은성"}
                            style={[
                                UtilityStyles.fc_black,
                                UtilityStyles.fs_little,
                                UtilityStyles.fw_700,
                            ]}
                        />
                        <SVG
                            name={"defaultprofile"}
                            width={moderateScale(42)}
                            height={moderateScale(42)}
                        />
                    </View>

                    <ScrollView style={ChattingStyle.ChatContainer} ref={scrollRef}>
                        {messages.map((message, index) => (
                            <ChatBubble
                                key={index}
                                isOwnMessage={message.isOwnMessage}
                                bubbleColor={message.isOwnMessage ? "#006FFD" : "#FFFFFF"}
                                tailColor={message.isOwnMessage ? "#006FFD" : "#FFFFFF"}
                                withTail={true}
                            >
                                <BasicText
                                    stringKey={message.content}
                                    style={[
                                        message.isOwnMessage ? UtilityStyles.fc_white : UtilityStyles.fc_black,
                                        UtilityStyles.fs_little,
                                        UtilityStyles.fw_500,
                                    ]}
                                />
                            </ChatBubble>
                        ))}
                    </ScrollView>

                    <View style={ChattingStyle.InputContainer}>
                        <BasicInput
                            style={[
                                ChattingStyle.TextInput,
                                UtilityStyles.fc_black,
                                UtilityStyles.fw_500,
                            ]}
                            placeholderKey="chatting_input"
                            placeholderTextColor="#C5C6CC"
                            value={inputText}
                            onChangeText={setInputText}
                        />
                        <TouchableOpacity
                            style={ChattingStyle.SendButton}
                            onPress={() => handleSendMessage(true)}
                        >
                            <SVG
                                name={"send"}
                                fill={"#FFFFFF"}
                                width={moderateScale(12)}
                                height={moderateScale(12)}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default Chatting;
