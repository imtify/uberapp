import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
import {useState} from 'react';
import {selectTravelTimeInformation} from '../slices/navSlice';
import {useSelector} from 'react-redux';
import tw from 'tailwind-react-native-classnames';

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
    multiplier: 1.5,
    image: 'https://links.papareact.com/5w8',
    screen: 'EatsScreen',
  },
  {
    id: 'uber-Premium-789',
    title: 'UberPremium',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf',
    screen: 'EatsScreen',
  },
];

const SURGE_CHARGE_RATE = 3;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('NavigateCard')}
          style={tw`absolute top-4 left-4 z-10`}>
          <Icon size={24} name="arrow-back" color="black" />
        </TouchableOpacity>
        <Text style={tw`text-center text-xl font-semibold text-gray-700 mt-4`}>
          Select a Ride - {travelTimeInformation?.distance.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={[
              tw`flex-row items-center justify-between px-4`,
              {
                backgroundColor:
                  item.id === selected?.id ? '#eae7e7' : 'transparent',
              },
            ]}>
            <Image style={tw`w-24 h-20`} source={{uri: item.image}} />
            <View style={{flexDirection: 'column'}}>
              <Text style={tw`text-base font-semibold text-gray-700`}>
                {item.title}
              </Text>
              <Text>{travelTimeInformation?.duration.text}</Text>
            </View>
            <Text>
              {new Intl.NumberFormat('en-gb', {
                style: 'currency',
                currency: 'bdt',
              }).format(
                (travelTimeInformation?.duration.value *
                  SURGE_CHARGE_RATE *
                  item.multiplier) /
                  10,
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      {selected && (
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-2 mx-4 my-6`}>
          <Text style={tw`text-center text-base font-normal text-white`}>
            You choose {selected.title} for your ride.
          </Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default RideOptionsCard;
