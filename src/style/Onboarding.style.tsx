import { StyleSheet } from 'react-native';
import {moderateScale} from "../util/ScreenScaler.tsx";

export default StyleSheet.create({
    TopContainer: {
        width: "100%",
        flex: 6.5,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor: "#EFFF97",
        padding : moderateScale(70)
    },
    BottomContainer: {
        width: "100%",
        flex: 3.5,
        backgroundColor: "#FFFFFF",
        padding: moderateScale(24),
        display:"flex",
        flexDirection:"column",
        justifyContent : "space-between"
    },
    OnboardingSVG: {
        width: "100%",
        height: "100%",
    },
    NextBtton: {
        width : "100%",
        height: moderateScale(45)
    },
    ProgressContainer: {
        flexDirection : "row",
        width:"100%",
        height:moderateScale(10)
    }
});