import React, { useState } from 'react';
import { StyleSheet, View,  TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { argonTheme } from '../../constants';
import { TextInput } from 'react-native-paper';

const TextInputPasswordComp = props => {
    const { Focus, onFocus, onBlur,capitalize, iconNameLeft, iconNameRight, label, onChangeText, value, keyboardType, Error, textContentType, iconNameMaterial, Icon, asterisk } = props;

  
    
    const [showPassword, setShowPassword] = useState(true);

    const onIconPress = () => {
        setShowPassword(!showPassword);
      };

      
   

    

    return (
        <View style={[styles.inputSize, { marginTop: '3%', }]}>


<TextInput  
                theme={{
                colors: {
                  primary: Error ? argonTheme.COLORS.BUTTONFILLED : 'black',
                  placeholder: Error ? argonTheme.COLORS.BUTTONFILLED : argonTheme.COLORS.TEXT
                }
                }}
                maxLength={15}
                
                underlineColor={Error ? argonTheme.COLORS.BUTTONFILLED : argonTheme.COLORS.BUTTONDEFAULT}
                style={Error ? styles.TextInputStylePasswordError : styles.TextInputStylePassword}
                Error={Error}
               right={showPassword
                    ? <TextInput.Icon
                        color='#798286'
                        name='eye-outline' 
                       
                        forceTextInputFocus={false}
                        onPress={onIconPress}
                      />
                    :  <TextInput.Icon
                    color='#798286'
                    name='eye-off-outline'
                    forceTextInputFocus={false}
                    onPress={onIconPress}
                  />}   

                   





                label={label}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                secureTextEntry={!showPassword}
                autoCapitalize= {capitalize}
                // left={iconNameLeft === undefined ? null : <TextInput.Icon name={iconNameLeft} color='#798286' />}
                // right={iconNameRight === undefined ? null : <TextInput.Icon name={iconNameRight} size={20} color='#798286' />}
            />            












            
         
        


            {/* <TextInput
                            onFocus={onFocus}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            placeholderTextColor='#666666'
                            secureTextEntry={!!secureTextEntry}
                            style={styles.txtInput}
                            autoCapitalize='none'
                            onChangeText={onChangeText}
                            defaultValue={defaultValue}
                        /> */}
            {/* <TouchableOpacity
                onPress={updateSecureTextEntry}
            >
                {secureTextEntry
                    ? <Feather
                        name='eye-off'
                        color={COLORS.darkBlue}
                        size={SIZES.icon5}
                    />
                    : <Feather
                        name='eye'
                        color={COLORS.primary}
                        size={SIZES.icon5}
                    />}
            </TouchableOpacity> */}
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

    


    TextInputStylePassword: {
        flex: 1,
        marginBottom: '5%',
        backgroundColor: '#fff',
        fontFamily: 'Inter-Regular',
        fontSize: 13,
        borderBottomColor: argonTheme.COLORS.BUTTONDEFAULT
      },
      TextInputStylePasswordError: {
        fontSize: 13,
        fontFamily: 'Inter-Regular',
        backgroundColor: '#fff',
        borderBottomColor: argonTheme.COLORS.BUTTONFILLED
      }
});

export default TextInputPasswordComp;