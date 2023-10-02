import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import {COLORS} from '../constants/theme';
import Account from '../screens/Account';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <Icon name="home" color={COLORS.primary} size={focused ? 36 : 32} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MapTab"
        component={MapScreen}
        options={{
          tabBarLabel: 'My Trip',
          tabBarIcon: ({focused}) => (
            <Icon name="map" color={COLORS.primary} size={focused ? 36 : 32} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="AccountTab"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({focused}) => (
            <Icon
              name="account-circle"
              color={COLORS.primary}
              size={focused ? 36 : 32}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
