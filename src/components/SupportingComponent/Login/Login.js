import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Dimensions, TouchableWithoutFeedback, Keyboard, View, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Text, Checkbox } from 'galio-framework';
import { useNavigation } from '@react-navigation/native';
import { PendoSDK } from 'rn-pendo-sdk';
import TextInputComp from '../../Components/TextInput';
import TextInputPasswordComp from '../../Components/TextInputPassword';
import ButtonComp from '../../Components/Button';
import CheckBoxComp from '../../Components/CheckBox';

import { updateEulaResponse, enrollApp } from '../../../apis/Authenticate';
import { argonTheme } from '../../../constants';
import Logo from '../Logo/Logo';
const { width, height } = Dimensions.get('screen');

function Login () {
  const navigation = useNavigation();
  const userApplicationStatusData = useSelector((state) => state.getUserApplicationStatus);
  const getRegisterUserData = useSelector((state) => state.registerUserData);
  const deviceToken = useSelector((state) => state.deviceToken.result);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [CheckEmailAddress, setCheckEmailAddress] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [Error, setError] = useState('');
  const [buttonDisable, setButtonDisable] = useState(true);
  const [eulaStatus, SetEulaStatus] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [checkBoxColor, setCheckBoxColor] = useState(true);
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
   
    if (emailAddress !== '' && password !== '') {
   
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
              style={[styles.loginText, { marginTop: keyboardStatus === 'True' ? '5%' : '10%' }]} >
              Log in
            </Text>

            <Text
              style={[styles.enterText, { marginBottom: keyboardStatus === 'True' ? '5%' : '10%' }]}>
              Enter an email address and password to log in.
            </Text>

           

            <TextInputComp 
                value={emailAddress} 
                Error={Error} 
                onChangeText={emailAddress => setEmailAddress(emailAddress)}  
                label='Email'
                theme={{
                  colors: {
                    primary: Error ? argonTheme.COLORS.BUTTONFILLED : 'black',
                    placeholder: Error ? argonTheme.COLORS.BUTTONFILLED : argonTheme.COLORS.TEXT
                  }
                }}
                 
                />

            <TextInputPasswordComp  
              Error={Error} 
                value={password} 
                onChangeText={password => setPassword(password)}  
                label='Password' 
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

            
              <CheckBoxComp 
                  value={checkBoxColor} 
                  onChange={() => setCheckBoxColor(!checkBoxColor)}
                  label='Remember Me'
                  />
            </View>


           
            <ButtonComp
                  color={buttonDisable ? argonTheme.COLORS.BUTTONDEFAULT : argonTheme.COLORS.BUTTONFILLED}
                  txtColor={buttonDisable ? argonTheme.COLORS.TEXT : argonTheme.COLORS.WHITE}
                  onPress={() => onLoginClick()} 
                  title="Login"
                  disabled={buttonDisable}
                />


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
