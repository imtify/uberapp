import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import SearchBar from '../components/SearchBar';
import NavOptions from '../components/NavOptions';
import NavFavourites from '../components/NavFavourites';
import {auth} from '../config/firebase';
import {setOrigin} from '../slices/navSlice';
import {selectCurrentUser} from '../slices/authSlice';
import Animated, {FadeInUp} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Import the BottomTabNavigator component
import BottomTabNavigator from '../Navigator/BottomTabNavigator';

function HomeScreen() {
  const navigation = useNavigation();
  const currentUser = useSelector(selectCurrentUser);

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(currentUser);

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-4 pt-8`}>
        <View style={tw`flex-row justify-between items-center`}>
          <Animated.Image
            entering={FadeInUp.delay(200).duration(2000).springify()}
            style={{width: 115, height: 40}}
            source={require('../assets/uber.png')}
          />
          <View className="flex-row">
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={tw`flex-row rounded-full`}>
              <Text style={tw`text-base text-black pr-1`}>
                {currentUser ? currentUser : 'User'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleLogout}
              style={tw`flex-row rounded-full`}>
              <Icon name="logout" size={28} color="#000000" />
            </TouchableOpacity>
          </View>
        </View>
        <SearchBar
          placeholder={'Your Location'}
          location={setOrigin}
          navigate={'MapScreen'}
        />
        <NavOptions navigation={navigation} />
        <NavFavourites location={setOrigin} navigate={'MapScreen'} />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
