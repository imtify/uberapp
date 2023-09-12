import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[tw`flex-1`, {backgroundColor: 'white'}]}>
      <View style={tw`flex-1 flex justify-around my-4`}>
        <Text style={tw`text-black font-bold text-4xl text-center`}>
          Welcome to Uber
        </Text>
        <View style={tw`flex-row justify-center`}>
          <Image
            source={require('../assets/images/Uber.jpg')}
            style={{width: 350, height: 350}}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUpScreen')}
            style={[tw`py-3 mx-7 rounded-xl`, {backgroundColor: '#023020'}]}>
            <Text
              style={tw`text-xl font-bold text-center text-white opacity-90`}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <View
            style={[tw`flex justify-center items-center mt-2`, {rowGap: 4}]}>
            <Text style={tw`text-black font-semibold`}>
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={tw`text-xl font-semibold text-gray-800`}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
