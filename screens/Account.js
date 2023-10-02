import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, FONTS} from '../constants/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Account = ({navigation}) => {
  const accountItems = [
    {
      icon: 'settings',
      text: 'Settings',
    },
    {
      icon: 'message',
      text: 'Message',
    },

    {
      icon: 'attach-money',
      text: 'Earn by Driving or Delivering',
    },
    {
      icon: 'business-center',
      text: 'Business Hub',
    },
    {
      icon: 'manage-accounts',
      text: 'Manage Uber Account',
    },
    {
      icon: 'help',
      text: 'Legal',
    },
  ];

  const renderSettingsItem = ({icon, text}) => (
    <TouchableOpacity
      onPress={() => {}}
      style={{
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 8,
        paddingLeft: 12,
        backgroundColor: COLORS.gray,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}>
        <Icon name={icon} size={24} color="black" />
        <Text
          style={{
            marginLeft: 36,
            ...FONTS.semiBold,
            fontWeight: 600,
            fontSize: 16,
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="keyboard-arrow-left" size={28} color={COLORS.black} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 12,
          justifyContent: 'space-between',
          columnGap: 4,
        }}>
        <View
          style={{
            flexDirection: 'column',
            rowGap: 4,
          }}>
          <Text style={{fontSize: 32, fontWeight: '500'}}>Imtiaz Limon</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              padding: 6,
              backgroundColor: COLORS.grey,
              width: 60,
              borderRadius: 10,
            }}>
            <Icon name="star" size={18} color={COLORS.black} />
            <Text>4.5</Text>
          </View>
        </View>
        <Icon name="account-circle" size={72} color={COLORS.black} />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 12,
          marginVertical: 12,
          columnGap: 8,
        }}>
        <View
          style={{
            backgroundColor: COLORS.grey,
            padding: 24,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="help-center" size={48} color={COLORS.black} />
          <Text style={{fontSize: 16, color: COLORS.black}}>Help</Text>
        </View>

        <View
          style={{
            backgroundColor: COLORS.grey,
            padding: 24,
            borderRadius: 15,
            alignItems: 'center',
          }}>
          <Icon name="wallet" size={48} color={COLORS.black} />
          <Text style={{fontSize: 16, color: COLORS.black}}>Wallet</Text>
        </View>
        <View
          style={{
            backgroundColor: COLORS.grey,
            padding: 24,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="local-activity" size={48} color={COLORS.black} />
          <Text style={{fontSize: 16, color: COLORS.black}}>Activity</Text>
        </View>
      </View>

      <ScrollView style={{marginHorizontal: 12}}>
        <View>
          <Text></Text>
        </View>
        {/* App Settings */}
        <View style={{marginBottom: 12}}>
          <Text style={{...FONTS.h4, marginVertical: 12}}>App Settings</Text>
          <View
            style={{
              borderRadius: 12,
              backgrounColor: COLORS.gray,
            }}>
            {accountItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;
