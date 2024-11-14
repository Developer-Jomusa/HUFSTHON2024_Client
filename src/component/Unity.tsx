import React, { useCallback, useEffect, useRef, useState } from 'react';
// @ts-ignore
import UnityView, { UnityViewContentUpdateEvent, ComponentRef } from '@azesmway/react-native-unity';
import { StyleProp, ViewStyle, View, ActivityIndicator } from 'react-native';
import { useUnityStore } from "../store/UnityStore.ts";

export interface InterfaceData {
    name: string;
    data: string;
}

interface UnityPlayerProps {
    style?: StyleProp<ViewStyle>;
    onUnityMessage?: (data: InterfaceData) => void; // Unity에서 메시지 수신 시 호출
    onSendMessage?: (sendToUnity: (data: InterfaceData) => void) => void; // Unity로 메시지 보낼 메서드를 전달
}

const Unity = ({ style, onUnityMessage, onSendMessage }: UnityPlayerProps) => {
    const unityRef = useRef<ComponentRef>(null); // UnityView의 ref를 관리
    const [isReady, setIsReady] = useState(false);

    const setUnityPlayerRef = useUnityStore((state) => state.setUnityPlayerRef);

    useEffect(() => {
        setUnityPlayerRef({ componentRef: unityRef.current }); // useUnityStore에 ref 설정
    }, [setUnityPlayerRef]);

    useEffect(() => {
        const timer = setTimeout(() => setIsReady(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const sendToUnity = useCallback(
        (data: InterfaceData) => {
            if (!unityRef.current) {
                console.warn("Unity Player is not ready");
                return;
            }
            const jsonData = JSON.stringify(data);
            console.log(`[Unity SEND] ${jsonData}`);
            unityRef.current.postMessage?.('BridgeController', 'ReceivedMessage', jsonData);
        },
        []
    );

    useEffect(() => {
        if (onSendMessage) {
            onSendMessage(sendToUnity);
        }
    }, [onSendMessage, sendToUnity]);

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

    if (!isReady) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <UnityView
            ref={unityRef} // UnityView의 ref 연결
            style={style}
            onUnityMessage={handleUnityMessage}
            backgroundColor="transparent"
        />
    );
};

export default Unity;
