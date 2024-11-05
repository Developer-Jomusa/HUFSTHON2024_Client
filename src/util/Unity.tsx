import React, { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import UnityView, { UnityViewContentUpdateEvent, ComponentRef } from '@azesmway/react-native-unity';
import { StyleProp, ViewStyle } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export interface InterfaceData {
    name: string;
    data: string;
}
export interface UnityPlayerRefs {
    sendToUnity: (data: InterfaceData) => void;
}

interface UnityPlayerProps {
    onReceivedMessage?: (eventName: string, jsonData: string) => void;
    style?: StyleProp<ViewStyle>
}
const Unity = forwardRef(({ onReceivedMessage, style }: UnityPlayerProps, ref) => {
    const unityRef = useRef<ComponentRef>(null);

    useFocusEffect(
        useCallback(() => {
            // Mount 될 때, Unity를 Resume.
            unityRef?.current?.resumeUnity();

            return () => {
                // Mount 될 때, Unity를 Pause.
                unityRef?.current?.pauseUnity(true);
            };
        }, [])
    );

    useImperativeHandle(ref, () => ({
        sendToUnity(data: InterfaceData) {
            if (!unityRef.current) return;

            const jsonData = JSON.stringify(data);
            console.log(`[Unity SEND] ${jsonData}`);
            unityRef.current.postMessage('BridgeController', 'ReceivedMessage', jsonData);
        }
    }));

    function onUnityMessage(data: UnityViewContentUpdateEvent) {
        if (onReceivedMessage === undefined) return;

        console.log(`[Unity RECV] ${data.nativeEvent.message}`);
        const jsonData: InterfaceData = JSON.parse(data.nativeEvent.message);
        onReceivedMessage(jsonData.name, jsonData.data);
    }

    return (
        <UnityView ref={unityRef} style={style} onUnityMessage={onUnityMessage} androidKeepPlayerMounted={false} />
    );
});

export default Unity;