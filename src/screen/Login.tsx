﻿import {View,Alert} from "react-native";
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
const Login = ({navigation}: any) => {

    const unityPlayerRef = useRef<UnityPlayerRefs>(null);

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
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    

    const handleNext = async () => {
        // 입력값 검증 (필수)
        if (!email || !password) {
            Alert.alert("Email or password is missing");
            return;
        }else{
            navigation.navigate("SignUp");
        }
    
        // try {
        //     const response = await fetch("https://api.example.com/login", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json", // JSON 데이터로 전송
        //         },
        //         body: JSON.stringify({
        //             email: email,      // 입력한 이메일
        //             password: password // 입력한 비밀번호
        //         }),
        //     });
    
        //     const data = await response.json(); // 서버 응답 데이터 파싱
    
        //     if (response.ok) {
        //         console.log("Login successful:", data);
        //         // 로그인 성공 시 추가 작업 (예: 화면 전환)
        //         navigation.navigate("Home"); // 홈 화면으로 이동
        //     } else {
        //         console.error("Login failed:", data.message || "Unknown error");
        //         // 실패 시 사용자에게 메시지 표시
        //         Alert.alert(data.message || "Login failed. Please try again.");
        //     }
        // } catch (error) {
        //     console.error("Error during login:", error);
        //     Alert.alert("An error occurred. Please try again later.");
        // }
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
            <Unity ref={unityPlayerRef} style={HomeStyle.TopContainer}/>
            <View>
                
            </View>
            <View style={HomeStyle.BottomContainer}>

               <View style={{padding:15}}>
                    {/* 타이틀 부분 */}
                     <View style={LoginStyle.LoginTitle}> 
                        {/* <JuaText stringKey={"HUFSTHON에 어서오세요!"} style={{fontSize: 30,fontWeight:"700"}}/> */}
                        <BasicText stringKey={login.header} style={{fontSize: 30,fontWeight:"800"}}/>
                    </View>

                    {/* 이메일, 비번, 로그인 부분 */}
                    <View>

                        {/* 이메일, 비밀번호 작성 */}
                        <View >
                            <BasicInput
                                placeholderKey={login.email}
                                style={LoginStyle.input}
                                onChangeText={onChangeEmail}
                                value={email}
                                keyboardType="email-address"
                            />
                           <View style={LoginStyle.inputContainer}>
                                <BasicInput
                                    placeholderKey={login.password}
                                    style={LoginStyle.passwordInput}
                                    onChangeText={onChangePassWd}
                                    value={password}
                                    secureTextEntry={true} // 비밀번호 숨김
                                    keyboardType="default"
                                />
                                <SVGButton
                                     style={LoginStyle.canSee}
                                     textSize={12}
                                     svgName="canSee"
                                     svgSize={16}
                                     onPress={togglePasswordVisibility}
                                     disabled={false}
                                />
                           </View>
                        </View>
                        {/* 비밀번호를 잊으셨나요? */}
                        <View style={LoginStyle.forgetParent}>
                            <TextButton 
                                stringKey={login.forgetPW} 
                                style={LoginStyle.forget}
                                onPress={handleForgetPW}
                            />

                        </View>
                        {/* 로그인버튼 */}
                        <View >
                            <BasicButton
                                style={LoginStyle.submit}
                                text={login.submit}
                                textSize={12}
                                textWeight={'700'}
                                onPress={handleNext}
                                disabled={false}
                                enabledColor='#006FFD/#FFFFFF/#D3D3D3'
                                disabledColor={''}
                            />

                        </View>
                        {/* 회원이 아니신가요? 가입하기 */}
                        <View style={LoginStyle.signUp}>
                            <BasicText
                                stringKey={login.isUser} 
                                style={LoginStyle.isUser}
                         
                            />
                            <TextButton 
                            stringKey={login.register} 
                            style={LoginStyle.register}
                            onPress={handleForgetPW}
                            />
                        </View>

                        <Divider></Divider>

                        <View style={LoginStyle.others}>
                            <BasicText
                                stringKey={login.other} 
                                style={LoginStyle.isUser}

                            />

                            {/* 소셜 로그인 버튼 */}
                            <View style={LoginStyle.svgs}>
                                <SVGButton
                                     style={LoginStyle.google}
                                     textSize={12}
                                     svgName="google"
                                     svgSize={12}
                                     onPress={handleNext}
                                     disabled={false}
                                />

                                <SVGButton
                                     style={LoginStyle.apple}
                                     textSize={12}
                                     svgName="apple"
                                     svgSize={12}
                                     onPress={handleNext}
                                     disabled={false}
                                />

                                <SVGButton
                                     style={LoginStyle.facebook}
                                     textSize={12}
                                     svgName="facebook"
                                     svgSize={12}
                                     onPress={handleNext}
                                     disabled={false}
                                />
                            </View>
                        </View>
                       
                    </View>
               </View>
                
            </View>
        </View>
    );
};

export default Login;