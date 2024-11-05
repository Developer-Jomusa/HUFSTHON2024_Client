import {useEffect} from "react";
import LottieView from "lottie-react-native";
import styles from "../style/stylesheet.tsx";

const Splash = ({navigation}: any) => {

        const jsonPath = '../../asset/lottie/Splash.json';

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Onboarding');
        },2000);
    }, []);

    return (
        <LottieView
            source={require(jsonPath)}
            autoPlay
            speed={0.75}
            loop={false}
            resizeMode='cover'
            style={styles.LottieContainer}/>
    );
};

export default Splash;