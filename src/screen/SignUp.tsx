import {View,Alert,Text} from "react-native";
import React, {useState, useRef, useEffect} from "react";
import Unity, {UnityPlayerRefs} from "../component/Unity.tsx";
import HomeStyle from "../style/Home.style.tsx";
import LoginStyle from "../style/Login.style.tsx";
import JuaText from "../component/JuaText.tsx";
import BasicText from "../component/BasicText.tsx";
import { useTranslation } from 'react-i18next';
import BasicInput from "../component/BasicInput.tsx";
import BasicButton from "../component/BasicButton.tsx";
import TextButton from "../component/TextButton.tsx";
import Divider from "../component/Divider.tsx";
import SVGButton from "../component/SVGButton.tsx";
import { useUnity } from '../component/UnityContext.tsx';

const SignUp = ({navigation}: any) => {

    // const unityPlayerRef = useRef<UnityPlayerRefs>(null);
    const { unityPlayerRef } = useUnity();

    const login = {
        header: "login_title",
        email: "login_email",
        password:"login_password",
        forgetPW: "login_forget_pw",
        submit: "login_button",
        isUser:"login_isUser",
        register:"login_regist",
        other:"login_other"
    }

    const [isUnityVisible, setIsUnityVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    
    useEffect(() => {
        try {
            setTimeout(() => {
                setIsUnityVisible(true);
            }, 2000);
        } catch (error) {
            console.error("Unity Initialization Error:", error);
            Alert.alert("Error", "Failed to initialize Unity");
        }
    }, []);

    useEffect(() => {
        if (unityPlayerRef.current) {
            console.log("Unity Player Initialized",unityPlayerRef.current);
        } else {
            console.log("Unity Player Failed to Initialize");
        }
    }, [isUnityVisible]);
    
    const handleNext = async () => {
        // 입력값 검증 (필수)
        if (!email || !password) {
            Alert.alert("Email or password is missing");
            return;
        }else{
            
        }

    };
    
    const handleForgetPW =()=>{

    };
    
    const onChangeEmail = (text: string) => {
        console.log("Email:", text); // 입력 값 디버깅
        setEmail(text); // 상태 업데이트
    };
    
    const onChangePassWd = (text: string) => {
        console.log("Password:", text); // 입력 값 디버깅
        setPassWord(text); // 상태 업데이트
    };
    
    return (
        <View style={HomeStyle.MainContainer}>
            {isUnityVisible ? (
                <Unity ref={unityPlayerRef} style={HomeStyle.TopContainer} />
            ) : (
                <BasicText stringKey={"Loading Unity..."} style={{ fontSize: 20 }} />
            )}
            <View style={HomeStyle.BottomContainer}>
                {/* 나머지 UI */}
            </View>
        </View>
    );
    
};

export default SignUp;