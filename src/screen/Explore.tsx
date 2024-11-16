import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Shorts from "../shorts";

type Item = {
    id: string;
    url: string;
};

const items: Item[] = [
    { id: '001', url: 'https://youtube.com/shorts/93407bfiEv4?si=jj--AxyRaXX7VQGP' },
    { id: '002', url: 'https://youtube.com/shorts/KdHGTo652-s' },
    { id: '003', url: 'https://youtube.com/shorts/WEVFfCEc3H8' },
    { id: '004', url: 'https://youtube.com/shorts/6uk9VOzLS_4' },
    { id: '005', url: 'https://youtube.com/shorts/wXzWfWaaJ54' },
    { id: '006', url: 'https://youtube.com/shorts/kOVXJ5oRHBg' },
    { id: '007', url: 'https://youtube.com/shorts/5j0gA25EsAo' },
    { id: '008', url: 'https://youtube.com/shorts/1DLBKhvGrG4' },
    { id: '009', url: 'https://youtube.com/shorts/8fNdV9VsXCc' },
    { id: '010', url: 'https://youtube.com/shorts/hl7rBWD8ibI' },
];


const Explore = ({ navigation }: any) => {
    const [showShorts, setShowShorts] = useState(false);

    useFocusEffect(
        React.useCallback(() => {
            const timer = setTimeout(() => {
                setShowShorts(true);
            }, 1000); // 1초 대기

            return () => {
                clearTimeout(timer); // focus가 변경되면 타이머 정리
                setShowShorts(false); // focus 해제 시 상태 초기화
            };
        }, [])
    );

    return (
        <View style={styles.container}>
            {showShorts ? <Shorts items={items} /> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
    },
});

export default Explore;
