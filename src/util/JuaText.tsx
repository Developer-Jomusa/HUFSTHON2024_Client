import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, Platform, TextStyle, TextProps } from 'react-native';
import stylesheet from "../style/stylesheet.tsx";

interface RNTextProps extends TextProps {
    stringKey?: string;
    stringValue?: any;
    children?: ReactNode;
}

const JuaText = ({stringKey, stringValue,children, ...props} : RNTextProps) => {
    const { t } = useTranslation();
    

    // key 값이 없으면, @를 붙혀 key 값을 노출.
    const options = { defaultValue: `@${stringKey}` };
    Object.assign(options, stringValue);
    const text = stringKey ? t(stringKey, options) : children;

    return (
        <Text {...props} style={[props.style,stylesheet.JuaFont]}>
            {text}
        </Text>
    );
};

export default JuaText;


