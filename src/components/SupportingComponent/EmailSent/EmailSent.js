import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, theme } from 'galio-framework';
import { argonTheme } from '../../../constants';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import { useSelector } from 'react-redux';

const { height } = Dimensions.get('screen');

function EmailSent () {
  const navigation = useNavigation();

  const onSendEmail = () => {
    navigation.navigate('NewPasswordScreen');
  };

  return (
    <View style={styles.safeArea}>
      <View>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('LoginScreen')}
        >
          <Ionicons
            name='close'
            size={25}
            color={argonTheme.COLORS.TEXT}
          />
        </TouchableWithoutFeedback>
        <View style={styles.container}>
          <SimpleLineIcons
            name='envelope'
            size={50}
            color={argonTheme.COLORS.BLACK}
          />
          <Text style={styles.nameText}>Email sent!</Text>
          <Text style={styles.text}>Check your email for instructions to reset your password.</Text>
        </View>
      </View>
      <View style={styles.returnButtonContainer}>
        <Button
          mode='contained'
          color={argonTheme.COLORS.BUTTONDEFAULT}
          style={styles.SendEmailButton}
          contentStyle={styles.ContentStyle}
          labelStyle={{ fontFamily: 'Inter-Regular' }}
          uppercase={false}
          onPress={() => onSendEmail()}
        >
          <Text
            bold
            size={15}
            color={argonTheme.COLORS.BLACK}
            fontFamily='Inter-Bold'
          >
            Return to Login
          </Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
    padding: '5%',
    flex: 1,
    justifyContent: 'space-between'
  },
  container: {
    alignItems: 'center',
    marginTop: '20%'
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
    fontSize: 24
  },
  text: {
    textAlign: 'center',
    marginTop: '4%',
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

export default EmailSent;
