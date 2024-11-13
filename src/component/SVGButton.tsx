import React from "react";
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import { moderateScale } from "../util/ScreenScaler.tsx";
import styles from "../style/stylesheet.tsx";
import BasicText from "./BasicText.tsx";
import SVG, { SVGIconProps } from "./SVG.tsx";

export interface BasicButtonProps {
    style?: StyleProp<ViewStyle>;
    text?: string;
    textSize?: number;
    textWeight?: string;
    onPress: () => void;
    disabled: boolean;
    enabledColor?: string;
    disabledColor?: string;
    svgName?: SVGIconProps["name"]; // 수정된 부분: SVG 이름 타입 연결
    svgSize?: number;
}

const SVGButton = ({
    style,
    text,
    onPress,
    disabled,
    enabledColor = "#FFFFFF/#000000/#000000",
    disabledColor = "#D3D3D3/#000000/#D3D3D3",
    svgName,
    svgSize = 24,

}: BasicButtonProps) => {

    const parseColor = (color: string) => {
        const colors = color?.split("/") || ["#ffffff", "#000000", "transparent"];
        return {
            backgroundColor: colors[0] || "#ffffff",
            textColor: colors[1] || "#000000",
            borderColor: colors[2] || "transparent",
        };
    };

    const { backgroundColor, textColor, borderColor } = disabled
        ? parseColor(disabledColor)
        : parseColor(enabledColor);

    return (
        <TouchableOpacity
            onPress={!disabled ? onPress : undefined}
            style={[
                styles.basicRound,
                style,
               
            ]}
            disabled={disabled}
        >
            <View style={[styles.rowAndCentered, { alignItems: "center" }]}>
                {svgName && (
                    <SVG
                        name={svgName}
                        width={moderateScale(svgSize)}
                        height={moderateScale(svgSize)}
                        fill={textColor}
                        style={{ marginRight: text ? moderateScale(8)  : moderateScale(0) }}
                    />
                )}
              
            </View>
        </TouchableOpacity>
    );
};

export default SVGButton;
