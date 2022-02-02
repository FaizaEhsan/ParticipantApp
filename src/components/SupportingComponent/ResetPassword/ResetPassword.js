import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, Platform, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Text, theme } from 'galio-framework';
import { argonTheme } from '../../../constants';
import { useNavigation } from '@react-navigation/native';
import { Button, TextInput } from 'react-native-paper';
import { useSelector } from 'react-redux';

const { height } = Dimensions.get('screen');

function ResetPassword () {
  const navigation = useNavigation();
  const [emailAddress, setEmailAddress] = useState('');
  const [disabled, setDisabled] = useState(true);
  // const setTimelineData = useSelector((state) => state.setTimelineData);

  const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  useEffect(() => {
    if (Object.keys(emailAddress).length > 0) {
      if (emailAddress !== '' && regEmail.test(emailAddress)) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
  }, [emailAddress]);

  const onSendEmail = () => {
    if (emailAddress !== '' && regEmail.test(emailAddress)) {
      navigation.navigate('EmailSentScreen');
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
          <View style={styles.container}>
            <Text style={styles.nameText}>Reset password</Text>
            <Text style={styles.text}>We'll send a link to your email to reset your password.</Text>
            <TextInput
              onChangeText={emailAddress => setEmailAddress(emailAddress)}
              label='Email Address'
              value={emailAddress}
              underlineColor={argonTheme.COLORS.BUTTONDEFAULT}
              style={styles.TextInputStylePassword}
              theme={{
                colors: {
                  primary: argonTheme.COLORS.TEXT,
                  placeholder: argonTheme.COLORS.TEXT
                }
              }}
            />
          </View>
          <View style={styles.returnButtonContainer}>
            <Button
              mode='contained'
              color={disabled ? '#f0a39d' : argonTheme.COLORS.BUTTONFILLED}
              style={styles.SendEmailButton}
              contentStyle={styles.ContentStyle}
              labelStyle={{ fontFamily: 'Inter-Regular' }}
              uppercase={false}
              onPress={() => onSendEmail()}
            >
              <Text
                size={15}
                color={argonTheme.COLORS.WHITE}
                fontFamily='Inter-Bold'
              >
                Send Email
              </Text>
            </Button>
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
    flex: 1
  },
  container: {
    // marginVertical: '5%'
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
    marginVertical: '5%',
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

export default ResetPassword;
