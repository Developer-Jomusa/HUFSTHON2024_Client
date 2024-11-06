import {View} from "react-native";
import {useRef} from "react";
import Unity, {UnityPlayerRefs} from "../component/Unity.tsx";

const Home = ({navigation}: any) => {

    const unityPlayerRef = useRef<UnityPlayerRefs>(null);

    return (
        <View style={{width:"100%", height:"100%"}}>
            <Unity ref={unityPlayerRef} style={{flex:1}}/>
        </View>
    );
};

export default Home;