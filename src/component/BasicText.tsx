import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, Platform, TextStyle, TextProps, StyleSheet } from 'react-native';

const fontName = 'Inter_24pt';
const androidFontMap: { [key: string]: string } = {
    '100': `${fontName}-Thin`,
    '200': `${fontName}-ExtraLight`,
    '300': `${fontName}-Light`,
    '400': `${fontName}-Regular`,
    '500': `${fontName}-Medium`,
    '600': `${fontName}-SemiBold`,
    '700': `${fontName}-Bold`,
    '800': `${fontName}-ExtraBold`,
    '900': `${fontName}-Black`,
};

interface RNTextProps extends TextProps {
    stringKey?: string;
    stringValue?: any;
    children?: ReactNode;
}

const BasicText = ({ stringKey,stringValue,children,...props} : RNTextProps) => {
    
    // 1.텍스트 번역
    const { t } = useTranslation();

    // 2.전달된 style을 객체로 변환
    const flatStyle: TextStyle | undefined = StyleSheet.flatten(props.style);

    let weight = flatStyle?.fontWeight;
    if (weight === undefined) {
        weight = '400';
    }

    // 3.플랫폼 별 폰트 매핑
    const platformStyle = Platform.select({
        // iOS는 기본적으로 fontWeight 사용.
        ios: { fontWeight: weight, fontFamily: 'Inter_24pt-Regular' },
        // Android에서는 폰트 매핑.
        android: {
            fontFamily: androidFontMap[weight] || androidFontMap['400'],
        },
    }) as TextStyle;

    // 4. key 값이 없으면, @를 붙혀 key 값을 노출.
    const options = { defaultValue: `@${stringKey}` };
    Object.assign(options, stringValue);
    const text = stringKey ? t(stringKey, options) : children;

    
    return (
        <Text {...props} style={[props.style, platformStyle]} >
            {text}
        </Text>
    );
};

export default BasicText;