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
import { Text, Checkbox } from 'galio-framework';
const CheckBoxComp = props => {
    const {  value,onChange,label} = props;
    return (
        <View style={styles.inputSize}>
            <Checkbox
                checkboxStyle={{
                  borderWidth: value ? 2 : 0
                }}
                color={value ? argonTheme.COLORS.TEXT : argonTheme.COLORS.CHECKBOXCOLOR}
                labelStyle={{
                  color: argonTheme.COLORS.TEXT,
                  fontSize: 13,
                  fontFamily: 'Inter-Regular'
                }}
                label={label}
               value={value}
               onChange={onChange}
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

export default CheckBoxComp;