// DrawerNavigator.js
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import BottomTabNavigator from './BottomTabNavigator';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {auth} from '../config/firebase';
import {selectCurrentUser} from '../slices/authSlice';
import EatsScreen from '../screens/EatsScreen';
import NavFavourites from '../components/NavFavourites';
import Settings from '../screens/Settings';

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
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <ImageBackground
          source={require('../assets/images/Cover.png')}
          style={{padding: 20}}>
          <Image
            source={require('../assets/images/profile.jpg')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
            {currentUser ? currentUser : 'User'}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Roboto-Regular',
                marginRight: 5,
              }}>
              Platinum User
            </Text>
            <Icon name="currency-bitcoin" size={14} color="black" />
          </View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="share" size={22} color="black" />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 8,
              }}>
              Refer to a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="exit-to-app" size={22} color="black" />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 8,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
          drawerIcon: () => <Icon name="home" size={22} color="black" />,
        }}
      />
      <Drawer.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerShown: false,
          drawerIcon: () => <Icon name="map" size={22} color="black" />,
        }}
      />
      <Drawer.Screen
        name="Foods"
        component={EatsScreen}
        options={{
          headerShown: false,
          drawerIcon: () => <Icon name="fastfood" size={22} color="black" />,
        }}
      />
      <Drawer.Screen
        name="My Locations"
        component={NavFavourites}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <Icon name="location-history" size={22} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          drawerIcon: () => <Icon name="settings" size={22} color="black" />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
