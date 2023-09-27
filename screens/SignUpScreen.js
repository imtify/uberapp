import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {auth} from '../config/firebase';
import {useDispatch} from 'react-redux';
import {setCurrentUser} from '../slices/authSlice';
import Animated, {
  FadeInUp,
  FadeInDown,
  FlipInEasyX,
} from 'react-native-reanimated';

export default function SignUpScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser.displayName, {displayName: name});

      dispatch(setCurrentUser(auth.currentUser.displayName));

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
            <Animated.Image
              entering={FadeInUp.delay(200).duration(1000).springify()}
              source={require('../assets/images/signup.png')}
              style={{width: 165, height: 110}}
            />
          </View>
          <View>
            <Animated.Text
              entering={FadeInUp.duration(1000).springify()}
              className="text-black text-2xl font-semibold text-center">
              Sign Up
            </Animated.Text>
            <View style={tw`p-4`}>
              <Animated.View entering={FadeInDown.duration(2000).springify()}>
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
              </Animated.View>
              <Animated.View
                entering={FlipInEasyX.delay(200).duration(2000).springify()}>
                <TouchableOpacity
                  style={[tw`py-3 rounded-xl`, {backgroundColor: '#023020'}]}
                  onPress={handleSubmit}>
                  <Text style={tw`text-xl font-bold text-center text-white`}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </Animated.View>
            </View>
          </View>
          <View style={tw`justify-center items-center`}>
            <Text style={tw`text-black font-semibold`}>
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={tw`text-xl font-semibold text-gray-800`}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
