import {View, Text, Touchable, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const data = [
  {
    id: '123',
    icon: 'work',
    location: 'Office',
    destination: 'DOHS Baridhara, Dhaka, Bangladesh',
  },
  {
    id: '456',
    icon: 'home',
    location: 'Home',
    destination: 'Pallabi, Dhaka, Bangladesh',
  },
];

const NavFavourites = () => {
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
            style={{
              flexDirection: 'row',
              columnGap: 8,
              alignItems: 'center',
              marginVertical: 4,
              paddingVertical: 12,
            }}>
            <Icon
              style={{
                backgroundColor: '#023020',
                borderRadius: 15,
                padding: 8,
              }}
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
