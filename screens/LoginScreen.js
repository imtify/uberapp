import React from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1 flex justify-around my-4`}>
        <View style={tw`flex-row justify-start`}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[
              tw`p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-2`,
              {backgroundColor: '#023020'},
            ]}>
            <ArrowLeftIcon size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-center`}>
          <Image
            source={require('../assets/images/login.png')}
            style={{width: 200, height: 200}}
          />
        </View>

        <View>
          <Text style={tw`text-black text-2xl font-semibold text-center`}>
            Login
          </Text>
          <View style={tw`p-4`}>
            <Text style={tw`text-gray-700 mb-1`}>Email Address</Text>
            <TextInput
              style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3`}
              placeholder="email"
              value="imti.bh@gmail.com"
            />

            <Text style={tw`text-gray-700 mb-1`}>Password</Text>
            <TextInput
              style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl`}
              secureTextEntry
              placeholder="password"
              value="test12345"
            />

            <TouchableOpacity style={tw`flex items-center mt-2`}>
              <Text style={tw`text-gray-700 mb-3`}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[tw`py-3 rounded-xl`, {backgroundColor: '#023020'}]}
              onPress={() => navigation.navigate('HomeScreen')}>
              <Text
                style={tw`text-xl font-bold text-center text-white opacity-90`}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={tw`text-xl text-gray-700 font-bold text-center py-2`}>
          Or
        </Text>

        <View style={[tw`flex-row justify-center`, {columnGap: 16}]}>
          <TouchableOpacity style={tw`p-2 bg-gray-100 rounded-2xl`}>
            <Image
              source={require('../assets/icons/google.png')}
              style={tw`w-10 h-10`}
            />
          </TouchableOpacity>
          <TouchableOpacity style={tw`p-2 bg-gray-100 rounded-2xl`}>
            <Image
              source={require('../assets/icons/apple.png')}
              style={tw`w-10 h-10`}
            />
          </TouchableOpacity>
          <TouchableOpacity style={tw`p-2 bg-gray-100 rounded-2xl`}>
            <Image
              source={require('../assets/icons/facebook.png')}
              style={tw`w-10 h-10`}
            />
          </TouchableOpacity>
        </View>

        <View style={tw`flex-row justify-center mt-7`}>
          <Text style={tw`text-gray-500 font-semibold`}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={tw`font-semibold text-black`}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
