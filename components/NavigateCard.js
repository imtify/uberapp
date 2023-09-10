import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavFavourites from './NavFavourites';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {setDestination} from '../slices/navSlice';
import SearchBar from './SearchBar';
import tw from 'tailwind-react-native-classnames';

const NavigateCard = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text
        style={tw`text-center text-xl font-semibold py-1 mt-4 text-green-800`}>
        Good Morning Imtiaz
      </Text>
      <View style={tw`mx-4`}>
        <View>
          <SearchBar
            placeholder={'Where to Go'}
            location={setDestination}
            navigate={'RideOptionsCard'}
          />
        </View>
        <NavFavourites location={setDestination} navigate={'RideOptionsCard'} />
      </View>
      <View style={tw`flex-row justify-evenly`}>
        <TouchableOpacity
          onPress={() => navigation.navigate('RideOptionsCard')}
          style={[
            tw`flex-row items-center rounded-2xl p-2 w-20`,
            {backgroundColor: '#023020'},
          ]}>
          <Icon size={24} name="directions-car" color="white" />
          <Text style={{color: 'white'}}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tw`flex-row items-center bg-green-900 rounded-2xl p-2 w-20`,
            {backgroundColor: '#023020'},
          ]}>
          <Icon size={24} name="fastfood" color="white" />
          <Text style={{color: 'white'}}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;
