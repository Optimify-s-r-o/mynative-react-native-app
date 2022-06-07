import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from 'navigation/types';
import NotFoundScreen from 'screens/NotFoundScreen';
import ModalScreen from 'screens/ModalScreen';
import * as React from 'react';
import { AuthTabNavigator } from 'navigation/Auth';
import { PortalTabNavigator } from 'navigation/Portal';
import { Routes } from 'navigation/routes';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.Root} component={AuthTabNavigator} />
      <Stack.Screen name={Routes.Portal} component={PortalTabNavigator} />

      <Stack.Screen
        name={Routes.NotFound}
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />

      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name={Routes.Modal} component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
