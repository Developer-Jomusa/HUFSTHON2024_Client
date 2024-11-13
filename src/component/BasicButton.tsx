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
    children?: React.ReactNode;
    justifyContent?: "space-between" | "center" | "flex-start" | "flex-end" | "space-around" | "space-evenly"; // 수정된 부분
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
                         children,
                         justifyContent = 'center'
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
                {
                  
                    backgroundColor: backgroundColor || "#ffffff",
                    borderColor: borderColor,
                    borderWidth: borderColor ? moderateScale(1.5) : 0,
                    borderRadius: Number.MAX_SAFE_INTEGER,
                    justifyContent: 'center',
                    
                },
                style,
                
            ]}
            disabled={disabled}
        >
            <View 
             style={[
                {
                    justifyContent: justifyContent, // 전달받은 justifyContent 적용
                },
                styles.rowAndCentered, // 추가 스타일 적용
            ]}
            >
                <BasicText
                    style={{fontWeight: textWeight, color: textColor, fontSize: moderateScale(textSize)} as TextStyle}
                    stringKey={text}
                />
                 {children}
            </View>
        </TouchableOpacity>
    );
};

export default BasicButton;
