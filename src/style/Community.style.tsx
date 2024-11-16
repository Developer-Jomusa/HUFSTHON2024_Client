import { StyleSheet } from 'react-native';
import {moderateScale} from "../util/ScreenScaler.tsx";

export default StyleSheet.create({
    TitleContainer:{
        width:"100%",
        justifyContent: "center",
        flexDirection:'row',
        gap :moderateScale(10)
    },
    ContentsContainer:{
        flex : 1,
        padding: moderateScale(20)
    },
    TitleButton:{
        width : moderateScale(99),
        height: moderateScale(29)
    },
    TitleButtonText:{
        fontSize : moderateScale(14),
        fontWeight : "700"
    }
});