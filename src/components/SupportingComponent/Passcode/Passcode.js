import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import {
  validatePasscode
  // userApplicationStatus
} from '../../../apis/Authenticate';
import { Text } from 'galio-framework';

import { argonTheme } from '../../../constants';
import Logo from '../Logo/Logo';
const { width, height } = Dimensions.get('screen');

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

function Passcode () {
  const navigation = useNavigation();
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState('');
  const [buttonDisable, setButtonDisable] = useState(true);

  const onPasscodeClick = async () => {
    const data =
  {
    passcode: passcode,
    email: 'user@email.com'
  };
    console.log('inside onPasscodeClick');
    try {
      const status = await validatePasscode(data);
      console.log('----------status', status);
    } catch (error) {
      console.log('----------error', error);
    }
    // const status = await validatePasscode(data);
    // console.log('----------status', status);
    if (passcode.length < 6) {
      setPasscodeError('The passcode you entered is not valid. Please try again.');
    } else {
      setPasscodeError('');
    }
    if (passcode.length >= 6) {
      navigation.navigate('RegistrationScreen');
    } else {
      console.log('-----valid:false-------');
    }
  };

  useEffect(() => {
    console.log('buttonDisable', buttonDisable);
  }, [buttonDisable]);

  return (
    <DismissKeyboard>
      <View style={styles.passcodeContainer}>
        <View>
          <Logo />
        </View>
        <Text
          style={styles.Text}
        >
          Verify your account
        </Text>
        <Text
          style={styles.enterText}
        >
          Enter the passcode that was sent to your phone.
        </Text>
        <OTPInputView
          style={{ width: '100%', height: 100 }}
          pinCount={6}
          autoFocusOnLoad
          codeInputFieldStyle={passcodeError ? styles.underlineStyleBaseError : styles.underlineStyleBase}
          codeInputHighlightStyle={passcodeError ? styles.underlineStyleHighLightedError : styles.underlineStyleHighLighted}
          onCodeFilled={(code => {
            setPasscode(code);
            console.log(`Code is ${code}, you are good to go!`);
          })}
          onCodeChanged={(code => {
            console.log('codeLength', code.length);
            if (code.length === 6) {
              setButtonDisable(false);
            } else {
              setButtonDisable(true);
            }
            console.log('code', code);
          })}
        />
        <Button
          mode='contained'
          color={buttonDisable ? argonTheme.COLORS.BUTTONDEFAULT : argonTheme.COLORS.BUTTONFILLED}
          disabled={buttonDisable}
          style={styles.createButtonContinue}
          contentStyle={styles.ContentStyle}
          labelStyle={{ fontFamily: 'Inter-Regular' }}
          uppercase={false}
          onPress={() => onPasscodeClick()}
        >
          <Text
            size={15}
            bold
            fontFamily='Inter-Bold'
            color={buttonDisable ? argonTheme.COLORS.TEXT : argonTheme.COLORS.WHITE}
          >
            Continue
          </Text>
        </Button>
      </View>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 14,
    fontWeight: '600',
    marginTop: -15
  },
  ContentStyle: {
    height: height * 0.06
  },
  underlineStyleBase: {
    width: 40,
    height: 55,
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    borderWidth: 0,
    borderBottomWidth: 1
  },
  underlineStyleBaseError: {
    width: 40,
    height: 55,
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 15,
    fontWeight: '700'
  },
  underlineStyleHighLighted: {
    borderColor: '#000',
    backgroundColor: '#fff'
  },
  underlineStyleHighLightedError: {
    borderColor: '#ff0000',
    backgroundColor: '#fff'
  },
  inputIcons: {
    marginRight: 12
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25,
    marginBottom: 40
  },
  passcodeContainer: {
    marginVertical: '15%',
    marginHorizontal: '5%'
  },
  Text: {
    marginTop: '10%',
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: argonTheme.COLORS.BLACK
  },
  enterText: {
    fontSize: 14,
    marginTop: '3%',
    marginBottom: '10%',
    fontFamily: 'Inter-Regular',
    color: argonTheme.COLORS.TEXT
  },
  accountText: {
    fontSize: 14,
    marginTop: '3%',
    fontWeight: '700',
    textAlign: 'center',
    color: argonTheme.COLORS.TEXT
  },
  signupText: {
    fontSize: 14,
    marginTop: '17%',
    marginLeft: '2%',
    fontWeight: '700',
    textAlign: 'center',
    color: argonTheme.COLORS.TEXTCOLORED
  },
  forgotText: {
    fontSize: 14,
    marginTop: '5%',
    fontWeight: '700',
    textAlign: 'center',
    color: argonTheme.COLORS.TEXTCOLORED
  },
  createButtonContinue: {
    marginTop: '13%'
  },
  TextInputStyleEmail: {
    marginBottom: '5%',
    backgroundColor: '#fff',
    fontSize: 13,
    borderBottomColor: argonTheme.COLORS.BUTTONDEFAULT
  },
  TextInputStylePassword: {
    marginBottom: '5%',
    fontSize: 13,
    backgroundColor: '#fff',
    borderBottomColor: argonTheme.COLORS.BUTTONDEFAULT
  },
  labelStyle: {
    color: '#000',
    fontSize: 17
  }
});

export default Passcode;
