import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {setOrigin, setDestination} from '../slices/navSlice';
import {useDispatch} from 'react-redux';

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <GooglePlacesAutocomplete
      placeholder="Your Location"
      onPress={(data, details = null) => {
        dispatch(
          setOrigin({
            location: details.geometry.location,
            description: data.description,
          }),
        );
        dispatch(setDestination(null));
      }}
      fetchDetails={true}
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
