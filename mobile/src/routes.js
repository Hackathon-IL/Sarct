import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ShowNew from './pages/ShowNew';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function NewsPages() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="IndexNews" component={ShowNew} />
      <Stack.Screen name="ShowNews" component={View} />
    </Stack.Navigator>
  )
}

export default function Routes() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'ear-hearing';
          } else if (route.name === 'News') {
            iconName = 'newspaper';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#D71B3B',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" options={{ title: 'Início' }} component={View} />
      <Tab.Screen name="News" options={{ title: 'Notícias' }} component={NewsPages} />
    </Tab.Navigator>
  );
}
