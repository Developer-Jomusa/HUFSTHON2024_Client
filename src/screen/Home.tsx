import {View} from "react-native";
import {useRef} from "react";
import Unity, {UnityPlayerRefs} from "../component/Unity.tsx";
import HomeStyle from "../style/Home.style.tsx";
import JuaText from "../component/JuaText.tsx";
import BasicText from "../component/BasicText.tsx";

const Home = ({navigation}: any) => {

    const unityPlayerRef = useRef<UnityPlayerRefs>(null);

    return (
        <View style={HomeStyle.MainContainer}>
            <Unity ref={unityPlayerRef} style={HomeStyle.TopContainer}/>
            <View style={HomeStyle.BottomContainer}>
                <JuaText stringKey={"HUFSTHON에 어서오세요!"} style={{fontSize: 30,fontWeight:"700"}}/>
                <BasicText stringKey={"HUFSTHON에 어서오세요!"} style={{fontSize: 30,fontWeight:"800"}}/>
            </View>
        </View>
    );
};

export default Home;