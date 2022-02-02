import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, SafeAreaView, Platform, Dimensions } from 'react-native';
import { Block, theme } from 'galio-framework';
import { DrawerItem as DrawerCustomItem } from '../components/Components/index';
import { useSelector } from 'react-redux';
import MenuLogo from '../components/SupportingComponent/MenuLogo/MenuLogo';
import { argonTheme } from '../constants';

const { height } = Dimensions.get('window');
console.log('height', height);

function CustomDrawerContent ({ drawerPosition, navigation, profile, focused, state, color, ...rest }) {
  const userApplicationStatusData = useSelector((state) => state.getUserApplicationStatus);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [chatStatus, setChatStatus] = useState('');
  const [checkInStatus, setcheckInStatus] = useState('');
  const [screenName, setScreenName] = useState([]);

  useEffect(() => {
    if (Object.keys(userApplicationStatusData).length > 0) {
      setFirstName(userApplicationStatusData.accountfirstname);
      setLastName(userApplicationStatusData.accountlastname);
      setChatStatus(userApplicationStatusData.permissions.CHAT);
      setcheckInStatus(userApplicationStatusData.permissions.CHECK_IN_VOICE);
    }
  }, [userApplicationStatusData]);

  const allScreens = [
    'Dashboard',
    'Calendar',
    'Check In',
    'Chat',
    'Notifications',
    'Payments',
    'My Documents',
    'Resources'
    // 'Privacy Policy'
    // 'View account'
    // 'Logout'
  ];

  const WithoutChatScreens = [
    'Dashboard',
    'Calendar',
    'Check In',
    'Notifications',
    'Payments',
    'My Documents',
    'Resources'
    // 'Privacy Policy'
    // 'View account'
    // 'Logout'
  ];

  const WithoutCheckinScreens = [
    'Dashboard',
    'Calendar',
    'Chat',
    'Notifications',
    'Payments',
    'My Documents',
    'Resources'
    // 'Privacy Policy'
    // 'View account'
    // 'Logout'
  ];

  const WithoutCheckinAndChatScreens = [
    'Dashboard',
    'Calendar',
    'Notifications',
    'Payments',
    'My Documents',
    'Resources'
    // 'Privacy Policy'
    // 'View account'
    // 'Logout'
  ];

  useEffect(() => {
    if (chatStatus === true && checkInStatus === true) {
      setScreenName(allScreens);
    } else if (chatStatus === true && checkInStatus === false) {
      setScreenName(WithoutCheckinScreens);
    } else if (chatStatus === false && checkInStatus === true) {
      setScreenName(WithoutChatScreens);
    } else if (chatStatus === false && checkInStatus === false) {
      setScreenName(WithoutCheckinAndChatScreens);
    }
  }, [chatStatus, checkInStatus]);

  return (
    <SafeAreaView flex={1}>
      <Block
        style={styles.container}
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
        <Block flex={0.05} style={styles.header}>
          <MenuLogo />
        </Block>
        <Block flex={Platform.OS === 'ios' ? 0.90 : 0.85} style={{ paddingLeft: 0, paddingRight: 0 }}>
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            {screenName.map((item, index) => {
              return (
                <DrawerCustomItem
                  title={item}
                  key={index}
                  navigation={navigation}
                  focused={state.index === index}
                  color='rgba(0,0,0,0.5)'
                />
              );
            })}
          </ScrollView>
        </Block>
        <Block row flex={height > 750 ? 0.10 : 0.10} style={styles.viewAccount}>
          <Block flex={0.1} style={{ paddingVertical: '4%', marginLeft: '7%' }}>
            <Block style={styles.circleStyle}>
              <Text style={styles.textStyle}>{firstName.charAt(0)} {lastName.charAt(0)}</Text>
            </Block>
          </Block>
          <Block flex={0.9} style={{ paddingVertical: '4%', marginLeft: '-13%' }}>
            <Text color='#8898AA' style={{ marginBottom: '-6%', marginLeft: '23%' }}>{firstName} {lastName}</Text>
            <DrawerCustomItem color='#56A5EB' title='View account' navigation={navigation} />
          </Block>
        </Block>
      </Block>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  viewAccount: {
    backgroundColor: '#f9f9fc'
  },
  header: {
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 2,
    justifyContent: 'center'
  },
  circleStyle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: argonTheme.COLORS.BUTTONFILLED
  },
  textStyle: {
    fontSize: 16,
    alignSelf: 'center',
    marginTop: '20%',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CustomDrawerContent;
