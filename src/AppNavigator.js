import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { AntDesign, Feather } from '@expo/vector-icons';
import cartReducer from './redux/reducers/index';

import Splash from './screens/Splash';
import Login from './screens/Login';
import Signup from './screens/Signup';
import All_Deals from './screens/All_Deals';
import Detail_Product from './screens/Detail_Product';
import Men_Clothing from './screens/Men_Clothing';
import Women_Clothing from './screens/Women_Clothing';
import Electronics from './screens/Electronics';
import ProductListScreen from './screens/ProductListScreen';
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen';

const Stack = createNativeStackNavigator();
const store = createStore(cartReducer);

const AppNavigator = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="All_Deals">
          <Stack.Screen
            name="Products"
            component={ProductListScreen}
            options={{ title: 'Products' }}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{ title: 'Giỏ hàng của tôi' }}
          />
          <Stack.Screen
            name="Checkout"
            component={CheckoutScreen}
            options={{ title: 'Checkout' }}
          />
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
            options={({ navigation }) => ({
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
                  <TouchableOpacity
                    style={[
                      styles.cartButton,
                      { flexDirection: 'row', alignItems: 'center' },
                    ]}
                    onPress={() => navigation.navigate('Cart')}>
                    <AntDesign name="shoppingcart" size={24} color="black" />
                  </TouchableOpacity>
                  <Feather
                    name="circle"
                    size={24}
                    color="black"
                    style={{ marginLeft: 15 }}
                  />
                </View>
              ),
            })}
          />

          <Stack.Screen
            name="Detail_Product"
            component={Detail_Product}
            options={({ navigation }) => ({
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
                  <TouchableOpacity
                    style={[
                      styles.cartButton,
                      { flexDirection: 'row', alignItems: 'center' },
                    ]}
                    onPress={() => navigation.navigate('Cart')}>
                    <AntDesign name="shoppingcart" size={24} color="black" />
                  </TouchableOpacity>
                  <Feather
                    name="circle"
                    size={24}
                    color="black"
                    style={{ marginLeft: 15 }}
                  />
                </View>
              ),
            })}
          />

          <Stack.Screen
            name="Men_Clothing"
            component={Men_Clothing}
            options={({ navigation }) => ({
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
                  <TouchableOpacity
                    style={[
                      styles.cartButton,
                      { flexDirection: 'row', alignItems: 'center' },
                    ]}
                    onPress={() => navigation.navigate('Cart')}>
                    <AntDesign name="shoppingcart" size={24} color="black" />
                  </TouchableOpacity>
                  <Feather
                    name="circle"
                    size={24}
                    color="black"
                    style={{ marginLeft: 15 }}
                  />
                </View>
              ),
            })}
          />

          <Stack.Screen
            name="Women_Clothing"
            component={Women_Clothing}
            options={({ navigation }) => ({
              headerTitle: () => (
                <Text style={styles.title_header}>Fashion</Text>
              ),
              headerRight: () => (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 10,
                  }}>
                  <TouchableOpacity
                    style={[
                      styles.cartButton,
                      { flexDirection: 'row', alignItems: 'center' },
                    ]}
                    onPress={() => navigation.navigate('Cart')}>
                    <AntDesign name="shoppingcart" size={24} color="black" />
                  </TouchableOpacity>
                  <Feather
                    name="circle"
                    size={24}
                    color="black"
                    style={{ marginLeft: 15 }}
                  />
                </View>
              ),
            })}
          />

          <Stack.Screen
            name="Electronics"
            component={Electronics}
            options={({ navigation }) => ({
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
                  <TouchableOpacity
                    style={[
                      styles.cartButton,
                      { flexDirection: 'row', alignItems: 'center' },
                    ]}
                    onPress={() => navigation.navigate('Cart')}>
                    <AntDesign name="shoppingcart" size={24} color="black" />
                  </TouchableOpacity>
                  <Feather
                    name="circle"
                    size={24}
                    color="black"
                    style={{ marginLeft: 15 }}
                  />
                </View>
              ),
            })}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  title_header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartButton: {
    marginRight: 10,
  },
  cartButtonText: {
    marginLeft: 5,
    fontSize: 16,
  },
});

export default AppNavigator;
