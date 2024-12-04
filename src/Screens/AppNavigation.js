import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign, Feather } from '@expo/vector-icons';

import Splash from '../../src/Screens/Splash';
import Login from '../../src/Screens/Login';
import Signup from '../../src/Screens/Signup';
import Home from '../../src/Screens/Home';
import All_Deals from '../../src/Screens/All_Deal';
import Detail_Product from '../../src/Screens/Detail_Product';
import Men_Clothing from '../../src/Screens/Men_Clothing';
import Women_Clothing from '../../src/Screens/Women_Clothing';
import Electronics from '../../src/Screens/Electronics';
import Test from '../../src/Screens/Test';



const Stack = createNativeStackNavigator();

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="All_Deals">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          name="All_Deals"
          component={All_Deals}
          options={{
            headerTitle: () => (
              <Text style={styles.title_header}>All Deals</Text>
            ),
            headerRight: () => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <AntDesign name="shoppingcart" size={24} color="black" />
                <Feather
                  name="circle"
                  size={24}
                  color="black"
                  style={{ marginLeft: 15 }}
                />
              </View>
            ),
          }}
        />

        <Stack.Screen
          name="Detail_Product"
          component={Detail_Product}
          options={{
            headerTitle: () => (
              <Text style={styles.title_header}>Detail Product</Text>
            ),
            headerRight: () => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <AntDesign name="shoppingcart" size={24} color="black" />
                <Feather
                  name="circle"
                  size={24}
                  color="black"
                  style={{ marginLeft: 15 }}
                />
              </View>
            ),
          }}
        />

        <Stack.Screen
          name="Men_Clothing"
          component={Men_Clothing}
          options={{
            headerTitle: () => (
              <Text style={styles.title_header}>Men Clothing</Text>
            ),
            headerRight: () => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <AntDesign name="shoppingcart" size={24} color="black" />
                <Feather
                  name="circle"
                  size={24}
                  color="black"
                  style={{ marginLeft: 15 }}
                />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Women_Clothing"
          component={Women_Clothing}
          options={{
            headerTitle: () => <Text style={styles.title_header}>Fashion</Text>,
            headerRight: () => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <AntDesign name="shoppingcart" size={24} color="black" />
                <Feather
                  name="circle"
                  size={24}
                  color="black"
                  style={{ marginLeft: 15 }}
                />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Electronics"
          component={Electronics}
          options={{
            headerTitle: () => (
              <Text style={styles.title_header}>Electronics</Text>
            ),
            headerRight: () => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <AntDesign name="shoppingcart" size={24} color="black" />
                <Feather
                  name="circle"
                  size={24}
                  color="black"
                  style={{ marginLeft: 15 }}
                />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Test"
          component={Test}
          options={{
            headerTitle: () => (
              <Text style={styles.title_header}>Electronics</Text>
            ),
            headerRight: () => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <AntDesign name="shoppingcart" size={24} color="black" />
                <Feather
                  name="circle"
                  size={24}
                  color="black"
                  style={{ marginLeft: 15 }}
                />
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  title_header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

