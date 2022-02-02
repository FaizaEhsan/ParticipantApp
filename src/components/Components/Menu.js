import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Block, theme } from 'galio-framework';
import { DrawerItem as DrawerCustomItem } from '../components/index';

function CustomDrawerContent ({ drawerPosition, navigation, profile, focused, state, ...rest }) {
  const screens = [
    'Chat',
    'Schedule',
    'Check In',
    'Payments',
    'Notifications',
    'My Documents',
    'Resources',
    'Privacy Policy',
    'Account',
    'Logout'
  ];

  return (
    <Block
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <Block flex style={{ paddingLeft: 8, paddingRight: 14, paddingTop: 10 }}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {screens.map((item, index) => {
            return (
              <DrawerCustomItem
                title={item}
                key={index}
                navigation={navigation}
                focused={state.index === index}
              />
            );
          })}
        </ScrollView>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 3,
    justifyContent: 'center'
  }
});

export default CustomDrawerContent;
