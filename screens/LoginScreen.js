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
import {useDispatch} from 'react-redux';
import {setCurrentUser} from '../slices/authSlice';
import Animated, {
  FadeInUp,
  FadeInDown,
  BounceInRight,
  FlipInEasyX,
} from 'react-native-reanimated';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      // After successful login, you can optionally fetch the updated user profile
      // and update the Redux store if needed.

      const user = auth.currentUser.displayName; // Get the current user
      dispatch(setCurrentUser(user));

      // You can also navigate to the HomeScreen or perform other actions here
      // ...
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
              <Animated.Image
                entering={FadeInUp.delay(200).duration(2000).springify()}
                source={require('../assets/images/login.png')}
                style={{width: 200, height: 200}}
              />
            </View>
            <View>
              <Animated.Text
                entering={FadeInUp.duration(2000).springify()}
                className="text-black text-2xl font-semibold text-center">
                Login
              </Animated.Text>

              <View style={tw`p-4`}>
                <Animated.View entering={FadeInDown.duration(2000).springify()}>
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
                </Animated.View>
                {error && (
                  <Text style={tw`text-red-500 text-center pt-2`}>
                    Email or Password you enter is wrong
                  </Text>
                )}
                <TouchableOpacity style={tw`flex items-center mt-2`}>
                  <Text style={tw`text-gray-700 mb-3`}>Forgot Password?</Text>
                </TouchableOpacity>

                <Animated.View
                  entering={FlipInEasyX.delay(200).duration(2000).springify()}>
                  <TouchableOpacity
                    style={[tw`py-3 rounded-xl`, {backgroundColor: '#023020'}]}
                    onPress={handleSubmit}>
                    <Text
                      style={tw`text-xl font-bold text-center text-white opacity-90`}>
                      Login
                    </Text>
                  </TouchableOpacity>
                </Animated.View>
              </View>
            </View>

            <Text style={tw`text-xl text-gray-700 font-bold text-center pb-2`}>
              Or
            </Text>

            <Animated.View
              entering={BounceInRight.delay(200).duration(2000).springify()}
              style={[tw`flex-row justify-center`, {columnGap: 16}]}>
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
            </Animated.View>

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
