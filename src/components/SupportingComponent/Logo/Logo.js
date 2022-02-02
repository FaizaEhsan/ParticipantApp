import React from 'react';
import { StyleSheet, Image } from 'react-native';

function Logo () {
  return (
    <Image style={styles.imageStyle} source={require('../../../assets/Images/NewLogo.jpg')} />
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: '40%',
    height: 17
  }
});

export default Logo;
