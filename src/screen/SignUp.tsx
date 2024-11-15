import {View} from "react-native";
import React, {useEffect, useState} from "react";
import Unity from "../component/Unity.tsx";
import SignUpStyle from "../style/SignUp.style.tsx";
import {moderateScale} from "../util/ScreenScaler.tsx";
import BasicText from "../component/BasicText.tsx";
import BasicInput from "../component/BasicInput.tsx";
import BasicButton from "../component/BasicButton.tsx";
import UtilityStyles from "../style/UtilityStyles.tsx";
import CheckboxButton from "../component/CheckboxButton.tsx";

const SignUp = ({navigation}: any) => {
    const [nickname, setNickName] = useState('');
    const [nextPage, setNextPage] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    
    const signUp = {
        greeting: "signup_greeting",
        typingNickName: "signup_typing",
        confirm: "signup_confirm",
        problem: "signup_problem",
        select1: "signup_select1",
        select2: "signup_select2",
        select3: "signup_select3",
        select4: "signup_select4",
        select5: "signup_select5",
        selectConfirm: 'signup_selectconfirm',
    }

    const options = [
        signUp.select1,
        signUp.select2,
        signUp.select3,
        signUp.select4,
        signUp.select5,
    ];
    
    const onChangeNickname = (text: string) => {
        setNickName(text);
    };

    const handleNextPage = () => {
        navigation.replace("MainTabs");
    };
    const handleOptionSelect = (option: string) => {
        setSelectedOptions((prev) =>
            prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
        );
    };

    return (
        <View style={SignUpStyle.MainContainer}>
            <Unity style={SignUpStyle.UnityContainer}/>

            {nextPage ? (
                <View style={SignUpStyle.speechForNext}>
                    <View style={SignUpStyle.container}>
                        <View style={SignUpStyle.bubbleForNext}>

                            <BasicText
                                stringKey={signUp.problem}
                                style={[SignUpStyle.problem, UtilityStyles.fc_black]}/>

                            {options.map((option, index) => (
                                <CheckboxButton
                                    key={index}
                                    buttonStyle={SignUpStyle.select}
                                    textStyle={[UtilityStyles.fs_little, UtilityStyles.fw_400]}
                                    stringKey={option}
                                    onChange={() => handleOptionSelect(option)}
                                    checked={selectedOptions.includes(option)}
                                    enabledColor="#EAF2FF/#000000/#C5C6CC"
                                    disabledColor="#FFFFFF/#000000/#C5C6CC"
                                    iconName="rightButton"
                                    iconSize={moderateScale(12)}
                                />
                            ))}
                            
                            <View style={SignUpStyle.submitView}>
                                <BasicButton
                                    buttonStyle={SignUpStyle.submit}
                                    textStyle={[UtilityStyles.fs_tiny, UtilityStyles.fw_700]}
                                    stringKey={signUp.selectConfirm}
                                    onPress={handleNextPage}
                                    disabled={selectedOptions.length==0}
                                    enabledColor='#006FFD/#FFFFFF/'
                                />
                            </View>
                        </View>
                        <View style={SignUpStyle.triangle}/>
                    </View>
                </View>
            ) : (
                <View style={SignUpStyle.speech}>
                    <View style={SignUpStyle.container}>
                        <View style={SignUpStyle.bubble}>
                            <BasicText
                                stringKey={signUp.greeting}
                                style={[SignUpStyle.greeting, UtilityStyles.fc_black]}/>
                            <BasicInput
                                placeholderKey={signUp.typingNickName}
                                style={[SignUpStyle.input, UtilityStyles.fc_black]}
                                onChangeText={onChangeNickname}
                                value={nickname}
                                keyboardType="default"
                                placeholderTextColor={'gray'}
                            />
                            <View style={SignUpStyle.submitView}>
                                <BasicButton
                                    buttonStyle={SignUpStyle.submit}
                                    textStyle={[UtilityStyles.fs_tiny, UtilityStyles.fw_700]}
                                    stringKey={signUp.confirm}
                                    onPress={()=>{setNextPage(true)}}
                                    disabled={!selectedOptions}
                                    enabledColor='#006FFD/#FFFFFF/#D3D3D3'
                                    disabledColor="#99CCFD/#FFFFFF/#D3D3D3"
                                />
                            </View>
                        </View>
                        <View style={SignUpStyle.triangle}/>
                    </View>
                </View>
            )}

        </View>
    );

};

export default SignUp;