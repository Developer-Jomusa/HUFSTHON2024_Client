import { StyleSheet } from "react-native";
import { moderateScale } from "../util/ScreenScaler.tsx";

export default StyleSheet.create({
    MainContainer: {
        flex: 1,
        position: "relative",
    },
    UnityContainer: {
        ...StyleSheet.absoluteFillObject,
    },
    ContentContainer: {
        flex: 1,
    },
    TitleContainer: {
        height: moderateScale(56),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: moderateScale(18),
    },
    ChatContainer: {
        flex: 1,
        paddingHorizontal: moderateScale(12),
    },
    InputContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: moderateScale(12),
        width:"100%",
        height:moderateScale(72)
    },
    TextInput: {
        flex: 1,
        height: moderateScale(40),
        borderRadius: moderateScale(20),
        borderWidth: moderateScale(1),
        borderColor: "#C5C6CC",
        paddingHorizontal: moderateScale(12),
        backgroundColor: "#FFFFFF",
    },
    SendButton: {
        marginLeft: moderateScale(8),
        width: moderateScale(40),
        height: moderateScale(40),
        borderRadius: moderateScale(20),
        backgroundColor: "#006FFD",
        justifyContent: "center",
        alignItems: "center",
    },
});
