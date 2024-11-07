import { View, Text, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleValidation = async () => {
    let isValid = true;

    if (!name) {
      setNameError('Please Enter Name');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!email) {
      setEmailError('Please Enter Email');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!mobile) {
      setMobileError('Please Enter Mobile Number');
      isValid = false;
    } else {
      setMobileError('');
    }

    if (!password) {
      setPasswordError('Please Enter Password');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Please Confirm Password');
      isValid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    } else {
      setConfirmPasswordError('');
    }

    if (isValid) {
      // Lưu thông tin người dùng vào AsyncStorage
      const user = { name, email, mobile, password };
      await AsyncStorage.setItem('user', JSON.stringify(user));

      console.log('User registered successfully');
      navigation.navigate('Login');
    }
  };

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
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
          Create New Account
        </Text>

        <CustomTextInput
          placeholder="Enter Name"
          icon={require('../imgs/user.png')}
          value={name}
          onChangeText={(txt) => setName(txt)}
        />
        {nameError ? <Text style={{ color: 'red' }}>{nameError}</Text> : null}

        <CustomTextInput
          placeholder="Enter Email"
          icon={require('../imgs/email.png')}
          value={email}
          onChangeText={(txt) => setEmail(txt)}
        />
        {emailError ? <Text style={{ color: 'red' }}>{emailError}</Text> : null}

        <CustomTextInput
          placeholder="Enter Mobile"
          icon={require('../imgs/smartphone.png')}
          value={mobile}
          onChangeText={(txt) => setMobile(txt)}
        />
        {mobileError ? <Text style={{ color: 'red' }}>{mobileError}</Text> : null}

        <CustomTextInput
          placeholder="Enter Password"
          icon={require('../imgs/password.png')}
          value={password}
          onChangeText={(txt) => setPassword(txt)}
          secureTextEntry={true}
        />
        {passwordError ? <Text style={{ color: 'red' }}>{passwordError}</Text> : null}

        <CustomTextInput
          placeholder="Enter Confirm Password"
          icon={require('../imgs/password.png')}
          value={confirmPassword}
          onChangeText={(txt) => setConfirmPassword(txt)}
          secureTextEntry={true}
        />
        {confirmPasswordError ? (
          <Text style={{ color: 'red' }}>{confirmPasswordError}</Text>
        ) : null}

        <CommonButton
          title={'Sign Up'}
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
            navigation.goBack();
          }}
        >
          Already have an account?
        </Text>
      </View>
    </ScrollView>
  );
};

export default Signup;
