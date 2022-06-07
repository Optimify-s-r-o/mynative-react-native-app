import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from 'navigation/types';
import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { Routes } from 'navigation/routes';
import Profile from 'screens/Portal/Profile';
import Settings from 'screens/Portal/Settings';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export const PortalTabNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName={Routes.Profile}>
      <BottomTab.Screen
        name={Routes.Profile}
        component={Profile}
        options={() => ({
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        })}
      />
      <BottomTab.Screen
        name={Routes.Settings}
        component={Settings}
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) => {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
};
