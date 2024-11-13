import React from 'react';
import { View, StyleSheet } from 'react-native';
import { moderateScale } from '../util/ScreenScaler';

const Divider = ({ color = '#E0E0E0', thickness = moderateScale(1) , marginVertical = moderateScale(8) }) => {
    return <View style={[styles.divider, { backgroundColor: color, height: thickness, marginVertical }]} />;
};

const styles = StyleSheet.create({
    divider: {
        width: '100%',
    },
});

export default Divider;
