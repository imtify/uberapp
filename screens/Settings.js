import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, FONTS} from '../constants/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Settings = ({navigation}) => {
  const accountItems = [
    {
      icon: 'home',
      text: 'Add Home',
    },
    {
      icon: 'work',
      text: 'Add Work',
    },

    {
      icon: 'notifications-none',
      text: 'Notifications',
    },
    {icon: 'lock-outline', text: 'Privacy'},
  ];

  const safetyItems = [
    {
      icon: 'credit-card',
      text: 'Manage Trusted Contacts',
    },
    {icon: 'help-outline', text: 'Ride Check'},
  ];

  const actionsItems = [
    {
      icon: 'outlined-flag',
      text: 'Report a problem',
    },
    {icon: 'people-outline', text: 'Add Account'},
    {icon: 'logout', text: 'Log out'},
  ];

  const renderSettingsItem = ({icon, text}) => (
    <TouchableOpacity
      onPress={() => {}}
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
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
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}>
        <Icon name="keyboard-arrow-right" size={24} color="black" />
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

        <Text
          style={{
            fontSize: 32,
            fontWeight: '500',
            textAlign: 'center',
            marginBottom: 12,
          }}>
          Settings
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 8,
          columnGap: 4,
        }}>
        <Icon name="account-circle" size={72} color={COLORS.black} />
        <View
          style={{
            flexDirection: 'column',
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Imtiaz Limon</Text>
          <Text>+8801719290893</Text>
          <Text>imtiazlmn@gmail.com</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
          }}>
          <Icon name="keyboard-arrow-right" size={24} color="black" />
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

        {/* Safety settings */}

        <View style={{marginBottom: 12}}>
          <Text style={{...FONTS.h4, marginVertical: 10}}>Safety </Text>
          <View
            style={{
              borderRadius: 12,
              backgrounColor: COLORS.gray,
            }}>
            {safetyItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>

        {/* Actions Settings */}

        <View style={{marginBottom: 12}}>
          <Text style={{...FONTS.h4, marginVertical: 10}}>Actions</Text>
          <View
            style={{
              borderRadius: 12,
              backgrounColor: COLORS.gray,
            }}>
            {actionsItems.map((item, index) => (
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

export default Settings;
