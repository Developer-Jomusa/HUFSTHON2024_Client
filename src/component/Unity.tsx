import React, { useCallback, useEffect, useState } from 'react';
// @ts-ignore
import UnityView, { UnityViewContentUpdateEvent, ComponentRef } from '@azesmway/react-native-unity';
import { StyleProp, ViewStyle, View, ActivityIndicator } from 'react-native';
import { useUnityStore } from "../store/UnityStore.ts";

export interface InterfaceData {
    name: string;
    data: string;
}

export interface UnityPlayerRefs {
    componentRef: ComponentRef | null;
}

interface UnityPlayerProps {
    style?: StyleProp<ViewStyle>;
    onUnityMessage?: (data: InterfaceData) => void; // Unity에서 메시지 수신 시 호출
    onSendMessage?: (sendToUnity: (data: InterfaceData) => void) => void; // Unity로 메시지 보낼 메서드를 전달
}

const Unity = ({ style, onUnityMessage, onSendMessage }: UnityPlayerProps) => {
    const ref = useUnityStore((state) => state.unityPlayerRef?.componentRef);
    const setUnityPlayerRef = useUnityStore((state) => state.setUnityPlayerRef);
    const [isReady, setIsReady] = useState(false);

    // 렌더링 지연 (800ms)
    useEffect(() => {
        const timer = setTimeout(() => setIsReady(true), 500);
        return () => clearTimeout(timer);
    }, []);

    // Unity로 메시지를 보낼 메서드
    const sendToUnity = useCallback(
        (data: InterfaceData) => {
            if (!ref) {
                console.warn("Unity Player is not ready");
                return;
            }
            const jsonData = JSON.stringify(data);
            console.log(`[Unity SEND] ${jsonData}`);
            ref.postMessage?.('BridgeController', 'ReceivedMessage', jsonData);
        },
        [ref]
    );

    // 외부로 메시지 보내기 메서드 전달
    useEffect(() => {
        if (onSendMessage) {
            onSendMessage(sendToUnity);
        }
    }, [onSendMessage, sendToUnity]);

    // Unity에서 메시지를 수신할 때 호출
    const handleUnityMessage = useCallback(
        (data: UnityViewContentUpdateEvent) => {
            const message = data?.nativeEvent?.message;
            if (!message) {
                console.warn("Received empty Unity message");
                return;
            }
            try {
                const jsonData: InterfaceData = JSON.parse(message);
                console.log(`[Unity RECV] Name: ${jsonData.name}, Data: ${jsonData.data}`);
                onUnityMessage?.(jsonData);
            } catch (error) {
                console.error("Failed to parse Unity message:", error);
            }
        },
        [onUnityMessage]
    );

    // 로딩 화면 표시
    if (!isReady) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    // UnityView 렌더링
    return (
        <UnityView
            ref={ref}
            style={style}
            onUnityMessage={handleUnityMessage}
            backgroundColor="transparent"
        />
    );
};

export default Unity;
