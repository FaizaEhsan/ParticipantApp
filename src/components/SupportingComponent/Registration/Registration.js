import React, { useState, useEffect } from 'react';
import { Text } from 'galio-framework';
import { StyleSheet, View, Dimensions, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import TextInputComp from '../../Components/TextInput';
import TextInputPasswordComp from '../../Components/TextInputPassword';
import ButtonComp from '../../Components/Button';
import { registerUser } from '../../../apis/Authenticate';
import { registerUserData } from '../../../redux/Actions/index';
import { argonTheme } from '../../../constants';
import Logo from '../Logo/Logo';

const { height } = Dimensions.get('screen');

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

function Registration (prop) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [hidereEnterPassword, setHidereEnterPassword] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [showRePassword, setShowRePassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');
  const [buttonDisable, setButtonDisable] = useState(true);
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

  const onRegisterClick = async () => {
    const data =
    {
      email: emailAddress,
      password: password
    };
    const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailAddress !== '' && regEmail.test(emailAddress) && password !== '' && reEnterPassword !== '' && password === reEnterPassword) {
      try {
        const status = await registerUser(data);
        console.log('----------status', status);
      } catch (error) {
        console.log('----------error', error);
      }
      dispatch(registerUserData(data));
      setEmailAddress('');
      setPassword('');
      setReEnterPassword('');
      navigation.navigate('LoginScreen');
    } else {
      console.log('-----error cant Register user-------');
    }
    if (password.trim() === '') {
      setPasswordError('Password Required.');
    } else if (password.length < 8) {
      setPasswordError('Must be at least 8 characters');
    } else {
      setPasswordError('');
    }
    if (password !== reEnterPassword) {
      setPasswordMatchError('Passwords do not match');
    } else {
      setPasswordMatchError('');
    }
    if (emailAddress === '' || !regEmail.test(emailAddress)) {
      setEmailError('Not a valid email address');
    } else {
      setEmailError('');
    }
  };

  useEffect(() => {
    if (password !== '') {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  }, [password]);

  useEffect(() => {
    if (reEnterPassword !== '') {
      setShowRePassword(true);
    } else {
      setShowRePassword(false);
    }
  }, [reEnterPassword]);

  useEffect(() => {
    if (emailAddress !== '' && password !== '' && reEnterPassword !== '') {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [emailAddress, password, reEnterPassword]);

  const onIconPasswordPress = () => {
    setHidePassword(!hidePassword);
  };

  const onIconReEnterPasswordPress = () => {
    setHidereEnterPassword(!hidereEnterPassword);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 35}
      style={{ flex: 1 }}
    >
      <DismissKeyboard>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          style={{ flex: 1 }}
        >
          <View style={styles.registrationContainer}>
            <View style={{ paddingTop: keyboardStatus === 'True' ? '2%' : '15%' }}>
              <Logo />
            </View>
            <Text
              style={[styles.setUpText, { marginTop: keyboardStatus === 'True' ? '5%' : '10%' }]}
            >
              Set up your account
            </Text>
            <Text
              style={[styles.enterText, { marginBottom: keyboardStatus === 'True' ? '3%' : '8%' }]}
            >
              Enter an email address and password to create your account.
            </Text>

            <TextInputComp 
                value={emailAddress}  
                onChangeText={emailAddress => setEmailAddress(emailAddress)}  
                label='Email' 
                underlineColor={emailError ? argonTheme.COLORS.TEXTINPUTERROR : argonTheme.COLORS.BUTTONDEFAULT}
                style={emailError ? styles.TextInputStyleEmailWithError : styles.TextInputStyleEmail}
                theme={{
                  colors: {
                    primary: passwordError ? argonTheme.COLORS.TEXTINPUTERROR : 'black',
                    placeholder: emailError ? argonTheme.COLORS.TEXTINPUTERROR : argonTheme.COLORS.TEXT
                  }
                }}
                />
            
            {!!emailError && (
              <Text style={styles.errorText}>{emailError}</Text>
            )}


            <TextInputPasswordComp   
                value={password} 
                onChangeText={password => setPassword(password)}  
                
                underlineColor={passwordError ? argonTheme.COLORS.TEXTINPUTERROR : argonTheme.COLORS.BUTTONDEFAULT}
                label='Password' 
                />
            
            {/* {!!passwordError && (
              <Text style={styles.errorText}>{passwordError}</Text>
            )} */}
            <Text
              style={styles.noticeText}
            >
              Password should have at least 8 characters and 1 special character.
            </Text>

            <TextInputPasswordComp  
             theme={{
              colors: {
                primary: passwordMatchError ? argonTheme.COLORS.TEXTINPUTERROR : 'black',
                placeholder: passwordMatchError ? argonTheme.COLORS.TEXTINPUTERROR : argonTheme.COLORS.TEXT
              }
            }}
              value={reEnterPassword}  
              onChangeText={reEnterPassword => setReEnterPassword(reEnterPassword)} 
              label='Re-enter password' 
              underlineColor={passwordMatchError ? argonTheme.COLORS.TEXTINPUTERROR : argonTheme.COLORS.BUTTONDEFAULT}
              style={passwordMatchError ? styles.TextInputStylePasswordError : styles.TextInputStylePassword}
              />
           
            {!!passwordMatchError && (
              <Text style={styles.errorText}>{passwordMatchError}</Text>
            )}



              <ButtonComp
                value={buttonDisable} 
                onPress={() => onRegisterClick()} title="Create Account"
                style={{ marginTop: keyboardStatus === 'True' ? '5%' : '10%' }}
                />
            
          </View>
        </ScrollView>
      </DismissKeyboard>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  registrationContainer: {
    paddingHorizontal: '5%',
    flex: 1
  },
  errorText: {
    color: argonTheme.COLORS.TEXTINPUTERROR,
    fontSize: 13,
    fontFamily: 'Inter-Regular',
    marginTop: '1%'
  },
  ContentStyle: {
    height: height * 0.055
  },
  setUpText: {
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
  noticeText: {
    fontSize: 12,
    marginTop: '2%',
    marginBottom: '5%',
    fontFamily: 'Inter-Regular',
    color: argonTheme.COLORS.TEXT
  },
  TextInputStyleEmail: {
    marginBottom: '5%',
    backgroundColor: '#fff',
    fontSize: 13,
    borderBottomColor: argonTheme.COLORS.BUTTONDEFAULT
  },
  TextInputStyleEmailWithError: {
    marginBottom: '0%',
    backgroundColor: '#fff',
    fontSize: 13,
    borderBottomColor: argonTheme.COLORS.BUTTONDEFAULT
  },
  TextInputStylePassword: {
    fontSize: 13,
    backgroundColor: '#fff',
    borderBottomColor: argonTheme.COLORS.BUTTONDEFAULT
  },
  TextInputStylePasswordError: {
    fontSize: 13,
    backgroundColor: '#fff',
    borderBottomColor: argonTheme.COLORS.BUTTONDEFAULT
  },
  labelStyle: {
    color: '#000',
    fontSize: 17
  }
});

export default Registration;
