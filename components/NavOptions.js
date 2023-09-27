import {FlatList, Text, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import {selectOrigin} from '../slices/navSlice';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    id: '123',
    title: 'Get a Ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Order Food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen',
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 mt-8 w-40`}
            disabled={!origin}>
            <View style={{opacity: !origin ? 0.3 : 1}}>
              <Image style={tw`w-32 h-28 mx-auto`} source={{uri: item.image}} />
              <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
              <Icon
                style={tw`p-1 bg-black rounded-full w-8 mt-4`}
                size={24}
                name="arrow-forward"
                color="white"
              />
            </View>
          </TouchableOpacity>
        )}
        horizontal
      />
    </View>
  );
};

export default NavOptions;
