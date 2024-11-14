import { StyleSheet } from 'react-native';
import { moderateScale } from "../util/ScreenScaler.tsx";

export default StyleSheet.create({
    fs_tiny: {
        fontSize: moderateScale(12)
    },
    fs_little: {
        fontSize: moderateScale(16)
    },
    fs_small: {
        fontSize: moderateScale(18)
    },
    fs_medium: {
        fontSize: moderateScale(24)
    },
    fs_large: {
        fontSize: moderateScale(30)
    },
    fs_extra: {
        fontSize: moderateScale(36)
    },
    fc_white: {
        color: "#FFFFFF"
    },
    fc_black: {
        color: "#000000"
    },
    fc_gray: {
        color: "#71727A"
    },
    fw_100: {
        fontWeight: "100"
    },
    fw_200: {
        fontWeight: "200"
    },
    fw_300: {
        fontWeight: "300"
    },
    fw_400: {
        fontWeight: "400"
    },
    fw_500: {
        fontWeight: "500"
    },
    fw_600: {
        fontWeight: "600"
    },
    fw_700: {
        fontWeight: "700"
    },
    fw_800: {
        fontWeight: "800"
    },
    fw_900: {
        fontWeight: "900"
    }
});
