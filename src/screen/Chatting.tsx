import React, { useRef, useState } from "react";
import {
    SafeAreaView,
    View,
    StyleSheet,
    TextInput,
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
import stylesheet from "../style/stylesheet.tsx";
import SVGButton from "../component/SVGButton.tsx";
import BasicInput from "../component/BasicInput.tsx";

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
    const scrollRef = useRef<ScrollView>(null)
    
    const addMessage = (content: string, isOwnMessage: boolean) => {
        setMessages((prev) => [...prev, { content, isOwnMessage }]);
    };

    const handleSendMessage = (isOwnMessage: boolean) => {
        if (inputText.trim()) {
            const emotionMatch = inputText.match(/^emotion:(\w+)$/);
            if (emotionMatch) {
                const emotionName = emotionMatch[1];
                const emotionValue = Emotion[emotionName as keyof typeof Emotion];
                if (emotionValue !== undefined) {
                    playEmotion(emotionValue);
                } else {
                    console.warn(`Unknown emotion: ${emotionName}`);
                }
                addMessage(inputText, isOwnMessage);
                scrollRef?.current?.scrollToEnd({animated:true});
            } else {
                addMessage(inputText, isOwnMessage);
                scrollRef?.current?.scrollToEnd({animated:true});
            }

            setInputText("");
        }
    };

    
    const playEmotion = (emotion: Emotion)=>{

        const sendData: InterfaceData = {
            name: "N2U_NTY_ExpressEmotion",
            data: JSON.stringify({ emotionType: emotion }),
        };
        if (sendToUnityRef.current) {
            sendToUnityRef.current(sendData);
        }
    }


    return (
        <SafeAreaView style={[ChattingStyle.MainContainer, stylesheet.AndroidSafeArea]}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                style={ChattingStyle.MainContainer}
            >
                <Unity style={ChattingStyle.UnityContainer} onSendMessage={(sendToUnity) => { sendToUnityRef.current = sendToUnity;}}/>                
                
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

                    <ScrollView
                        style={ChattingStyle.ChatContainer}
                        ref={scrollRef}
                    >
                        {messages.map((message, index) => (
                            <ChatBubble
                                key={index}
                                isOwnMessage={message.isOwnMessage}
                                bubbleColor={
                                    message.isOwnMessage ? "#006FFD" : "#FFFFFF"
                                }
                                tailColor={
                                    message.isOwnMessage ? "#006FFD" : "#FFFFFF"
                                }
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
                            onPress={()=>{
                                //임시 처리 (TODO:: 웹소켓)
                                const isOwnMessage = Math.random() < 0.5;
                                handleSendMessage(isOwnMessage);
                            }}
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
