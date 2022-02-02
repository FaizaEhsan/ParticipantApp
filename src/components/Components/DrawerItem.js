import React from "react";
import { StyleSheet, TouchableOpacity, Platform, Dimensions } from "react-native";
import { Block, Text, theme } from "galio-framework";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import argonTheme from "../../constants/Theme";
import { Badge } from 'react-native-elements';

const { height } = Dimensions.get('window');
console.log('height', height);

class DrawerItem extends React.Component {
  renderIcon = () => {
    const { title } = this.props;
    switch (title) {
      case 'Dashboard':
        return (
          <Feather
            name='layout'
            size={22}
            color={argonTheme.COLORS.TEXT}
          />
        );
      case 'Chat':
        return (
          <MaterialIcons
            name='chat-bubble-outline'
            size={22}
            color={argonTheme.COLORS.TEXT}
          />

        );
      case 'Calendar':
        return (
          <Feather
            name='calendar'
            size={22}
            color={argonTheme.COLORS.TEXT}
          />
        );
      case 'Check In':
        return (
          <Feather
            name='check-circle'
            size={22}
            color={argonTheme.COLORS.TEXT}
          />
        );
      case 'Payments':
        return (
          <Feather
            name='credit-card'
            size={22}
            color={argonTheme.COLORS.TEXT}
          />
        );
      case 'Notifications':
        return (
          <Ionicons
            name='notifications-outline'
            size={22}
            color={argonTheme.COLORS.TEXT}
          />
        );
      case 'My Documents':
        return (
          <Feather
            name='file'
            size={22}
            color={argonTheme.COLORS.TEXT}
          />
        );
      case 'Resources':
        return (
          <Feather
            name='folder'
            size={22}
            color={argonTheme.COLORS.TEXT}
          />
        );
      // case 'Privacy Policy':
      //   return (
      //     <Ionicons
      //       name='body-outline'
      //       size={22}
      //       color={argonTheme.COLORS.TEXT}
      //     />
      //   );
        case "Account":
        return (
          <Ionicons
            name="settings"
            size={22}
            color={argonTheme.COLORS.TEXT}
          />
        );
        // case "Logout":
        // return (
        //   <Ionicons
        //     name="log-out"
        //     size={22}
        //     color={argonTheme.COLORS.TEXT}
        //   />
        // );
      default:
        return null;
    }
  };

  renderBadge = () => {
    const { title } = this.props;
    switch (title) {
      case 'Chat': {
        const badgeChat = 2;
        return (
          badgeChat > 0
            ? <Badge
                value={badgeChat}
                badgeStyle={styles.badgeStyle}
                textStyle={styles.textStyle}
                containerStyle={{ top: 10 }}
              />
            : null
        );
      }
      case 'Calendar': {
        const badgeSchedule = 0;
        return (
          badgeSchedule > 0
            ? <Badge
                value={badgeSchedule}
                badgeStyle={styles.badgeStyle}
                textStyle={styles.textStyle}
                containerStyle={{ top: 7 }}
              />
            : null
        );
      }
      case 'Check In': {
        const badgeCheckIn = 0;
        return (
          badgeCheckIn > 0
            ? <Badge
                value={badgeCheckIn}
                badgeStyle={styles.badgeStyle}
                textStyle={styles.textStyle}
                containerStyle={{ top: 7 }}
              />
            : null
        );
      }
      case 'Payments': {
        const badgePayments = 0;
        return (
          badgePayments > 0
            ? <Badge
                value={badgePayments}
                badgeStyle={styles.badgeStyle}
                textStyle={styles.textStyle}
                containerStyle={{ top: 7 }}
              />
            : null
        );
      }
      case 'Notifications': {
        const badgeNotifications = 5;
        return (
          badgeNotifications > 0
            ? <Badge
                value={badgeNotifications}
                badgeStyle={styles.badgeStyle}
                textStyle={styles.textStyle}
                containerStyle={{ top: 10 }}
              />
            : null
        );
      }
      case 'My Documents': {
        const badgeMyDocuments = 0;
        return (
          badgeMyDocuments > 0
            ? <Badge
                value={badgeMyDocuments}
                badgeStyle={styles.badgeStyle}
                textStyle={styles.textStyle}
                containerStyle={{ top: 7 }}
              />
            : null
        );
      }
      case 'Resources': {
        const badgeResources = 0;
        return (
          badgeResources > 0
            ? <Badge
                value={badgeResources}
                badgeStyle={styles.badgeStyle}
                textStyle={styles.textStyle}
                containerStyle={{ top: 7 }}
              />
            : null
        );
      }
      // case 'Privacy Policy': {
      //   const badgePrivacyPolicy = 0;
      //   return (
      //     badgePrivacyPolicy > 0
      //       ? <Badge
      //           value={badgePrivacyPolicy}
      //           badgeStyle={styles.badgeStyle}
      //           textStyle={styles.textStyle}
      //           containerStyle={{ top: 15, left: 22 }}
      //         />
      //       : null
      //   );
      // }
      //         case "Account":
      //           let badgeAccount = 0;
      //         return (
      //           badgeAccount > 0 ?
      //           <Badge
      //           value={badgeAccount}
      //           badgeStyle={{ backgroundColor: '#000' }}
      //           containerStyle={{ position: 'absolute', top: 15, left: 15 }}
      //         />
      // : null
      //         );
      //         case "Logout":
      //           let badgeLogout = 0;
      //         return (
      //           badgeLogout > 0 ?
      //           <Badge
      //           value={badgeLogout}
      //           badgeStyle={{ backgroundColor: '#000' }}
      //           containerStyle={{ position: 'absolute', top: 15, left: 15 }}
      //         />
      // : null
      //         );
      default:
        return null;
    }
  };

  render () {
    const { focused, title, navigation, color } = this.props;

    const containerStyles = [
      styles.defaultStyle,
      focused ? [styles.activeStyle, styles.shadow] : null
    ];

    return (
      <TouchableOpacity
        style={{ height: height > 750 ? 50 : 45 }}
        onPress={() => title === navigation.navigate(title)}
      >
        <Block flex row style={containerStyles}>
          <Block middle row flex={0.20} style={{ paddingRight: 5 }}>
            {this.renderIcon()}
          </Block>
          <Block row center flex={0.70}>
            <Text
              size={15}
              bold={!!focused}
              color={color}
              // color={focused ? "white" : "rgba(0,0,0,0.5)"}
              // color='rgba(0,0,0,0.5)'
            >
              {title}
            </Text>
          </Block>
          <Block flex={0.15}>
            {this.renderBadge()}
          </Block>
        </Block>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 2
  },
  activeStyle: {
    backgroundColor: '#f0f0f0',
    // borderRadius: 4
  },
  textStyle: {
    fontSize: 11
  },
  badgeStyle: {
    backgroundColor: argonTheme.COLORS.BUTTONFILLED,
    paddingHorizontal: Platform.OS === 'ios' ? 0 : 3,
    paddingVertical: Platform.OS === 'ios' ? 0 : 10,
    borderRadius: Platform.OS === 'ios' ? 10 : 10
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.1
  }
});

export default DrawerItem;