import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';
import SearchBar from '../components/SearchBar';
import NavOptions from '../components/NavOptions';
import NavFavourites from '../components/NavFavourites';
import {setOrigin} from '../slices/navSlice';
import {auth} from '../config/firebase';
import Icon from 'react-native-vector-icons/MaterialIcons';
function HomeScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  // Function to handle logout
  const handleLogout = async () => {
    try {
      await auth.signOut(); // Sign out the user
      // You can add additional logic here if needed
    } catch (error) {
      console.log(error.message);
    }
  };

  const displayName = route.params?.displayName || '';

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-4 pt-8`}>
        <View style={tw`flex-row justify-between items-center`}>
          <Image
            style={{width: 115, height: 40}}
            source={require('../assets/uber.png')}
          />
          <TouchableOpacity
            onPress={handleLogout}
            style={tw`flex-row rounded-full`}>
            <Text style={tw`text-base text-black pr-1`}>{displayName}</Text>
            <Icon name="logout" size={28} color="#000000" />
          </TouchableOpacity>
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
