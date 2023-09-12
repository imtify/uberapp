import React from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';

export default function SignUpScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[tw`flex-1 bg-white`]}>
      <View style={tw`flex-1 flex justify-around`}>
        <View style={tw`flex-row justify-start`}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={tw`bg-green-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4`}>
            <ArrowLeftIcon size={20} color="black" />
          </TouchableOpacity>
        </View>

        <View style={tw`flex-row justify-center`}>
          <Image
            source={require('../assets/images/signup.png')}
            style={{width: 165, height: 110}}
          />
        </View>

        <View>
          <Text style={tw`text-black text-2xl font-semibold text-center`}>
            Sign Up
          </Text>
          <View style={tw`p-4`}>
            <Text style={tw`text-gray-700 mb-1`}>Full Name</Text>
            <TextInput
              style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3`}
              value="john snow"
              placeholder="Enter Name"
            />

            <Text style={tw`text-gray-700 mb-1`}>Email Address</Text>
            <TextInput
              style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3`}
              value="john@gmail.com"
              placeholder="Enter Email"
            />

            <Text style={tw`text-gray-700 mb-1`}>Password</Text>
            <TextInput
              style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7`}
              secureTextEntry
              value="test12345"
              placeholder="Enter Password"
            />

            <TouchableOpacity style={tw`py-3 bg-green-400 rounded-xl`}>
              <Text style={tw`text-xl font-bold text-center text-gray-700`}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={tw`flex-row justify-center`}>
          <Text style={tw`text-black font-semibold`}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={tw`font-semibold text-green-400`}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
