import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import {COLORS} from '../constants/theme';

const data = [
  {
    id: '123',
    icon: 'work',
    location: 'Office',
    destination:
      'The Delta Group (Dhaka Office), Road Number 6, Dhaka, Bangladesh',
    lat: 23.8127783,
    lng: 90.4139617,
  },
  {
    id: '456',
    icon: 'home',
    location: 'Home',
    destination: 'Rupnagor Police Station, Road Number 4, Dhaka, Bangladesh',
    lat: 23.8173654,
    lng: 90.36009659999999,
  },
];

const NavFavourites = ({location, navigate}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={{marginVertical: 16}}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => (
          <View style={{backgroundColor: 'black', height: 0.5}} />
        )}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              dispatch(
                location({
                  location: {
                    lat: item.lat,
                    lng: item.lng,
                  },
                  description: item.destination,
                }),
              );
              navigation.navigate(navigate);
            }}
            style={[tw`flex-row items-center w-80 py-3 px-4`, {columnGap: 8}]}>
            <Icon
              style={[
                tw`bg-green-900 rounded-2xl p-2 mr-2`,
                {backgroundColor: COLORS.primary},
              ]}
              size={24}
              name={item.icon}
              color="white"
            />
            <View>
              <Text style={{color: '#1B1212'}}>{item.location}</Text>
              <Text style={{color: '#353935'}}>{item.destination}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NavFavourites;
