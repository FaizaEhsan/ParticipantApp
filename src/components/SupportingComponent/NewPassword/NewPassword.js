import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, Platform, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Text, theme } from 'galio-framework';
import { argonTheme } from '../../../constants';
import { useNavigation } from '@react-navigation/native';
import Logo from '../Logo/Logo';
import TextInputPasswordComp from '../../Components/TextInputPassword';
import ButtonComp from '../../Components/Button';
const { height } = Dimensions.get('screen');

function NewPassword () {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [hidePassword, setHidePassword] = useState(true);
   const [reEnterPassword, setReEnterPassword] = useState('');
  const [hidereEnterPassword, setHidereEnterPassword] = useState(true);
  const [showRePassword, setShowRePassword] = useState(false);

 

  useEffect(() => {
    console.log('length', password.length)
    if (Object.keys(password).length > 0) {
      if (password !== '' && password.length >= 8 && reEnterPassword !== '' && password === reEnterPassword) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
  }, [password, reEnterPassword]);

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

  const onSavePasswordPress = async () => {
    
    if (password !== '' && password.length >= 8 && disabled === false) {
   
      setPassword('');
      navigation.navigate('LoginScreen');
    } 
    if (password.trim() === '') {
      setPasswordError('Password Required.');
    } else if (password.length < 8) {
      setPasswordError('Must be at least 8 characters');
    } else {
      setPasswordError('');
    }
    
  };

  

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 35}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.safeArea}>
          <Logo />
          <View style={styles.container}>
            <Text style={styles.nameText}>Reset password</Text>
            <Text style={styles.text}>Enter a new password for your account.</Text>

            <TextInputPasswordComp   
                value={password}
                onChangeText={password => setPassword(password)}  
                label='Password' 
                />
            
            <Text style={styles.passwordDetailText}>Password should have at least 8 characters and 1 special character.</Text>

            <TextInputPasswordComp  
              value={reEnterPassword}  
              onChangeText={reEnterPassword => setReEnterPassword(reEnterPassword)} 
              label='Re-enter password' 
              />

          </View>
          <View style={styles.returnButtonContainer}>

          <ButtonComp
              value={disabled} 
              onPress={() => onSavePasswordPress()} 
              title="Save Password"
              />


            
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
    paddingHorizontal: '5%',
    paddingVertical: '15%',
    flex: 1
  },
  container: {
    marginTop: '5%'
  },
  TextInputStyleEmail: {
    backgroundColor: '#fff',
    fontFamily: 'Inter-Regular',
    width: '90%',
    fontSize: 13,
    borderWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomColor: argonTheme.COLORS.BUTTONDEFAULT
  },
  TextInputStylePassword: {
    marginTop: '5%',
    marginBottom: '2%',
    width: '90%',
    fontSize: 13,
    fontFamily: 'Inter-Regular',
    backgroundColor: '#fff',
    borderBottomColor: argonTheme.COLORS.BUTTONDEFAULT
  },
  reasonForRequest: {
    marginTop: '10%',
    marginBottom: '2%',
    fontSize: 15,
    fontFamily: 'Inter-SemiBold',
    color: argonTheme.COLORS.BLACK
  },
  eventTime: {
    fontSize: 11,
    color: argonTheme.COLORS.TEXT
  },
  eventName: {
    fontSize: 14,
    color: theme.COLORS.BUTTONDEFAULT,
    fontFamily: 'Inter-SemiBold'
  },
  textContainer: {
    alignSelf: 'center',
    marginBottom: '10%',
    marginTop: '15%'
  },
  ContentStyle: {
    height: height * 0.055
  },
  SendEmailButton: {
    marginTop: '8%'
  },
  iconsStyle: {
    alignSelf: 'center',
    color: argonTheme.COLORS.TEXT
  },
  nameText: {
    marginTop: '5%',
    fontSize: 24,
    fontFamily: 'Inter-SemiBold'
  },
  text: {
    marginVertical: '5%',
    fontSize: 15,
    color: argonTheme.COLORS.TEXT
  },
  passwordDetailText: {
    fontSize: 13,
    color: argonTheme.COLORS.TEXT
  },
  documentuploaderContainer: {
    backgroundColor: '#faebdf',
    marginLeft: '15%',
    marginTop: '3%',
    flex: 1,
    // width: '20%',
    height: '60%',
    borderRadius: 5
  },
  documentuploader: {
    marginTop: '2%',
    textTransform: 'capitalize',
    textAlign: 'center',
    fontFamily: 'Inter-SemiBold',
    color: '#db7b27',
    fontSize: 12
  },
  reasonEventContainer: {
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconContainerInside: {
    flexDirection: 'row',
    flex: 3
  },
  returnButtonContainer: {
    marginRight: '0%'
  }
});

export default NewPassword;
