import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Registration from '../SupportingComponent/Registration/Registration';

function RegistrationScreen () {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Registration />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});

export default RegistrationScreen;
