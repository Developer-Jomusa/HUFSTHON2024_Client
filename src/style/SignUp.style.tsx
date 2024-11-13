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
        // transform: [{ translateX: moderateScale(-50) }, { translateY:moderateScale(-50)  }],
        zIndex: moderateScale(10),
    },
    container: {
        alignItems: "center",
       
    },
    bubble: {
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)", // 투명도 80%
        paddingHorizontal: moderateScale(24),
        paddingVertical:    moderateScale(14),           // 텍스트 여백
        borderRadius: moderateScale(22),          // 둥근 모서리
        width: moderateScale(274),             // 최대 너비
        height:moderateScale(136),
        // shadowColor: "#000",       // 그림자 효과
        // shadowOffset: { width: moderateScale(0), height: moderateScale(2) },
        // shadowOpacity:moderateScale(0.3),
        // shadowRadius: moderateScale(3),
        // elevation: moderateScale(5),              // Android 그림자 효과
      },
      triangle: {
        width: moderateScale(0),
        height: moderateScale(0),
        marginRight:moderateScale(100),
        borderLeftWidth: moderateScale(10),
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
    submit:{
        backgroundColor:'#006FFD',
        height:moderateScale(27),
        width:'100%',
        borderRadius:moderateScale(12),
        margin:moderateScale(10)
    },

});