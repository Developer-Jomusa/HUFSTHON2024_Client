import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Shorts from "../shorts";

type Item = {
    id: string;
    url: string;
};

const items: Item[] = [
    { id: '001', url: 'https://youtube.com/shorts/Uj74798gItc' },
    { id: '002', url: 'https://youtube.com/shorts/HXyx8Sr5RTQ' },
    { id: '003', url: 'https://youtube.com/shorts/QgAA_5IPNIs' },
    { id: '004', url: 'https://youtube.com/shorts/GFAa6l5zbHE' },
    { id: '005', url: 'https://youtube.com/shorts/-IcYublDy7I' },
    { id: '006', url: 'https://youtube.com/shorts/6a1tmHi6d60' },
    { id: '007', url: 'https://youtube.com/shorts/8Lt1hJnEcq0' },
    { id: '008', url: 'https://youtube.com/shorts/266xNTZN5VI' },
    { id: '009', url: 'https://youtube.com/shorts/xZ48_razkME' },
    { id: '010', url: 'https://youtube.com/shorts/qoM9tP69USo' },
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
