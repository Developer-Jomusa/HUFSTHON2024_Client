import React from 'react';
import {SafeAreaView} from 'react-native';
import ChattingStyle from "../style/Chatting.style.tsx";
import Unity from "../component/Unity.tsx";

const Chatting = ({navigation}: any) => {


    return (
        <SafeAreaView style={ChattingStyle.MainContainer}>
        <Unity style={ChattingStyle.UnityContainer}/>
        </SafeAreaView>
    );
};


export default Chatting;
