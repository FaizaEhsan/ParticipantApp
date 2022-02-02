import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Dimensions, TouchableWithoutFeedback, Keyboard, View, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Text, Checkbox } from 'galio-framework';
import { useNavigation } from '@react-navigation/native';
import { PendoSDK } from 'rn-pendo-sdk';

import { updateEulaResponse, enrollApp } from '../../../apis/Authenticate';
// import { getUserApplicationStatus, setUserInfo } from '../../../redux/Actions/index';
import { argonTheme } from '../../../constants';
import Logo from '../Logo/Logo';
const { width, height } = Dimensions.get('screen');

function Login () {
  const navigation = useNavigation();
  const userApplicationStatusData = useSelector((state) => state.getUserApplicationStatus);
  const getRegisterUserData = useSelector((state) => state.registerUserData);
  const deviceToken = useSelector((state) => state.deviceToken.result);
  // const userInfoData = useSelector((state) => state.setUserInfo);
  // const dispatch = useDispatch();
  const [emailAddress, setEmailAddress] = useState('');
  // const [activeEmailAddress, setActiveEmailAddress] = useState(false);
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [CheckEmailAddress, setCheckEmailAddress] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [Error, setError] = useState('');
  const [buttonDisable, setButtonDisable] = useState(true);
  const [eulaStatus, SetEulaStatus] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [checkBoxColor, setCheckBoxColor] = useState(true);
  // const [userInfoState, setUserInfoState] = useState('');
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus('True');
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus('False');
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  useEffect(() => {
    if (Object.keys(userApplicationStatusData).length > 0) {
      SetEulaStatus(userApplicationStatusData.actions.eula.show);
    }
  }, [userApplicationStatusData]);

  useEffect(() => {
    if (Object.keys(getRegisterUserData).length > 0) {
      console.log('getRegisterUserData-----', getRegisterUserData);
      setCheckEmailAddress(getRegisterUserData.email);
      setCheckPassword(getRegisterUserData.password);
    }
  }, [getRegisterUserData]);

  useEffect(() => {
  }, [emailAddress, deviceToken]);

  // useEffect(() => {
  //   if (Object.keys(userInfoData).length > 0) {
  //     setUserInfoState(userInfoData);
  //   }
  // }, [userInfoData]);

  useEffect(() => {
    if (password !== '') {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  }, [password]);

  useEffect(() => {
    if (emailAddress !== '' && password !== '') {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [emailAddress, password]);

  const onLoginClick = () => {
    // if (deviceToken.length > 0 && emailAddress !== '' && password !== '') {
    if (emailAddress !== '' && password !== '') {
    // if (emailAddress === CheckEmailAddress && password === checkPassword) {
      enrollApp(emailAddress, deviceToken);
      setError('');
      if (eulaStatus === true) {
        setEmailAddress('');
        setPassword('');
        setError('');
        navigation.navigate('PrivacyPolicyScreen');

        // Pendo

        const visitorId = 'John Smith';
        const accountId = 'Acme Inc.';
        const visitorData = { Age: '25', Country: 'USA' };
        const accountData = { Tier: '1', Size: 'Enterprise' };
        PendoSDK.startSession(visitorId, accountId, visitorData, accountData);
      } else {
        // const userInfo = {
        //   userId: 'ID01234',
        //   email: 'abc@gmail.com'
        // };
        // dispatch(setUserInfo(userInfo));
        // navigation.navigate('Menu', { screen: 'Dashboard' });
      }
    } else {
      setError('Incorrect username or password');
    }
  };

  const onSignUpPress = () => {
    setEmailAddress('');
    setPassword('');
    setError('');
    navigation.navigate('PasscodeScreen');
  };

  const onForgotPasswordPress = () => {
    setEmailAddress('');
    setPassword('');
    setError('');
    navigation.navigate('ResetPasswordScreen');
  };

  const onIconPress = () => {
    setHidePassword(!hidePassword);
  };

  // const toggleActive = () => {
  //   setActiveEmailAddress(true);
  // };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 35}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        bounces={false}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={[styles.loginContainer]}>
            <View style={{ paddingTop: keyboardStatus === 'True' ? '2%' : '15%' }}>
              <Logo />
            </View>
            <Text
              style={[styles.loginText, { marginTop: keyboardStatus === 'True' ? '5%' : '10%' }]}
            >
              Log in
            </Text>
            <Text
              style={[styles.enterText, { marginBottom: keyboardStatus === 'True' ? '5%' : '10%' }]}
            >
              Enter an email address and password to log in.
            </Text>
            <TextInput
              onChangeText={emailAddress => { setEmailAddress(emailAddress); }}
              label='Email address'
              value={emailAddress}
              underlineColor={Error ? argonTheme.COLORS.BUTTONFILLED : argonTheme.COLORS.BUTTONDEFAULT}
              style={Error ? styles.TextInputStyleEmailError : styles.TextInputStyleEmail}
              theme={{
                colors: {
                  primary: Error ? argonTheme.COLORS.BUTTONFILLED : 'black',
                  placeholder: Error ? argonTheme.COLORS.BUTTONFILLED : argonTheme.COLORS.TEXT
                }
              }}
            />
            <TextInput
              onChangeText={password => setPassword(password)}
              maxLength={15}
              secureTextEntry={hidePassword}
              label='Password'
              value={password}
              underlineColor={Error ? argonTheme.COLORS.BUTTONFILLED : argonTheme.COLORS.BUTTONDEFAULT}
              style={Error ? styles.TextInputStylePasswordError : styles.TextInputStylePassword}
              right={showPassword
                ? <TextInput.Icon
                    color='#798286'
                    name='eye'
                    forceTextInputFocus={false}
                    onPress={() => onIconPress()}
                  />
                : null}
              theme={{
                colors: {
                  primary: Error ? argonTheme.COLORS.BUTTONFILLED : 'black',
                  placeholder: Error ? argonTheme.COLORS.BUTTONFILLED : argonTheme.COLORS.TEXT
                }
              }}
            />
            {!!Error && (
              <Text style={styles.errorText}>{Error}</Text>
            )}
            <View>
              <Checkbox
                checkboxStyle={{
                  borderWidth: checkBoxColor ? 2 : 0
                }}
                color={checkBoxColor ? argonTheme.COLORS.TEXT : argonTheme.COLORS.CHECKBOXCOLOR}
                labelStyle={{
                  color: argonTheme.COLORS.TEXT,
                  fontSize: 13,
                  fontFamily: 'Inter-Regular'
                }}
                label='Remember Me'
                onChange={() => setCheckBoxColor(!checkBoxColor)}
              />
            </View>
            <Button
              mode='contained'
              color={buttonDisable ? argonTheme.COLORS.BUTTONDEFAULT : argonTheme.COLORS.BUTTONFILLED}
              disabled={buttonDisable}
              style={styles.createButtonLogin}
              contentStyle={styles.ContentStyle}
              labelStyle={{ fontFamily: 'Inter-Regular' }}
              uppercase={false}
              onPress={() => onLoginClick()}
            >
              <Text
                size={15}
                color={buttonDisable ? argonTheme.COLORS.TEXT : argonTheme.COLORS.WHITE}
              >
                Log In
              </Text>
            </Button>
            <TouchableOpacity
              onPress={() => onForgotPasswordPress()}
            >
              <Text
                style={styles.forgotText}
              >
                Forgot password?

              </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Text
                style={styles.accountText}
              >
                Dont have an account?
              </Text>
              <TouchableOpacity
                onPress={() => onSignUpPress()}
              >
                <Text
                  style={styles.signupText}
                >
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    paddingHorizontal: '5%',
    flex: 1
  },
  loginText: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: argonTheme.COLORS.BLACK
  },
  enterText: {
    fontSize: 14,
    marginTop: '3%',
    fontFamily: 'Inter-Regular',
    color: argonTheme.COLORS.TEXT
  },
  accountText: {
    fontSize: 14,
    marginTop: '3%',
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
    color: argonTheme.COLORS.TEXT
  },
  signupText: {
    fontSize: 14,
    marginTop: '17%',
    marginLeft: '2%',
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
    color: argonTheme.COLORS.BLUETEXTCOLOR
  },
  forgotText: {
    fontSize: 14,
    marginTop: '5%',
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
    color: argonTheme.COLORS.BLUETEXTCOLOR
  },
  createButtonLogin: {
    // width: width * 0.88,
    // height: height * 0.06,
    marginTop: '13%'
  },
  ContentStyle: {
    height: height * 0.06
  },
  TextInputStyleEmail: {
    marginBottom: '5%',
    backgroundColor: '#fff',
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    borderBottomColor: argonTheme.COLORS.BUTTONDEFAULT
  },
  TextInputStyleEmailError: {
    marginBottom: '5%',
    backgroundColor: '#fff',
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    borderBottomColor: argonTheme.COLORS.BUTTONFILLED
  },
  TextInputStylePassword: {
    marginBottom: '5%',
    fontSize: 13,
    fontFamily: 'Inter-Regular',
    backgroundColor: '#fff',
    borderBottomColor: argonTheme.COLORS.BUTTONDEFAULT
  },
  TextInputStylePasswordError: {
    fontSize: 13,
    fontFamily: 'Inter-Regular',
    backgroundColor: '#fff',
    borderBottomColor: argonTheme.COLORS.BUTTONFILLED
  },
  labelStyle: {
    color: '#000',
    fontSize: 17
  },
  errorText: {
    color: argonTheme.COLORS.BUTTONFILLED,
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    marginBottom: '5%'
  },
  inputActive: {
    borderBottomColor: 'white'
  },
  input: {
    width: width * 0.9,
    borderRadius: 0,
    borderBottomWidth: 1,
    borderBottomColor: argonTheme.COLORS.PLACEHOLDER
  }
});

export default Login;
