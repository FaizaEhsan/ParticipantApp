import React from 'react';
import { StyleSheet, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import {COLORS, SIZES, FONTS} from '../../../constant'
import { argonTheme } from '../../constants';
import { TextInput } from 'react-native-paper';

const TextInputComp = props => {
    const { Focus, onFocus, onBlur,theme, capitalize, iconNameLeft, iconNameRight, label, onChangeText, value, keyboardType, Error, textContentType, iconNameMaterial, Icon, asterisk } = props;
    return (
        <View style={styles.inputSize}>
            <TextInput  
                theme={theme}
                maxLength={15}
                underlineColor={Error ? argonTheme.COLORS.BUTTONFILLED : argonTheme.COLORS.BUTTONDEFAULT}
                style={Error ? styles.TextInputStyleEmailError : styles.TextInputStyleEmail}   
                label={label}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                autoCapitalize= {capitalize}
                Error={Error}

                // left={iconNameLeft === undefined ? null : <TextInput.Icon name={iconNameLeft} color='#798286' />}
                // right={iconNameRight === undefined ? null : <TextInput.Icon name={iconNameRight} size={20} color='#798286' />}
            />            
        </View>
    )
}

const styles = StyleSheet.create({
    inputSize: {
        flexDirection: 'row'
        // height: '10%'
    },
    txtInput: {
        flex: 1,
        marginTop: -13,
        paddingLeft: 0,
        fontSize: 16,
        // color: COLORS.black,
        fontFamily:'SourceSansPro-Regular'
    },
    TextInputStyleEmail: {
        flex: 1,
        marginBottom: '5%',
        backgroundColor: '#fff',
        fontFamily: 'Inter-Regular',
        fontSize: 13,
        borderBottomColor: argonTheme.COLORS.BUTTONDEFAULT
      },
      TextInputStyleEmailError: {
        flex: 1,
        marginBottom: '5%',
        backgroundColor: '#fff',
        fontFamily: 'Inter-Regular',
        fontSize: 13,
        borderBottomColor: argonTheme.COLORS.BUTTONFILLED
      }
});

export default TextInputComp;