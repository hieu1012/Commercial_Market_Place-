import { View, Image, TextInput } from 'react-native';
import React from 'react';

const CustomTextInput = ({ value, onChangeText, placeholder, icon, type }) => {
  return (
    <View
      style={{
        alignSelf: 'center',
        width: '85%',
        height: 50,
        borderRadius: 10,
        borderWidth: 0.5,
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
      }}>
      <Image source={icon} style={{ height: 24, width: 24 }} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={{ marginLeft: 10,}}
        secureTextEntry = {type == 'password' ? true:false}
      />
    </View>
  );
};

export default CustomTextInput;
