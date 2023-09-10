import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import Map from '../components/Map';
import tw from 'tailwind-react-native-classnames';
import {createStackNavigator} from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const MapScreen = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  return (
    <View style={tw`flex-1`}>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        style={tw`absolute top-4 left-4 z-10`}>
        <Icon name="menu" size={24} color="#023020" />
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
