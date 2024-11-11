import { View, Animated } from "react-native";
import React, { useState, useRef } from "react";
import styles from "../style/stylesheet.tsx";
import OnboardingStyle from "../style/Onboarding.style.tsx";
import LottieView from "lottie-react-native";
import u from "../style/UtilityStyles.tsx";
import ProgressDot from "../component/ProgressDot.tsx";
import BasicText from "../component/BasicText.tsx";
import BasicButton from "../component/BasicButton.tsx";

const Onboarding = ({ navigation }: any) => {
    const [step, setStep] = useState(0);
    const fadeAnim = useRef(new Animated.Value(1)).current;

    const onboardingData = [
        { animation: require('../../asset/lottie/Onboarding1.json'), title: "onboarding_title1", subtitle: "onboarding_sub1" },
        { animation: require('../../asset/lottie/Onboarding1.json'), title: "onboarding_title2", subtitle: "onboarding_sub2" },
        { animation: require('../../asset/lottie/Onboarding1.json'), title: "onboarding_title3", subtitle: "onboarding_sub3" },
    ];

    const handleNext = () => {
        if (step < onboardingData.length - 1) {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start(() => {
                setStep(step + 1);
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }).start();
            });
        } else {
            navigation.navigate("Login");
        }
    };

    return (
        <View style={styles.MainContainer}>
            <View style={OnboardingStyle.TopContainer}>
                <LottieView
                    source={onboardingData[step].animation}
                    autoPlay
                    speed={1}
                    loop={true}
                    resizeMode='cover'
                    style={OnboardingStyle.OnboardingSVG}/>
            </View>
            <View style={OnboardingStyle.BottomContainer}>
                <View style={OnboardingStyle.ProgressContainer}>
                    {onboardingData.map((_, index) => (
                        <ProgressDot key={index} active={index === step} />
                    ))}
                </View>
                <Animated.View style={{ opacity: fadeAnim }}>
                    <BasicText stringKey={onboardingData[step].title} style={[u.fc_black, u.fs_medium, u.fw_800]} />
                </Animated.View>

                <Animated.View style={{ opacity: fadeAnim }}>
                    <BasicText stringKey={onboardingData[step].subtitle} style={[u.fc_gray, u.fs_tiny, u.fw_600]} />
                </Animated.View>
                <BasicButton
                    style={OnboardingStyle.NextBtton}
                    text={'next'}
                    textSize={12}
                    textWeight={'700'}
                    onPress={handleNext}
                    disabled={false}
                    enabledColor='#006FFD/#FFFFFF/#D3D3D3'
                    disabledColor={''}
                />
            </View>
        </View>
    );
};

export default Onboarding;
