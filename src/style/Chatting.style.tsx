import { StyleSheet } from 'react-native';
import {moderateScale} from "../util/ScreenScaler.tsx";

export default StyleSheet.create({
    MainContainer:{
        flex :1,
        position:"relative",
    }, 
    UnityContainer: {
        ...StyleSheet.absoluteFillObject,
    },
    ContentContainer: {
        flex: 1, 
    },
    TitleContainer: {
        height: moderateScale(56),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding:moderateScale(18)
    },

});

