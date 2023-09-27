// DrawerNavigator.js
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {View, Text, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import BottomTabNavigator from './BottomTabNavigator';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {auth} from '../config/firebase';
import {selectCurrentUser} from '../slices/authSlice';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  const navigation = useNavigation();
  const currentUser = useSelector(selectCurrentUser);

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <DrawerContentScrollView {...props}>
      {/* Drawer Header */}
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          style={tw`flex-row items-center p-2`}>
          <Icon name="person" size={28} color="#000000" />
          <Text style={tw`text-base text-black ml-2`}>
            {currentUser ? currentUser : 'User'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Drawer Items */}
      <DrawerItem
        label="Home"
        onPress={() => navigation.navigate('HomeScreen')}
      />
      <DrawerItem
        label="Map"
        onPress={() => navigation.navigate('MapScreen')}
      />

      {/* Logout */}
      <DrawerItem
        label="Logout"
        onPress={handleLogout}
        icon={() => <Icon name="logout" size={28} color="#000000" />}
      />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{headerShown: false}} // You can customize the label if needed
      />
      <Drawer.Screen
        name="MapScreen"
        component={MapScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
