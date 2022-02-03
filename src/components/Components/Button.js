import React ,{useState} from 'react';
import { StyleSheet, View,Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { Text, Checkbox } from 'galio-framework';
// import {COLORS, SIZES, FONTS} from '../../../constant'
import { argonTheme } from '../../constants';
import { TextInput,Button } from 'react-native-paper';
const { width, height } = Dimensions.get('screen');

const ButtonComp = props => {
    const { Focus, onFocus, onBlur, capitalize,onPress, iconNameLeft,title,iconNameRight, label, onChangeText, value, keyboardType, Error, textContentType, iconNameMaterial, Icon, asterisk } = props;
    const [buttonDisable, setButtonDisable] = useState(true);




    
    return (
        <View style={styles.inputSize}>
           <Button
              mode='contained'
              color={value ? argonTheme.COLORS.BUTTONDEFAULT : argonTheme.COLORS.BUTTONFILLED}
              disabled={value}
              style={styles.createButtonLogin}
              contentStyle={styles.ContentStyle}
              labelStyle={{ fontFamily: 'Inter-Regular' }}
              uppercase={false}
              value={value}
              title={title}
              onPress={onPress}
              
            >
              <Text
                size={15}
                color={value ? argonTheme.COLORS.TEXT : argonTheme.COLORS.WHITE}
              >
                {title}
              </Text>
            </Button>
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
      },

      createButtonLogin: {
        // width: width * 0.88,
        // height: height * 0.06,
        marginTop: '13%',
        width:'100%'
      },
      ContentStyle: {
        height: height * 0.06
      },
});

export default ButtonComp;