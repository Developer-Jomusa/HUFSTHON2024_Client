import {StyleSheet} from 'react-native';
import {moderateScale} from "../util/ScreenScaler.tsx";

export default StyleSheet.create({
    MainContainer: {
        width: "100%",
        height: "100%",
    },
    TitleContainer: {
        width: "100%",
        height: moderateScale(56),
        justifyContent: "center",
        alignItems: "center"
    }, 
    ProfileImageContainer: {
        width: "100%",
        height: moderateScale(133),
        justifyContent: "center",
        alignItems: "center",
        gap:moderateScale(16)
    },
    ProfileImage: {
        width:moderateScale(82),
        height:moderateScale(82),
        backgroundColor: "#EAF2FF",
        borderRadius: moderateScale(32),
        justifyContent: "center",
        alignItems: "center",
    },
    ContentsContainer: {
        flex:1,
        alignItems: "center",
        justifyContent: "flex-start",
    }
});