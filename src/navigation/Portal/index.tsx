import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList, RootTabScreenProps } from 'navigation/types';
import useColorScheme from 'hooks/useColorScheme';
import TabOneScreen from 'screens/TabOneScreen';
import { FontAwesome } from '@expo/vector-icons';
import TabTwoScreen from 'screens/TabTwoScreen';
import * as React from 'react';
import { Routes } from 'constants/routes';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export const PortalTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator initialRouteName={Routes.TabOne}>
      <BottomTab.Screen
        name={Routes.TabOne}
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        })}
      />
      <BottomTab.Screen
        name={Routes.TabTwo}
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
