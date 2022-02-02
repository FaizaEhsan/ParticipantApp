import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Dimensions, Platform } from 'react-native';
import { Text, Checkbox } from 'galio-framework';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import { argonTheme } from '../../../constants';
// import { userApplicationStatus } from '../../../apis/Authenticate';
const { width, height } = Dimensions.get('screen');

function Login () {
  const navigation = useNavigation();
  const [eulaStatus, SetEulaStatus] = useState('');
  const [buttonDisable, setButtonDisable] = useState(true);

  useEffect(() => {
  }, [buttonDisable]);

  const onAcceptClick = () => {
    console.log('-----------onAcceptClick-----------');
    // updateEulaResponse(userInfoState);
    SetEulaStatus(false);
    // navigation.navigate('Menu', { screen: 'Dashboard' });
  };

  return (
    <View style={styles.privacyContainer}>
      <Text style={styles.privacyPolicyText}>Privacy Policy</Text>
      <ScrollView
        style={styles.scrollContainer}
      >
        <Text style={styles.modalText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut pharetra sit amet aliquam id diam. Urna duis convallis convallis tellus id interdum. Auctor elit sed vulputate mi sit amet mauris commodo. Habitasse platea dictumst quisque sagittis. Duis ultricies lacus sed turpis tincidunt. Porta lorem mollis aliquam ut porttitor. Felis bibendum ut tristique et. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Habitant morbi tristique senectus et netus et malesuada. Semper risus in hendrerit gravida rutrum quisque non tellus. Nulla malesuada pellentesque elit eget. Sollicitudin tempor id eu nisl. Mauris in aliquam sem fringilla ut morbi tincidunt augue. Arcu dictum varius duis at consectetur lorem. Tempus urna et pharetra pharetra. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Orci sagittis eu volutpat odio facilisis mauris sit. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Nisl purus in mollis nunc sed id. Posuere ac ut consequat semper viverra nam libero justo. Ante in nibh mauris cursus mattis molestie a iaculis. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Eget velit aliquet sagittis id. Congue nisi vitae suscipit tellus mauris. Maecenas ultricies mi eget mauris pharetra et ultrices. A diam sollicitudin tempor id eu. Porttitor eget dolor morbi non arcu risus quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut pharetra sit amet aliquam id diam. Urna duis convallis convallis tellus id interdum. Auctor elit sed vulputate mi sit amet mauris commodo. Habitasse platea dictumst quisque sagittis. Duis ultricies lacus sed turpis tincidunt. Porta lorem mollis aliquam ut porttitor. Felis bibendum ut tristique et. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Habitant morbi tristique senectus et netus et malesuada. Semper risus in hendrerit gravida rutrum quisque non tellus. Nulla malesuada pellentesque elit eget. Sollicitudin tempor id eu nisl. Mauris in aliquam sem fringilla ut morbi tincidunt augue. Arcu dictum varius duis at consectetur lorem. Tempus urna et pharetra pharetra. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Orci sagittis eu volutpat odio facilisis mauris sit. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Nisl purus in mollis nunc sed id. Posuere ac ut consequat semper viverra nam libero justo. Ante in nibh mauris cursus mattis molestie a iaculis. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Eget velit aliquet sagittis id. Congue nisi vitae suscipit tellus mauris. Maecenas ultricies mi eget mauris pharetra et ultrices. A diam sollicitudin tempor id eu. Porttitor eget dolor morbi non arcu risus quis.
        </Text>
      </ScrollView>
      <Checkbox
        checkboxStyle={{
          borderWidth: buttonDisable ? 2 : 0
        }}
        color={buttonDisable ? argonTheme.COLORS.TEXT : argonTheme.COLORS.CHECKBOXCOLOR}
        labelStyle={{
          fontFamily: 'Inter-Regular',
          color: argonTheme.COLORS.TEXT,
          fontSize: 14
        }}
        label='Accept privacy policy'
        onChange={() => setButtonDisable(!buttonDisable)}
      />
      <Button
        style={styles.createButtonPrivacy}
        onPress={() => onAcceptClick()}
        mode='contained'
        color={argonTheme.COLORS.BUTTONDEFAULT}
        disabled={buttonDisable}
        contentStyle={styles.ContentStyle}
        labelStyle={{ fontFamily: 'Inter-Regular' }}
        uppercase={false}
      >
        <Text
          size={15}
          fontFamily='Inter-Regular'
          bold
          color={buttonDisable ? argonTheme.COLORS.TEXT : argonTheme.COLORS.BLACK}
        >
          Continue
        </Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  privacyContainer: {
    marginHorizontal: '5%'
  },
  createButtonPrivacy: {
    marginTop: '8%'
  },
  modalText: {
    padding: '4%',
    fontSize: 15,
    fontFamily: 'Inter-Regular'
  },
  ContentStyle: {
    height: height * 0.06
  },
  privacyPolicyText: {
    fontSize: 20,
    marginVertical: '3%',
    fontFamily: 'Inter-Bold'
  },
  scrollContainer: {
    backgroundColor: '#F9F9FC',
    borderRadius: 5,
    width: width * 0.90,
    marginBottom: '5%',
    height: Platform.OS === 'ios' ? height < 812 ? height * 0.6 : height * 0.63 : height < 812 ? height * 0.58 : height * 0.60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    }
  }
});

export default Login;
