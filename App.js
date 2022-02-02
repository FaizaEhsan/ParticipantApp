import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification, { Importance } from 'react-native-push-notification';
import { useDispatch } from 'react-redux';
import { withPendoRN } from 'rn-pendo-sdk';

import LoginScreen from './src/components/Screens/LoginScreen';
import PrivacyPolicyScreen from './src/components/Screens/PrivacyPolicyScreen';
import PasscodeScreen from './src/components/Screens/PasscodeScreen';
import RegistrationScreen from './src/components/Screens/RegistrationScreen';
import ResetPasswordScreen from './src/components/Screens/ResetPasswordScreen';
import EmailSentScreen from './src/components/Screens/EmailSentScreen';
import NewPasswordScreen from './src/components/Screens/NewPasswordScreen';

import Header from './src/components/Components/Header';
import { deviceToken } from './src/redux/Actions/index';

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName='LoginScreen'>
      <Stack.Screen
        name='LoginScreen'
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='RegistrationScreen'
        component={RegistrationScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='ResetPasswordScreen'
        component={ResetPasswordScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              shadow
              back
              title=''
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: '#FFFFFF' }
        }}
      />
      <Stack.Screen
        name='EmailSentScreen'
        component={EmailSentScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='NewPasswordScreen'
        component={NewPasswordScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='PrivacyPolicyScreen'
        component={PrivacyPolicyScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              shadow
              back
              title=''
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: '#FFFFFF' }
        }}
      />
      <Stack.Screen
        name='PasscodeScreen'
        component={PasscodeScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

const App = (props) => {
  const dispatch = useDispatch();
  const navigationRef = useRef();

  PushNotification.configure({
    onRegister: function (token) {
      console.log('TOKEN:', token);
      dispatch(deviceToken(token.token));
    },
    onNotification: function (notification) {
      console.log('NOTIFICATION:', notification);
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
    onAction: function (notification) {
      console.log('ACTION:', notification.action);
      console.log('NOTIFICATION:', notification);
    },
    onRegistrationError: function (err) {
      console.error(err.message, err);
    },
    permissions: {
      alert: true,
      badge: true,
      sound: true
    },
    popInitialNotification: true,
    requestPermissions: true
  });

  PushNotification.createChannel(
    {
      channelId: '001', // (required)
      channelName: 'Abdullah', // (required)
      // channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
      playSound: false, // (optional) default: true
      soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
      importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
      vibrate: true // (optional) default: true. Creates the default vibration patten if true.
    },
    (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
  );

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={() => {
        const state = navigationRef.current.getRootState();
        props.onStateChange(state);
      }}
      onReady={() => {
        const state = navigationRef.current.getRootState();
        props.onStateChange(state);
      }}
    >
      <Stack.Navigator presentation='card' initialRouteName='LoginScreen'>
        <Stack.Screen
          name='Auth' component={Auth}
          options={{
            headerShown: false
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// export default App;
export default withPendoRN(App);
