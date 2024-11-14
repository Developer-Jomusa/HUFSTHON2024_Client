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
        flex:1
    },
    BottomContainer: {
        width: "100%",
        height: moderateScale(500),
        justifyContent : "flex-start"
    },
    UnityContainer:{
        flex:1
    },
    LoginTitle:{
   
        justifyContent:'center',
        marginLeft:moderateScale(12),
        paddingTop:moderateScale(10),
        paddingBottom:moderateScale(10)
    //   alignItems:'center',
    },
    LoginMain:{
   
    },
    main:{
        padding: moderateScale(15),
    
    },
    titleText:{
        fontSize: moderateScale(28),
        fontWeight:"800",
    },
    input:{
        height: moderateScale(48),
        borderColor:'#C5C6CC',
        fontSize:moderateScale(14),
        marginLeft: moderateScale(12),
        marginRight: moderateScale(12),
        marginBottom:moderateScale(10),
        borderWidth: moderateScale(1),
        padding: moderateScale(10),
        borderRadius: moderateScale(10),
    },
    forgetParent:{
        flexDirection:'row',
        paddingBottom:moderateScale(5),
    },
    forget:{
      color:'#006FFD',
      fontSize: moderateScale(12),
      fontWeight:"800",
      marginLeft:moderateScale(5)
    },
    submit:{
        height:moderateScale(48),
        borderRadius:moderateScale(12),
        margin:moderateScale(10)
    },
    signUp:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:moderateScale(5),
        paddingBottom:moderateScale(10),
    },
    isUser:{
        fontSize: moderateScale(12),
        fontWeight:"600",
        color:'#71727A'

    },
    register:{
        fontSize: moderateScale(12),
        fontWeight:"600",
        color:'#006FFD',
    },
    others:{
        justifyContent:'center',
        alignItems:"center",
        paddingTop:moderateScale(15),
        paddingBottom:moderateScale(10),
    },
    other:{
        fontSize: moderateScale(12),
        fontWeight:"400",
        
        color:'#71727A'
    },
    social:{

    },
    google:{
        backgroundColor:'#ED3241',
        height:moderateScale(40),
        width:moderateScale(40),
        margin:moderateScale(5),
        borderRadius:moderateScale(100),
    },
    apple:{
        backgroundColor:'#1F2024',
        height:moderateScale(40),
        width:moderateScale(40),
        margin:moderateScale(5),
        borderRadius:moderateScale(100),
    },
    facebook:{
        backgroundColor:'#006FFD',
        height:moderateScale(40),
        width:moderateScale(40),
        margin:moderateScale(5),
        borderRadius:moderateScale(100),
    },
    svgs:{
        flexDirection:'row',
        padding: moderateScale(10)
        
    },

    inputContainer:{
        flexDirection: 'row', // 수평 배치
        alignItems: 'center', // 중앙 정렬
        height: moderateScale(48),
        borderColor: '#C5C6CC',
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(10),
        marginBottom: moderateScale(10),
        marginLeft: moderateScale(12),
        marginRight: moderateScale(12),
        paddingHorizontal: moderateScale(10), // 내부 여백
    },
    passwordInput: {
        flex: 1, // 남은 공간 차지
        fontSize: moderateScale(14),
    },

    canSee:{
        backgroundColor:'#ffffff',
        height:moderateScale(20),
        width:moderateScale(20),
        margin:moderateScale(5),
        borderRadius:moderateScale(100),
    }
});