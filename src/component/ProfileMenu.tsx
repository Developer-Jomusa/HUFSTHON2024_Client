import React from "react";
import { TouchableOpacity, StyleProp, ViewStyle, StyleSheet } from "react-native";
import UtilityStyles from "../style/UtilityStyles.tsx";
import BasicText from "./BasicText.tsx";
import SVG from "./SVG.tsx";
import {moderateScale} from "../util/ScreenScaler.tsx";


interface ProfileMenuProps {
    stringKey: string;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ stringKey, onPress, style }) => {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <BasicText
                stringKey={stringKey}
                style={[UtilityStyles.fc_black, UtilityStyles.fs_little, UtilityStyles.fw_500]}
            />
            <SVG name="next" />
        </TouchableOpacity>
    );
};

export default ProfileMenu;

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: moderateScale(52),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: moderateScale(16),
    },
});
