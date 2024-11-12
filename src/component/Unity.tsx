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
            if (unityRef.current) {
                console.log("Unity is Resuming");
                unityRef.current.resumeUnity();
            } else {
                console.warn("Unity Player Reference is null");
            }
    
            return () => {
                if (unityRef.current) {
                    console.log("Unity is Pausing");
                    unityRef.current.pauseUnity(true);
                }
            };
        }, [])
    );
    
    

    useImperativeHandle(ref, () => ({
        sendToUnity(data: InterfaceData) {
            if (!unityRef.current) {
                console.warn("Unity Player is not ready");
                return;
            }
    
            const jsonData = JSON.stringify(data);
            console.log(`[Unity SEND] ${jsonData}`);
            unityRef.current.postMessage('BridgeController', 'ReceivedMessage', jsonData);
        }
    }));
    

    function onUnityMessage(data: UnityViewContentUpdateEvent) {
        if (!data || !data.nativeEvent.message) {
            console.warn("Received empty Unity message");
            return;
        }
    
        try {
            const jsonData: InterfaceData = JSON.parse(data.nativeEvent.message);
            console.log(`[Unity RECV] Name: ${jsonData.name}, Data: ${jsonData.data}`);
            onReceivedMessage?.(jsonData.name, jsonData.data);
        } catch (error) {
            console.error("Failed to parse Unity message:", error);
        }
    }
    

    return (
        <UnityView ref={unityRef} style={style} onUnityMessage={onUnityMessage} androidKeepPlayerMounted={false} backgroundColor="transparent"/>
    );
});

export default Unity;