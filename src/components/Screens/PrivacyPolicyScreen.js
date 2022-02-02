import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import PrivacyPolicy from '../SupportingComponent/PrivacyPolicy/PrivacyPolicy';

function PrivacyPolicyScreen () {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <PrivacyPolicy />
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

export default PrivacyPolicyScreen;
