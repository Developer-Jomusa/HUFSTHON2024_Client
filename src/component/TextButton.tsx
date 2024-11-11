import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, Platform, TextStyle, TextProps, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

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
    stringValue?: Record<string, any>;
    children?: ReactNode;
    onPress?: () => void; // 버튼처럼 동작하도록 onPress 추가
    buttonStyle?: ViewStyle; // TouchableOpacity에 추가 스타일 적용
}

const TextButton = ({
    stringKey,
    stringValue,
    children,
    onPress,
    style,
    buttonStyle,
    ...props
}: RNTextProps) => {
    // 1. 텍스트 번역
    const { t } = useTranslation();

    // 2. 전달된 style을 객체로 변환
    const flatStyle: TextStyle | undefined = StyleSheet.flatten(style);

    let weight = flatStyle?.fontWeight || '400'; // 기본 weight 설정

    // 3. 플랫폼 별 폰트 매핑
    const platformStyle: TextStyle = Platform.select({
        ios: { fontWeight: weight, fontFamily: 'Inter_24pt-Regular' },
        android: { fontFamily: androidFontMap[weight] || androidFontMap['400'] },
    }) as TextStyle;

    // 4. 번역 키(stringKey)가 없으면 기본값 설정
    const options = { defaultValue: `@${stringKey}`, ...stringValue };
    const text = stringKey ? t(stringKey, options) : children;

    // 5. TouchableOpacity 사용 여부
    if (onPress) {
        return (
            <TouchableOpacity
                onPress={onPress}
                style={[styles.button, buttonStyle]}
                accessible
                accessibilityRole="button"
            >
                <Text {...props} style={[style, platformStyle]}>
                    {text}
                </Text>
            </TouchableOpacity>
        );
    }

    // 6. 단순 텍스트 렌더링
    return (
        <Text {...props} style={[style, platformStyle]}>
            {text}
        </Text>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default TextButton;
