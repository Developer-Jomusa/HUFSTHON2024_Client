import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import {Text, Platform, TextStyle, TextProps, TextInput, TextInputProps} from 'react-native';
import stylesheet from "../style/stylesheet.tsx";

const fontName = 'Jua-Regular';
interface RNTextInputProps extends TextInputProps {
    style?: TextStyle;
    placeholderKey?: string;
}

const JuaInput = ({ placeholderKey, ...props} : RNTextInputProps) => {
    const { t } = useTranslation();

    // placeholderKey가 있으면 번역된 텍스트를 사용하고, 없으면 기본 placeholder 사용.
    const placeholderText = placeholderKey ? t(placeholderKey, { defaultValue: `@${placeholderKey}` }) : props.placeholder;

    return (
        <TextInput
            {...props}
            style={[props.style,stylesheet.JuaFont]}
            placeholder={placeholderText} // 다국어 번역된 텍스트 적용
        />
    );
};

export default JuaInput;