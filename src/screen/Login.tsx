import {View, Alert} from "react-native";
import React, {useState} from "react";
import LoginStyle from "../style/Login.style.tsx";
import BasicText from "../component/BasicText.tsx";
import BasicInput from "../component/BasicInput.tsx";
import BasicButton from "../component/BasicButton.tsx";
import TextButton from "../component/TextButton.tsx";
import Divider from "../component/Divider.tsx";
import SVGButton from "../component/SVGButton.tsx";
import UtilityStyles from "../style/UtilityStyles.tsx";
import OnboardingStyle from "../style/Onboarding.style.tsx";
import Unity from "../component/Unity.tsx";
import {loginUser, registerUser} from "../api";
import {LoginRequest, RegisterRequest} from "../CommonInterface.ts";
import {useUserState} from "../store/UserStore.ts";

const Login = ({navigation}: any) => {

    const login = {
        header: "login_title",
        email: "login_email",
        password: "login_password",
        forgetPW: "login_forget_pw",
        submit: "login_button",
        isUser: "login_isUser",
        register: "login_regist",
        other: "login_other"
    }
    const userState = useUserState();
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isCanNext, setCanNext] = useState(false);
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    
    const handleLoginUser = async (email: string, password: string): Promise<void> => {
        const loginData: LoginRequest = { email, password };

        try {
            const response = await loginUser(loginData);
            userState.setName(response.username);
            navigation.replace("MainTabs");
        } catch (error) {
            console.error("로그인 실패:", error);
            throw error;
        }
    };

    
    const onChangeEmail = (text: string) => {
        setEmail(text);
        setCanNext(email.length > 0 && password.length > 0);
    };

    const onChangePassWd = (text: string) => {
        setPassWord(text);
        setCanNext(email.length > 0 && password.length > 0);
    };

    return (
        <View style={LoginStyle.MainContainer}>
            <View style={LoginStyle.TopContainer}>
                <Unity style={LoginStyle.UnityContainer}/>
            </View>
            <View style={LoginStyle.BottomContainer}>

                <View style={LoginStyle.main}>
                    {/* 타이틀 부분 */}
                    <View style={LoginStyle.LoginTitle}>
                        <BasicText stringKey={login.header} style={[LoginStyle.titleText, UtilityStyles.fc_black]}/>
                    </View>

                    {/* 이메일, 비번, 로그인 부분 */}
                    <View style={LoginStyle.LoginMain}>

                        {/* 이메일, 비밀번호 작성 */}
                        <View>
                            <BasicInput
                                placeholderKey={login.email}
                                style={[LoginStyle.input, UtilityStyles.fc_black]}
                                onChangeText={onChangeEmail}
                                value={email}
                                keyboardType="email-address"
                                placeholderTextColor={'gray'}
                            />
                            <View style={LoginStyle.inputContainer}>
                                <BasicInput
                                    placeholderKey={login.password}
                                    style={[LoginStyle.passwordInput, UtilityStyles.fc_black]}
                                    onChangeText={onChangePassWd}
                                    value={password}
                                    secureTextEntry={true}
                                    keyboardType="default"
                                    placeholderTextColor={'gray'}
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
                                onPress={()=>{}}
                            />

                        </View>
                        {/* 로그인버튼 */}
                        <View>
                            <BasicButton
                                buttonStyle={LoginStyle.submit}
                                textStyle={[UtilityStyles.fs_little, UtilityStyles.fw_500]}
                                stringKey={login.submit}
                                onPress={()=>{
                                    handleLoginUser(email,password);
                                }}
                                disabled={!isCanNext}
                                enabledColor='#006FFD/#FFFFFF/#D3D3D3'
                                disabledColor="#99CCFD/#FFFFFF/#D3D3D3"
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
                                onPress={() => {
                                    navigation.replace('SignUp');
                                }}
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
                                    onPress={() => {
                                    }}
                                    disabled={false}
                                />

                                <SVGButton
                                    style={LoginStyle.apple}
                                    textSize={12}
                                    svgName="apple"
                                    svgSize={12}
                                    onPress={() => {
                                    }}
                                    disabled={false}
                                />

                                <SVGButton
                                    style={LoginStyle.facebook}
                                    textSize={12}
                                    svgName="facebook"
                                    svgSize={12}
                                    onPress={() => {
                                    }}
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