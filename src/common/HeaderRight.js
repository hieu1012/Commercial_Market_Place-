import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HeaderRight = () => {
  const navigation = useNavigation();
  
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
      <TouchableOpacity onPress={() => navigation.navigate('Screen2')}>
        <AntDesign
          name="shoppingcart"
          size={24}
          color="black"
        />
      </TouchableOpacity>
      <Feather name="circle" size={24} color="black" style={{ marginLeft: 15 }} />
    </View>
  );
};

export default HeaderRight;

