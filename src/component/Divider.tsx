import React from 'react';
import { View, StyleSheet } from 'react-native';

const Divider = ({ color = '#E0E0E0', thickness = 1, marginVertical = 8 }) => {
    return <View style={[styles.divider, { backgroundColor: color, height: thickness, marginVertical }]} />;
};

const styles = StyleSheet.create({
    divider: {
        width: '100%',
    },
});

export default Divider;
