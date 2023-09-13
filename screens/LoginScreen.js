import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <KeyboardAvoidingView
        style={tw`flex-1`}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 150}>
        <ScrollView contentContainerStyle={tw`flex justify-around`}>
          <View style={tw`flex justify-around`}>
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
                  placeholder="Email"
                  value={email}
                  onChangeText={value => setEmail(value)}
                />
                <Text style={tw`text-gray-700 mb-1`}>Password</Text>
                <TextInput
                  style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl`}
                  secureTextEntry
                  placeholder="Password"
                  value={password}
                  onChangeText={value => setPassword(value)}
                />
                {error && (
                  <Text style={tw`text-red-500 text-center pt-2`}>
                    Email or Password you enter is wrong
                  </Text>
                )}
                <TouchableOpacity style={tw`flex items-center mt-2`}>
                  <Text style={tw`text-gray-700 mb-3`}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[tw`py-3 rounded-xl`, {backgroundColor: '#023020'}]}
                  onPress={handleSubmit}>
                  <Text
                    style={tw`text-xl font-bold text-center text-white opacity-90`}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <Text style={tw`text-xl text-gray-700 font-bold text-center pb-2`}>
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

            <View style={tw`justify-center items-center mt-4`}>
              <Text style={tw`text-gray-500 font-semibold`}>
                Don't have an account?
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignUpScreen')}>
                <Text style={tw`text-xl font-semibold text-black`}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
