import React, {useEffect, useState} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {setDestination} from '../slices/navSlice';
import {useDispatch} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';

const SearchBar = ({placeholder, location, navigate}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setCurrentLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          description: 'Current Location',
        });
      },
      error => {
        console.log(error);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  return (
    <GooglePlacesAutocomplete
      placeholder={placeholder}
      value={currentLocation?.description || ''}
      onPress={(data, details = null) => {
        dispatch(
          location({
            location: details.geometry.location,
            description: data.description,
          }),
        );
        dispatch(setDestination(null));
        // when enter location in SearchBar from HomeScreen didn't navigate to MapScreen directly
        if (navigate === 'RideOptionsCard') {
          navigation.navigate(navigate);
        }
      }}
      fetchDetails={true}
      query={{
        key: 'AIzaSyC1WtYykLeqWqpf-IG8eGFFPC4aBYdwnqw',
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
          borderWidth: 0.5,
          borderRadius: 10,
          borderColor: '#999999',
          marginTop: 20,
          paddingLeft: 12,
        },
      }}
    />
  );
};

export default SearchBar;
