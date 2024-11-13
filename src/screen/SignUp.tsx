import {View} from "react-native";
import React,{useState} from "react";
import Unity from "../component/Unity.tsx";
import SignUpStyle from "../style/SignUp.style.tsx";
import SVG from "../component/SVG.tsx";
import { moderateScale } from "../util/ScreenScaler.tsx";
import Speech from "../component/Speech.tsx";
import BasicText from "../component/BasicText.tsx";
import BasicInput from "../component/BasicInput.tsx";
import BasicButton from "../component/BasicButton.tsx";
const SignUp = ({navigation}: any) => {
    const [nickname, setNickName] = useState('');
    const [isCanNext, setCanNext] = useState(false);
    const signUp = {
        greeting: "signup_greeting",
        typingNickName:"signup_typing",
        confirm: "signup_confirm"
    }
    const onChangeNickname=(text: string)=>{
        setNickName(text);
    };
    const handleNext = async () => {
        // navigation.navigate("SignUp");
    };
    return (
        <View style={SignUpStyle.MainContainer}>
            <Unity style={SignUpStyle.UnityContainer}/>

            <View style={SignUpStyle.speech}>
                <View style={SignUpStyle.container}>
                    <View style={SignUpStyle.bubble}>
                    <BasicText 
                        stringKey={signUp.greeting} 
                        style={SignUpStyle.greeting}/>
                    <BasicInput
                        placeholderKey={signUp.typingNickName}
                        style={SignUpStyle.input}
                        onChangeText={onChangeNickname}
                        value={nickname}
                        keyboardType="default"
                    />
                    <BasicButton
                        style={SignUpStyle.submit}
                        text={signUp.confirm}
                        textSize={12}
                        textWeight={'700'}
                        onPress={handleNext}
                        disabled={!isCanNext}
                        enabledColor='#006FFD/#FFFFFF/'
                        disabledColor={'#3399FF/#FFFFFF/'}
                    />
                    </View>
                    <View style={SignUpStyle.triangle} />
                </View>
           
               
            </View>
            
        </View>
    );
    
};

export default SignUp;