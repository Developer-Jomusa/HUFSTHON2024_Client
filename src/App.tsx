import {Platform, StatusBar} from "react-native";
import React, {useEffect} from "react";
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {I18nextProvider} from "react-i18next";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {i18n} from "./i18n.config.ts";
import Onboarding from "./screen/Onboarding.tsx";
import Splash from "./screen/Splash.tsx";
import Login from "./screen/Login.tsx";
import SignUp from './screen/SignUp.tsx';
import MainTabs from "./screen/MainTabs.tsx";
import Chatting from './screen/Chatting.tsx';
import axios, {AxiosResponse, InternalAxiosRequestConfig} from "axios";
import {errorLogger, requestLogger, responseLogger} from "axios-logger";
function App(): React.JSX.Element {
    useEffect(() => {
        if (Platform.OS === 'android') {
            StatusBar.setBackgroundColor('transparent');
            StatusBar.setTranslucent(true);
        }
        StatusBar.setBarStyle('dark-content');
        StatusBar.setHidden(false);

        const setInterceptor = setupAxiosInterceptors();
        return () => {
            setInterceptor();
        };
        }, []);

    const Stack = createNativeStackNavigator();

    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: 'white',
        },
    };

    const setupAxiosInterceptors = () => {

        axios.defaults.timeout = 10000;

        const requestInterceptors = axios.interceptors.request.use(
            (request: InternalAxiosRequestConfig) => {
                return requestLogger(request);
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        const responseInterceptors = axios.interceptors.response.use(
            (response: AxiosResponse) => responseLogger(response),
            (error) => errorLogger(error)
        );


        return () => {
            axios.interceptors.request.eject(requestInterceptors);
            axios.interceptors.response.eject(responseInterceptors);
        };
    }

    return (
        <SafeAreaProvider>
            <I18nextProvider i18n={i18n}>
                <NavigationContainer theme={theme}>
                    <Stack.Navigator
                        initialRouteName="Splash"
                        screenOptions={{
                            headerShown: false,
                        }}
                    >
                        <Stack.Screen name="Splash" component={Splash} />
                        <Stack.Screen name="Onboarding" component={Onboarding} />
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="SignUp" component={SignUp} />
                        <Stack.Screen name="MainTabs" component={MainTabs} />
                        <Stack.Screen name="Chatting" component={Chatting} />
                    </Stack.Navigator>
                </NavigationContainer>
            </I18nextProvider>
        </SafeAreaProvider>
    );
}

export default App;
