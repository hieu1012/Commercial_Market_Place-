import { View, Text, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleValidation = async () => {
    let isValid = true;

    if (!email) {
      setEmailError('Please Enter Email');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Please Enter Password');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      // Lấy thông tin người dùng từ AsyncStorage
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        const user = JSON.parse(storedUser);

        // Kiểm tra email và mật khẩu
        if (user.email === email && user.password === password) {
          console.log('Login successful');
          navigation.navigate('All_Deals');
        } else {
          setPasswordError('Invalid email or password');
        }
      } else {
        setPasswordError('User not found. Please sign up.');
      }
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: 20 }}>
          <Image
            source={require('../imgs/playstore.png')}
            style={{ width: 60, height: 60, alignSelf: 'center', marginTop: 100 }}
          />
          <Text
            style={{
              marginTop: 50,
              alignSelf: 'center',
              fontSize: 24,
              fontWeight: '600',
              color: '#000',
            }}
          >
            Login
          </Text>

          <CustomTextInput
            placeholder="Enter Email"
            icon={require('../imgs/email.png')}
            value={email}
            onChangeText={(txt) => {
              setEmail(txt);
            }}
          />

          {emailError ? (
            <Text style={{ color: 'red', marginTop: 10, marginLeft: 32 }}>{emailError}</Text>
          ) : null}

          <CustomTextInput
            secureTextEntry={true}
            placeholder="Enter Password"
            icon={require('../imgs/password.png')}
            value={password}
            onChangeText={(txt) => {
              setPassword(txt);
            }}
          />
          {passwordError ? (
            <Text style={{ color: 'red', marginTop: 10, marginLeft: 32 }}>{passwordError}</Text>
          ) : null}

          <CommonButton
            title={'Login'}
            bgColor={'#000'}
            textColor={'#fff'}
            onPress={handleValidation}
          />

          <Text
            style={{
              fontSize: 14,
              fontWeight: '300',
              alignSelf: 'center',
              marginTop: 20,
              textDecorationLine: 'underline',
            }}
            onPress={() => {
              navigation.navigate('Signup');
            }}
          >
            Create New Account?
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
