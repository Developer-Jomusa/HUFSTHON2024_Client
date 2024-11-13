import React from 'react';
import { View, StyleSheet } from 'react-native';
import { moderateScale } from '../util/ScreenScaler';

interface ProgressDotProps {
    active: boolean;
}

const ProgressDot: React.FC<ProgressDotProps> = ({ active }) => {
    return (
        <View style={[styles.dot, active ? styles.activeDot : styles.inactiveDot]} />
    );
};

const styles = StyleSheet.create({
    dot: {
        width: moderateScale(10),
        height: moderateScale(10),
        borderRadius: moderateScale(5),
        marginHorizontal: moderateScale(5),
    },
    activeDot: {
        backgroundColor: '#006FFD',
    },
    inactiveDot: {
        backgroundColor: '#D3D3D3',
    },
});

export default ProgressDot;
