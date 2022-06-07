import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from 'screens/Auth/SignIn';
import SignUp from 'screens/Auth/SignUp';
import ForgottenPassword from 'screens/Auth/ForgottenPassword';
import React from 'react';
import { AuthStackParamList } from 'navigation/types';
import { Routes } from 'navigation/routes';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthTabNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.SignIn} component={SignIn} />
      <Stack.Screen name={Routes.SignUp} component={SignUp} />
      <Stack.Screen name={Routes.ForgottenPassword} component={ForgottenPassword} />
    </Stack.Navigator>
  );
};
