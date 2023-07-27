import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {setDestination} from '../slices/navSlice';
import NavFavourites from './NavFavourites';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          fontWeight: '500',
          paddingVertical: 6,
          marginTop: 8,
          color: '#301934',
        }}>
        Good Morning Imtiaz
      </Text>
      <View style={{marginHorizontal: 16, marginVertical: 12}}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to Go?"
            fetchDetails={true}
            returnKeyType={'search'}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                }),
              );
              navigation.navigate('RideOptionsCard');
            }}
            query={{
              key: 'AIzaSyBg4DL_QkO3H89vVVdlzlJ7ZrAiGbDmj1w',
              language: 'en',
            }}
            enablePoweredByContainer={false}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={300}
            styles={{
              container: {
                flex: 0,
              },
              textInput: {
                backgroundColor: '#DDDDDF',
                paddingLeft: 10,
                fontSize: 16,
              },
            }}
          />
        </View>
        <NavFavourites />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 24,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('RideOptionsCard')}
          style={{
            flexDirection: 'row',
            columnGap: 4,
            alignItems: 'center',
            backgroundColor: '#023020',
            borderRadius: 20,
            padding: 10,
            width: 80,
          }}>
          <Icon size={24} name="directions-car" color="white" />
          <Text style={{color: 'white'}}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            columnGap: 4,
            alignItems: 'center',
            backgroundColor: '#023020',
            borderRadius: 20,
            padding: 10,
            width: 80,
          }}>
          <Icon size={24} name="fastfood" color="white" />
          <Text style={{color: 'white'}}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;
