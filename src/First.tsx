import {View} from "react-native";
import React, {useRef} from "react";
import Unity, {UnityPlayerRefs} from "./util/Unity.tsx";

const First = ({navigation}: any) => {
    
    const unityPlayerRef = useRef<UnityPlayerRefs>(null);    
    
    return(
        <View style={{width: "100%", height: "100%"}}>
            <Unity ref={unityPlayerRef} style={{flex:1}}/>
        </View>
    );
}

export default First;