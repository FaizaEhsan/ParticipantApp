import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import PrivacyPolicyMenu from '../SupportingComponent/PrivacyPolicyMenu/PrivacyPolicyMenu';

function PrivacyPolicyMenuScreen () {
  return (
    <SafeAreaView style={styles.safeArea}>
      <PrivacyPolicyMenu />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  }
});

export default PrivacyPolicyMenuScreen;
