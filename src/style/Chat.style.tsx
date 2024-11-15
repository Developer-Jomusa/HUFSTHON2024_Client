import { StyleSheet } from 'react-native';
import {moderateScale} from "../util/ScreenScaler.tsx";

export default StyleSheet.create({
    MainContainer:{
        width:"100%", 
        height:"100%", 
        alignItems:'center'
    },
    header:{
        width:'100%',
        height:moderateScale(56),
        justifyContent:'center',
        alignItems:'center',
        padding: moderateScale(20),
       
    },
    headerText:{
        fontSize:moderateScale(14),
        fontWeight:"700"
    },
    bar:{
        backgroundColor:"#F8F9FE",
        height:moderateScale(39),
        borderRadius:moderateScale(16),
        width:moderateScale(343),
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:'row',
        // paddingHorizontal:moderateScale(20.83)
    },
    btn:{
        
        paddingHorizontal:moderateScale(20.83),
        paddingVertical: moderateScale(8),
        borderRadius:moderateScale(12),
    },
    button: {
        backgroundColor: "transparent",
    },
    selectedButton: {
        backgroundColor: '#FFFFFF', // 선택된 버튼의 배경색
        borderColor: '#006FFD',    // 선택된 버튼의 테두리색
        borderWidth: 2,           // 선택된 버튼의 테두리 두께
    },
    main:{
        width:"100%", 
        flex:1,
        alignItems:'center',
        justifyContent:"center"
    },
    mainText:{
        fontSize:moderateScale(18),
        fontWeight:"700",
        marginBottom:moderateScale(8),
    },
    startChatNow:{
        fontSize:moderateScale(14),
        fontWeight:"400",
        color:'#71727A',
        marginBottom:moderateScale(11),
    },
    startChat:{
        paddingHorizontal:moderateScale(16),
        paddingVertical:moderateScale(12.5),
        borderRadius:moderateScale(12)
    },
    divide:{
        color:'#71727A',
        fontWeight:'400'
    },
    startChatMain:{
        width:"100%", 
        flex:1,
        alignItems:'center',
        marginTop:moderateScale(17),

    },
    chatRoom: {
        flexDirection:'row',
        width: moderateScale(359),
        marginBottom: moderateScale(13),
        padding: moderateScale(12),
        backgroundColor: '#FFFFFF',
        borderRadius: moderateScale(183),
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor:"#000000",
        borderWidth:moderateScale(1)
    },
    chatText:{
        width: moderateScale(179)
    },
    chatPerson: {
        marginBottom: moderateScale(4),
    },
    chatMessage: {
        color: '#71727A',
        marginBottom: moderateScale(8),
    },
    enterChatButton: {
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(6),
        borderRadius: moderateScale(7),
    },
    
});

