import React from 'react';
import { View, StyleSheet } from 'react-native';

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
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: '#006FFD',
    },
    inactiveDot: {
        backgroundColor: '#D3D3D3',
    },
});

export default ProgressDot;
