import {Platform, StatusBar} from "react-native";
import Unity, {UnityPlayerRefs} from "./util/Unity.tsx";
import React, {useEffect, useRef} from "react";
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {I18nextProvider} from "react-i18next";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {i18n} from "./i18n.config.ts";
import Onboarding from "./screen/Onboarding.tsx";
import Splash from "./screen/Splash.tsx";


function App(): React.JSX.Element {

    useEffect(() => {
        if (Platform.OS == 'android') {
            StatusBar.setBackgroundColor('transparent');
            StatusBar.setTranslucent(true);
        }
        StatusBar.setBarStyle('dark-content')
        StatusBar.setHidden(false);
    }, []);

    const unityPlayerRef = useRef<UnityPlayerRefs>(null);
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
                    </Stack.Navigator>
                </NavigationContainer>
            </I18nextProvider>
        </SafeAreaProvider>
    );
}

export default App;
