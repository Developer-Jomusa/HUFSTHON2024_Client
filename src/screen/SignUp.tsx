import {View} from "react-native";
import React from "react";
import Unity from "../component/Unity.tsx";
import HomeStyle from "../style/Home.style.tsx";

const SignUp = ({navigation}: any) => {

    return (
        <View style={HomeStyle.MainContainer}>
            <Unity style={{flex:1}}/>
        </View>
    );
    
};

export default SignUp;