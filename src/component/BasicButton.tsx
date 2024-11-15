import React from "react";
import { StyleProp, TouchableOpacity, View, ViewStyle, StyleSheet, TextStyle } from "react-native";
import { moderateScale } from "../util/ScreenScaler";
import BasicText from "./BasicText";
import stylesheet from "../style/stylesheet.tsx";

export interface BasicButtonProps {
    buttonStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    stringKey?: string;
    onPress?: () => void;
    disabled?: boolean;
    enabledColor?: string;
    disabledColor?: string;
}

const BasicButton = ({
                         buttonStyle,
                         textStyle,
                         stringKey,
                         onPress,
                         disabled,
                         enabledColor = "#FFFFFF/#000000/#000000",
                         disabledColor = "#D3D3D3/#000000/#D3D3D3",
                     }: BasicButtonProps) => {
    const parseColor = (color: string) => {
        const [backgroundColor, textColor, borderColor] = color?.split("/") || [];
        return {
            backgroundColor: backgroundColor || "#ffffff",
            textColor: textColor || "#000000",
            borderColor: borderColor || "transparent",
        };
    };

    const { backgroundColor, textColor, borderColor } = disabled
        ? parseColor(disabledColor)
        : parseColor(enabledColor);

    return (
        <TouchableOpacity
            onPress={!disabled ? onPress : undefined}
            disabled={disabled}
        >
            <View style={[stylesheet.rowAndCentered,{backgroundColor : backgroundColor,borderColor:borderColor},styles.buttonContainer,buttonStyle]}>
                <BasicText
                    style={[
                        {
                            color: textColor,
                        },
                        textStyle
                    ]}
                    stringKey={stringKey}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: Number.MAX_SAFE_INTEGER,
        borderWidth : moderateScale(1)
    },
});

export default BasicButton;
