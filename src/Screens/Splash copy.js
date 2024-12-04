import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);

    return () => clearTimeout(timer); // Dọn dẹp timeout khi component unmount
  }, [navigation]); // Thêm navigation vào mảng dependencies

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
      <Image
        source={require('../imgs/playstore.png')}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          resizeMode: 'center',
        }}
      />
    </View>
  );
};

export default Splash;
