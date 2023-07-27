import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    id: 'uber-X-123',
    title: 'UberX',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: 'uber-XL-456',
    title: 'UberXL',
    multiplier: 1,
    image: 'https://links.papareact.com/5w8',
    screen: 'EatsScreen',
  },
  {
    id: 'uber-Premium-789',
    title: 'UberPremium',
    multiplier: 1,
    image: 'https://links.papareact.com/7pf',
    screen: 'EatsScreen',
  },
];

const RideOptionsCard = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('NavigateCard')}
          style={{position: 'absolute', top: 18, left: 6, zIndex: 10}}>
          <Icon size={24} name="arrow-back" color="black" />
        </TouchableOpacity>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '500',
            color: '#343434',
            marginTop: 20,
          }}>
          Select a Ride
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
