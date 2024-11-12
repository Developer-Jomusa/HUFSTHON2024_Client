import React, { useCallback, useEffect, useRef, useState } from 'react';
// @ts-ignore
import UnityView, { UnityViewContentUpdateEvent, ComponentRef } from '@azesmway/react-native-unity';
import { StyleProp, ViewStyle, View, Text, ActivityIndicator } from 'react-native';
import { useUnityStore } from "../store/UnityStore.ts";
import {useFocusEffect} from "@react-navigation/native";

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
    const ref = useUnityStore((state) => state.unityPlayerRef?.componentRef); // Zustand에서 가져온 Unity Ref
    const setUnityPlayerRef = useUnityStore((state) => state.setUnityPlayerRef);
    const comRef = useRef<ComponentRef>(null); // 새 Unity Ref
    const [isReady, setIsReady] = useState(false); // 로딩 상태
    
    useFocusEffect(
        useCallback(() => {
            const unloadAndInitialize = async () => {
                if (ref) {
                    console.log("Unity Player is unloading...");
                    ref.unloadUnity?.();
                    //방지 차원...
                    await new Promise((resolve) => setTimeout(resolve, 200));
                    console.log("Unity Player unloaded");
                }

                const unityRef: UnityPlayerRefs = {
                    componentRef: comRef,
                };
                setUnityPlayerRef(unityRef);

                console.log("New Unity Ref initialized");
                setIsReady(true); // 초기화 완료 후 렌더링 가능
            };

            unloadAndInitialize();

            return () => {
                console.log("Cleaning up Unity...");
                setIsReady(false); // 화면을 떠날 때 초기화 상태로 변경
            };
        },[])
    );
    
    // Unity로 메시지를 보낼 메서드 정의
    const sendToUnity = useCallback(
        (data: InterfaceData) => {
            if (!comRef.current) {
                console.warn("Unity Player is not ready");
                return;
            }

            const jsonData = JSON.stringify(data);
            console.log(`[Unity SEND] ${jsonData}`);
            comRef.current.postMessage?.('BridgeController', 'ReceivedMessage', jsonData);
        },
        [comRef]
    );

    // 외부에서 사용할 수 있도록 메시지 보내는 메서드 전달
    useEffect(() => {
        if (onSendMessage) {
            onSendMessage(sendToUnity);
        }
    }, [onSendMessage, sendToUnity]);

    // Unity에서 메시지를 수신할 때 호출
    const handleUnityMessage = useCallback(
        (data: UnityViewContentUpdateEvent) => {
            if (!data || !data.nativeEvent.message) {
                console.warn("Received empty Unity message");
                return;
            }

            try {
                const jsonData: InterfaceData = JSON.parse(data.nativeEvent.message);
                console.log(`[Unity RECV] Name: ${jsonData.name}, Data: ${jsonData.data}`);
                onUnityMessage?.(jsonData); // 외부로 메시지 전달
            } catch (error) {
                console.error("Failed to parse Unity message:", error);
            }
        },
        [onUnityMessage]
    );

    // 로딩 상태일 경우 로딩 UI 렌더링
    if (!isReady) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Initializing Unity...</Text>
            </View>
        );
    }
    else{
        return (
            <UnityView
                ref={comRef}
                style={style}
                onUnityMessage={handleUnityMessage}
                androidKeepPlayerMounted={true}
                backgroundColor="transparent"
            />
        );
    }

};

export default Unity;
