/**
 * @format
 */
import React from 'react';
import { AppRegistry, LogBox, StyleSheet } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import store from './src/redux/Store/index';
import { MenuProvider } from 'react-native-popup-menu';
import { PendoSDK, NavigationLibraryType } from 'rn-pendo-sdk';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

function initPendo () {
  const navigationOptions = { library: NavigationLibraryType.ReactNavigation, navigation: null };
  // For Sentinel
  const pendoKey = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IiIsInR5cCI6IkpXVCJ9.eyJkYXRhY2VudGVyIjoidXMiLCJrZXkiOiI1YzA1ODIwYTQxMzY0OTFmODAzNDgyYTdlZGIzOGRkMGYzNTIxMDdiZWQ4ZTk3Njc5NWMxOGM5ZjUyNTRmYWYyYjQ4YmVjZjBiN2UwNDNhYTZiNmZhYjI2OGQyMjZkZGYwYmQwMTMwODg4Y2I4NTI3MGI5MjFiODgwOTMyZjc3ZmZlMTkwZmFjZTFmNjJkMGM5NDUyNmU5Y2Q4MjA2OTYxNDEyMjg0MTk2OGEwOTI5MjBlMzNkYzUwYjY2YTVhYzc4NWQxNThjZTQyM2QyZWQyNWI2N2IzODA2ZWRhZTA2Zi5jODUxMzBmZjExMWVjZjllNTI0YmZlNjVmNTRjNThkNC5jODg5NjdhY2EzNTU0MTllMzI5M2I5MDMxMTI2NjJiYThhZWE0YjFlNWI0YjkwNjYxODFlZDdmZjFiMjc4M2ZmIn0.r0tt_lb-cMxCsyKxfjotQTmRVqopVfkqNqS9_uJiKP_3Fn9WyIv53AzzsBrDD2CSYoobbIMEmVSy7ikCpAcOyUld0n1T_KWWrd9rgXjPvaa2oAALoBoXrjyCAHAm1qwsmDLMr04mMR7KrkZAN-CiOzlYJcnHU8gTNsr-QjHK9ZI';
  // For Systellex Testing
  // const pendoKey = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IiIsInR5cCI6IkpXVCJ9.eyJkYXRhY2VudGVyIjoidXMiLCJrZXkiOiIyM2Y2N2I2ZjA1YjBlNjVjNWQ2NjQ4MjE3ODUzZWY0ZGVhOTM2NmI5OWJlMjcyZTQ2N2NhZmM5YmUyYTdkOWVlZmNiMGU3NjIyOWUzNTA4Y2Y0OTNiM2Q2MzZlNWFiYjY2ZDNhNGI4ZDU4YzRlMjVjODRiMDZkM2ZkY2YxOTU5NThhMmJkNzA0OTk3Zjc1MzA2ZDUzNzdhMWQ3Njk2NmJlLjliYTNkNWNlOTNkNTNkOGExYTU4ZTYwOTM2YjMxYjdmLmIxMGUxNWM2YzVmMDg0OTgzOGZkOTI5NWQ1MjE4MGFmOTE2MjJhM2NhZmQ2NzUwYzViNjU1MWFhNGU0MzgyNjYifQ.UMnFyKacMCn1phlfJc54_BD2Aj3QNyX752YKYgLERLw3dj2yxI-QXNn2mCtAqsc39NvV4urolcqLgbqeixaDzjQe9bXD9B6aG8qTqR6gdYRZCapewIy-0mMyja-kpdmxGfrtOF64WrxXfIBvbOv9SDMZ3_ZSu2txEmPmZxkcy0s';
  PendoSDK.setup(pendoKey, navigationOptions);
}
initPendo();

const Root = () => (
  <MenuProvider customStyles={menuProviderStyles}>
    <Provider store={store}>
      <App />
    </Provider>
  </MenuProvider>
);

const styles = StyleSheet.create({
  container: {
    padding: 0
  },
  backdrop: {
    backgroundColor: '#3f3d3b',
    opacity: 0.3
  }
});

const menuProviderStyles = {
  menuProviderWrapper: styles.container,
  backdrop: styles.backdrop
};

AppRegistry.registerComponent(appName, () => Root);
