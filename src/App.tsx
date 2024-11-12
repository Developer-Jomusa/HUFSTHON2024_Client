import {Platform, StatusBar} from "react-native";
import React, {useEffect, useRef,} from "react";
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {I18nextProvider} from "react-i18next";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {i18n} from "./i18n.config.ts";
import Onboarding from "./screen/Onboarding.tsx";
import Splash from "./screen/Splash.tsx";
import Login from "./screen/Login.tsx";
import SignUp from './screen/SignUp.tsx';
function App(): React.JSX.Element {
    
    useEffect(() => {
        if (Platform.OS == 'android') {
            StatusBar.setBackgroundColor('transparent');
            StatusBar.setTranslucent(true);
        }
        StatusBar.setBarStyle('dark-content')
        StatusBar.setHidden(false);
    }, []);

    const Stack = createNativeStackNavigator();

    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: 'white'
        }
    };
    
    return (
        <SafeAreaProvider>
            <I18nextProvider i18n={i18n}>
                
                <NavigationContainer theme={theme}>
                    <Stack.Navigator
                        initialRouteName="Splash"
                        screenOptions={{
                            headerShown: false,
                        }}>
                        <Stack.Screen
                            name="Splash"
                            component={Splash}
                        />
                        <Stack.Screen
                            name="Onboarding"
                            component={Onboarding}
                        />
                        <Stack.Screen
                            name="Login"
                            component={Login}
                        />

                        <Stack.Screen
                            name="SignUp"
                            component={SignUp}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </I18nextProvider>
        </SafeAreaProvider>
    );
}

export default App;
