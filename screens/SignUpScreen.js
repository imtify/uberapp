import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {auth} from '../config/firebase';

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {displayName: name});
      navigation.navigate('HomeScreen', {displayName: name});
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <SafeAreaView style={[tw`flex-1 bg-white`]}>
      <ScrollView contentContainerStyle={tw`flex-1`}>
        <View style={tw`flex-1 justify-around`}>
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
                value={name}
                onChangeText={value => setName(value)}
                placeholder="Enter Name"
              />
              <Text style={tw`text-gray-700 mb-1`}>Email Address</Text>
              <TextInput
                style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3`}
                value={email}
                onChangeText={value => setEmail(value)}
                placeholder="Enter Email"
              />
              <Text style={tw`text-gray-700 mb-1`}>Password</Text>
              <TextInput
                style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7`}
                secureTextEntry
                value={password}
                onChangeText={value => setPassword(value)}
                placeholder="Enter Password"
              />
              <TouchableOpacity
                style={[tw`py-3 rounded-xl`, {backgroundColor: '#023020'}]}
                onPress={handleSubmit}>
                <Text
                  style={tw`text-xl font-bold text-center text-white opacity-90`}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={tw`justify-center items-center`}>
            <Text style={tw`text-black font-semibold`}>
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={tw`text-xl font-semibold text-gray-800`}>
                {' '}
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
