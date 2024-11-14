import {moderateScale} from "../util/ScreenScaler.tsx";
import {StyleSheet} from 'react-native';


const stylesheet = StyleSheet.create({
    emptyView1: {
        height: moderateScale(55)
    },
    emptyView2: {
        height: moderateScale(0)
    },
    emptyView3: {
        height: moderateScale(0)
    },
    emptyView4: {
        height: moderateScale(0)
    },
    emptyView5: {
        width: moderateScale(0)
    },
    emptyView6: {
        height: moderateScale(0)
    },
    emptyView7: {
        height: moderateScale(0)
    },
    LottieContainer:{
        width:"100%",
        height:"100%"
    },
    MainContainer:{
        display: "flex",
        flexDirection : "column",
        width:"100%",
        height:"100%"
    },
    basicRound: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Number.MAX_SAFE_INTEGER,
    },
    rowAndCentered: {
        gap: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
    },
    JuaFont:{
        fontFamily: "Jua-Regular",
    }
});

export default stylesheet;
