import { StyleSheet } from 'react-native';
import {moderateScale} from "../util/ScreenScaler.tsx";

export default StyleSheet.create({

    MainContainer:{
        width:"100%", 
        height:"100%", 
        flexDirection:"column"
    },
   
    UnityContainer:{
        flex:1
    },
    speech:{
        position: "absolute",
        top: "10%",
        left: "5%", 
        zIndex: moderateScale(10),
    },
    container: {
        alignItems: "center",
    },
    bubble: {
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        paddingHorizontal: moderateScale(24),
        paddingVertical:    moderateScale(14),
        borderRadius: moderateScale(22),
        width: moderateScale(274),
        height:moderateScale(136),
      },
      triangle: {
        width: moderateScale(0),
        height: moderateScale(0),
        marginRight:moderateScale(100),
        borderLeftWidth: moderateScale(30),
        borderRightWidth: moderateScale(10),
        borderTopWidth: moderateScale(20),
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderTopColor: "rgba(255, 255, 255, 0.8)", // 삼각형 투명도 80%
      },
      
    greeting:{
        fontSize:moderateScale(20),
        fontWeight:"800",
        zIndex: moderateScale(10),
    },
    input:{
        fontSize:moderateScale(14),
        fontWeight:"800",
        zIndex: moderateScale(10),
        height: moderateScale(34),
        borderColor:'#C5C6CC',
        borderWidth: moderateScale(1),
        padding: moderateScale(10),
        borderRadius: moderateScale(12),
        width:'100%',
    },
    submitView:{
        width: "100%", 
        height: moderateScale(27)
    },
    submit:{
        width:'100%',
        height:'100%',
        borderWidth:1,
        borderColor:"black"
    },

    speechForNext:{
        position: "absolute",
        top: "10%",
        left: "5%",
        zIndex: moderateScale(10),
    },
    bubbleForNext:{
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)", // 투명도 80%
        paddingHorizontal: moderateScale(24),
        borderRadius: moderateScale(22),          // 둥근 모서리
        width: moderateScale(292),             // 최대 너비
        height:moderateScale(355),
    },
    select:{
        marginBottom:moderateScale(8),
        width:moderateScale(267),
        height:moderateScale(39),
        borderColor:'#C5C6CC',
        padding: moderateScale(10),
        borderRadius: moderateScale(12),
        borderWidth:moderateScale(1)
    },
    problem:{
        fontSize:moderateScale(20),
        fontWeight:"800",
        zIndex: moderateScale(10),
        paddingVertical:moderateScale(24),
    },
    selectConfirm:{
        width:'100%',
        height:moderateScale(27),
        padding:0,
        borderRadius: moderateScale(12),
        
    }
});