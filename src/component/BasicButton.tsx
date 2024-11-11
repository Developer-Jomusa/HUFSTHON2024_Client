import {StyleProp, TouchableOpacity, View, ViewStyle} from "react-native";


;
import {moderateScale} from "../util/ScreenScaler.tsx";
import styles from "../style/stylesheet.tsx";
import {TextStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import BasicText from "./BasicText.tsx";

export interface BasicButtonProps {
    style?: StyleProp<ViewStyle>;
    text?: string;
    textSize: number;
    textWeight?: string;
    onPress?: () => void;
    disabled?: boolean;
    enabledColor?: string;
    disabledColor?: string;
}

const BasicButton = ({
                         style,
                         text,
                         textSize,
                         textWeight,
                         onPress,
                         disabled,
                         enabledColor = '#FFFFFF/#000000/#000000',
                         disabledColor = '#D3D3D3/#000000/#D3D3D3',
                     }: BasicButtonProps) => {
    const parseColor = (color: string) => {
        const colors = color?.split('/') || ['#ffffff', '#000000', 'transparent'];
        return {
            backgroundColor: colors[0] || '#ffffff',
            textColor: colors[1] || '#000000',
            borderColor: colors[2] || 'transparent',
        };
    };

    const {backgroundColor, textColor, borderColor} = disabled
        ? parseColor(disabledColor)
        : parseColor(enabledColor);

    return (
        <TouchableOpacity
            onPress={!disabled ? onPress : undefined}
            style={[
                styles.basicRound,
                style,
                {
                    backgroundColor: backgroundColor || '#ffffff',
                    borderColor: borderColor,
                    borderWidth: borderColor ? moderateScale(1.5) : 0,
                },
            ]}
            disabled={disabled}
        >
            <View style={styles.rowAndCentered}>
                <BasicText
                    style={{fontWeight: textWeight, color: textColor, fontSize: moderateScale(textSize)} as TextStyle}
                    stringKey={text}
                />
            </View>
        </TouchableOpacity>
    );
};

export default BasicButton;
