import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage } from "../../screens/Home";
import React from "react";
import {AuthStackParamList} from "../../navigation/types";
import { Routes } from '../../constants/routes';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthTabNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={Routes.SignIn} component={HomePage} />
        </Stack.Navigator>
    );
};
