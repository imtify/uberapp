import React from 'react';
import {Image} from 'react-native';
import {View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import SearchBar from '../components/SearchBar';
import NavFavourites from '../components/NavFavourites';
import {setOrigin} from '../slices/navSlice';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-4 pt-8`}>
        <Image
          style={{width: 115, height: 40}}
          source={require('../assets/uber.png')}
        />
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
