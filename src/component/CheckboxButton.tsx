import React, { useState } from "react";
import {
    StyleProp,
    TouchableOpacity,
    View,
    ViewStyle,
    StyleSheet,
    TextStyle,
} from "react-native";
import { moderateScale } from "../util/ScreenScaler";
import BasicText from "./BasicText";
import SVG from "./SVG";
import * as svg from "../../asset/svg";

export interface CheckboxButtonProps {
    buttonStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    stringKey?: string;
    onChange?: (checked: boolean) => void;
    checked?: boolean;
    enabledColor?: string; // 형식: "배경색/텍스트색/테두리색"
    disabledColor?: string; // 형식: "배경색/텍스트색/테두리색"
    iconName: keyof typeof svg;
    iconSize?: number;
}

const CheckboxButton = ({
                            buttonStyle,
                            textStyle,
                            stringKey,
                            onChange,
                            checked = false,
                            enabledColor = "#EAF2FF/#000000/#C5C6CC", // 기본 색상 형식
                            disabledColor = "#FFFFFF/#000000/#C5C6CC", // 기본 색상 형식
                            iconName,
                            iconSize =16
                        }: CheckboxButtonProps) => {
    const [isChecked, setIsChecked] = useState(checked);

    // 색상 문자열을 파싱하여 배경색, 텍스트색, 테두리색을 추출
    const parseColor = (color: string) => {
        const [backgroundColor, textColor, borderColor] = color?.split("/") || [];
        return {
            backgroundColor: backgroundColor || "#ffffff",
            textColor: textColor || "#000000",
            borderColor: borderColor || "transparent",
        };
    };

    // 현재 상태에 따라 적절한 색상 적용
    const { backgroundColor, textColor, borderColor } = isChecked
        ? parseColor(enabledColor)
        : parseColor(disabledColor);

    const handlePress = () => {
        const newCheckedState = !isChecked;
        setIsChecked(newCheckedState);
        if (onChange) onChange(newCheckedState);
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View
                style={[
                    styles.buttonContainer,
                    { backgroundColor, borderColor },
                    buttonStyle,
                ]}
            >
                <BasicText
                    style={[
                        styles.text,
                        { color: textColor },
                        textStyle,
                    ]}
                    stringKey={stringKey}
                />
                <SVG name={iconName} width={iconSize} height={iconSize} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: moderateScale(12),
        paddingVertical: moderateScale(8),
        borderRadius: moderateScale(12),
        borderWidth: moderateScale(1),
    },
    text: {
        color: "#000000",
    },
});

export default CheckboxButton;
