import React from 'react';
// import { withNavigation } from '@react-navigation/compat';
import { withNavigation } from '../Components/withNavigation';
import { StyleSheet, Platform, Dimensions, Text, View } from 'react-native';
import { Block, NavBar, theme } from 'galio-framework';
import { CommonActions, useNavigation  } from '@react-navigation/native';

import { Icon } from 'galio-framework';
import argonTheme from '../../constants/Theme';

const { height, width } = Dimensions.get('window');
const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812 || height === 896 || width === 896);
console.log('height', height);

class Header extends React.Component {
  
  handleLeftPress = () => {
    const { back, navigation, scene } = this.props;
    return (back ? navigation.dispatch(CommonActions.goBack()) : navigation.openDrawer());
  }
  renderRight = () => {
    const { white, title, navigation } = this.props;
    // const { routeName } = navigation.state;

    switch (title) {
      case 'Dashboard':
      case 'Chat':
      case 'Calendar':
      case 'Check In':
      case 'Payments':
      case 'Notifications':
      case 'My Documents':
      case 'Resources':
      case 'Privacy Policy':
      case 'Account':
      case 'Logout':
      case 'MyDocumentsScreen':
      default:
        break;
    }
  }
  
  
 
  render() {
    const { shadow, back, title, right, white, transparent, bgColor, iconColor, titleColor, navigation, ...props } = this.props;
    // const { routeName } = navigation.state;
    const noShadow = ['ResourcesScreen', 'Categories', 'Deals', 'Pro', 'Profile', 'MyDocumentsScreen'].includes(title);
    const headerStyles = [
      !shadow ? styles.shadow : null,
      transparent ? { backgroundColor: 'rgba(0,0,0,0)' } : null,
    ];

    const navbarStyles = [
      styles.navbar,
      bgColor && { backgroundColor: bgColor }
    ];

    return (
      <Block style={headerStyles}>
        <NavBar
          back={false}
          title={title}
          style={navbarStyles}
          transparent={transparent}
          right={<View>{right}</View>}
          // right={this.renderRight()}
          // rightStyle={{ alignItems: 'center' }}
          onLeftPress={this.handleLeftPress}
          left={
            <Icon 
              name={back ? 'chevron-left' : "menu"} family="entypo"  
              size={height > 750 ? 30 : 25} onPress={this.handleLeftPress}
              color={iconColor || (white ? argonTheme.COLORS.TEXT : argonTheme.COLORS.TEXT)}
              style={{ marginTop: 2 }}
              />
          }
          leftStyle={{ paddingVertical: 12 }}
          titleStyle={[
            styles.title,
            { color: argonTheme.COLORS[white ? 'WHITE' : 'HEADER'] },
            titleColor && { color: titleColor }
          ]}
          {...props}
        />
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    position: 'relative',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  navbar: {
    paddingVertical: 0,
    paddingRight: '2%',
    paddingBottom: Platform.OS === 'ios' ? theme.SIZES.BASE * 1.5 : theme.SIZES.BASE * 1.5,
    // paddingTop: Platform.OS === 'ios' ? iPhoneX ? theme.SIZES.BASE * 5 : theme.SIZES.BASE : iPhoneX ? theme.SIZES.BASE * 3 : theme.SIZES.BASE,
    paddingTop: Platform.OS === 'ios' ? height > 700 ? '18%' : '12%' : height > 800 ? '15%' : '12%',
    zIndex: 5,
  },
  shadow: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  notify: {
    backgroundColor: argonTheme.COLORS.LABEL,
    borderRadius: 4,
    height: theme.SIZES.BASE / 2,
    width: theme.SIZES.BASE / 2,
    position: 'absolute',
    top: 9,
    right: 12,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.ICON,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: argonTheme.COLORS.BORDER
  },
  options: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.35,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '400',
    color: argonTheme.COLORS.HEADER
  },
});

export default withNavigation(Header);
