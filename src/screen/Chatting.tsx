import React, {useRef} from 'react';
import {SafeAreaView, View, StyleSheet, Text, Alert, Button} from 'react-native';
import ChattingStyle from "../style/Chatting.style.tsx";
import Unity, {InterfaceData} from "../component/Unity.tsx";
import {Svg} from "react-native-svg";
import SVG from "../component/SVG.tsx";
import {moderateScale} from "../util/ScreenScaler.tsx";
import BasicText from "../component/BasicText.tsx";
import UtilityStyles from "../style/UtilityStyles.tsx";
import ChatBubble from "react-native-chat-bubble";
import stylesheet from "../style/stylesheet.tsx";

const Chatting = ({navigation}: any) => {

    const obj = { "emotionType": 5 };
    const jsonString = JSON.stringify(obj);
    
    const sendData:InterfaceData ={
            name:"N2U_NTY_ExpressEmotion",
            data:jsonString
    }

    const sendToUnityRef = useRef<(data: InterfaceData) => void>();

    const handleSendMessage = () => {
        if (sendToUnityRef.current) {
            sendToUnityRef.current(sendData);
        } else {
            console.warn("Unity send function is not ready");
        }
    };

    //<Unity style={ChattingStyle.UnityContainer} onSendMessage={(sendToUnity) => { sendToUnityRef.current = sendToUnity;}}/>
    
    return (
        <SafeAreaView style={[ChattingStyle.MainContainer,stylesheet.AndroidSafeArea]}>
            
            <View style={ChattingStyle.ContentContainer}>
                <View style={ChattingStyle.TitleContainer}>
                    <SVG name={"next"} style={UtilityStyles.flipX} fill={"#006FFD"} width={moderateScale(20)} height={moderateScale(20)}/>
                    <BasicText stringKey={"심리전문가 이은성"} style={[UtilityStyles.fc_black,UtilityStyles.fs_little,UtilityStyles.fw_700]}/>
                    <SVG name={"defaultprofile"} width={moderateScale(42)} height={moderateScale(42)}/>
                </View>
                <View style={styles.container}>
                    <ChatBubble
                        isOwnMessage={true}
                        bubbleColor='#1084ff'
                        tailColor='#1084ff'
                        withTail={true}
                    >
                        <BasicText stringKey={"심리sㄴㅇㄹㅇㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹ아너러ㅏㄴ오러ㅏㅘㅓㅘㅓasa전문가 이은성"} style={[UtilityStyles.fc_black,UtilityStyles.fs_little,UtilityStyles.fw_700]}/>
                    </ChatBubble>
                    <Button title="Send Message to Unity" onPress={handleSendMessage} />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop:100,
        flex: 1,
        paddingHorizontal:10
    },
    chatBubble: {
        padding: 10,
    },
    text: {
        color: 'black',
    },
    textOwn: {
        color: 'white',
    },
});
export default Chatting;
