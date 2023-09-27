import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from '../store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MapScreen from '../screens/MapScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import EatsScreen from '../screens/EatsScreen';
import useAuth from '../hook/useAuth';
import DrawerNavigator from './DrawerNavigator';

const AppNavigator = () => {
  const {user} = useAuth();
  const Stack = createStackNavigator();
  if (user) {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaProvider>
            <StatusBar barStyle="dark-content" backgroundColor={'white'} />
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={DrawerNavigator} // Use DrawerNavigator as the component for HomeDrawer
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="EatsScreen"
                component={EatsScreen}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
    );
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaProvider>
            <StatusBar barStyle="dark-content" backgroundColor={'white'} />
            <Stack.Navigator>
              <Stack.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
    );
  }
};

export default AppNavigator;
