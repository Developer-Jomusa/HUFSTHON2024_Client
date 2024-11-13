import {View} from "react-native";
import React,{useEffect, useState} from "react";
import Unity from "../component/Unity.tsx";
import SignUpStyle from "../style/SignUp.style.tsx";
import SVG from "../component/SVG.tsx";
import { moderateScale } from "../util/ScreenScaler.tsx";
import Speech from "../component/Speech.tsx";
import BasicText from "../component/BasicText.tsx";
import BasicInput from "../component/BasicInput.tsx";
import BasicButton from "../component/BasicButton.tsx";
import TextButton from "../component/TextButton.tsx";
const SignUp = ({navigation}: any) => {
    const [nickname, setNickName] = useState('');
    const [isCanNext, setCanNext] = useState(false);
    const [nextPage, setNextPage] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [isSelectConfirm, setIsSelectConfirm]   = useState(false);
    const rightButton = "rightButton";
    const signUp = {
        greeting: "signup_greeting",
        typingNickName:"signup_typing",
        confirm: "signup_confirm",
        problem:"signup_problem",
        select1:"signup_select1",
        select2:"signup_select2",
        select3:"signup_select3",
        select4:"signup_select4",
        select5:"signup_select5",
        selectConfirm:'signup_selectconfirm',
    }
    useEffect(() => {
        setIsSelectConfirm(selectedOptions.length > 0); // 선택된 옵션이 하나 이상인 경우 true
    }, [selectedOptions]);
    
    const onChangeNickname=(text: string)=>{
        setNickName(text);
        if(text.trim()!==''){

            
            setCanNext(true);
            
        }else{
            setCanNext(false);
        }
    };

    const handleNext = async () => {
        
        setNextPage(true);

    };
    const handleNextPage=()=>{
        navigation.navigate("Home");
    };
    const handleOptionSelect = (option: string) => {
        setSelectedOptions((prev) =>
          prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
        );
        

      };
      
    return (
        <View style={SignUpStyle.MainContainer}>
            <Unity style={SignUpStyle.UnityContainer}/>

            {nextPage? (
                <View style={SignUpStyle.speechForNext}>
                <View style={SignUpStyle.container}>
                    <View style={SignUpStyle.bubbleForNext}>
                        
                    <BasicText 
                        stringKey={signUp.problem} 
                        style={SignUpStyle.problem}/>

                    <View>
                       {/* 옵션 버튼 */}
                        {[
                          signUp.select1,
                          signUp.select2,
                          signUp.select3,
                          signUp.select4,
                          signUp.select5,
                        ].map((option, index) => (
                          <BasicButton
                            key={index}
                            style={[
                                SignUpStyle.select,
                                selectedOptions.includes(option) && {
                                  backgroundColor: "#EAF2FF", // 선택된 버튼의 배경색 변경
                                  borderWidth:moderateScale(0),
                                },
                            ]}
                            text={option}
                            textSize={14}
                            textWeight={"400"}
                            justifyContent="space-between"
                            onPress={() => handleOptionSelect(option)} // 클릭 시 상태 업데이트
                            disabled={false}
                            enabledColor={
                                selectedOptions.includes(option) 
                                ? "#EAF2FF/#1F2024/"
                                : "#FFFFFF/#1F2024/"
                            }
                          >
                            {/* 체크 표시 */}
                            {selectedOptions.includes(option) && (
                               <SVG
                               name={rightButton}
                               width={moderateScale(12)}
                               height={moderateScale(12)}
    
                           />
                            )}
                          </BasicButton>
                        ))}

                         
                    </View>
                    <BasicButton
                            style={SignUpStyle.selectConfirm}
                            text={signUp.selectConfirm}
                            textSize={12}
                            textWeight={'700'}
                            onPress={handleNextPage}
                            disabled={!isSelectConfirm}
                            enabledColor='#006FFD/#FFFFFF/'

                        />
                    </View>
                    <View style={SignUpStyle.triangle} />
                </View>
            </View>
            ):(
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
                    />
                    </View>
                    <View style={SignUpStyle.triangle} />
                </View>
            </View>
            )}
            
        </View>
    );
    
};

export default SignUp;