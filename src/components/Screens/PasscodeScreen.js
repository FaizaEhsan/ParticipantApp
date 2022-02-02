import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Passcode from '../SupportingComponent/Passcode/Passcode';

function PasscodeScreen () {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.passcodeScreenStyle}>
        <Passcode />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  passcodeScreenStyle: {
    backgroundColor: '#fff',
    flex: 1
  },
  safeArea: {
    flex: 1
  }
});

export default PasscodeScreen;
