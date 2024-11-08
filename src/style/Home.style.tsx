import { StyleSheet } from 'react-native';
import {moderateScale} from "../util/ScreenScaler.tsx";

export default StyleSheet.create({
    MainContainer:{
        width:"100%", 
        height:"100%", 
        flexDirection:"column"
    },
    TopContainer: {
        width: "100%",
        flex:0.4
    },
    BottomContainer: {
        width: "100%",
        flex:0.6
    }
});