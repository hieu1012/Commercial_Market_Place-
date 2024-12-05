import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  updateQuantity,
  toggleItemSelection,
} from '../redux/actions/index';

const CartScreen = ({ navigation }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const renderCartItemUpgrate = ({ item }) => (
    <View key={item.id} style={styles.itemContainer}>
      <Checkbox
        status={item.selected ? 'checked' : 'unchecked'}
        onPress={() => dispatch(toggleItemSelection(item.id))}
      />
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemInfomation}>
        <Text style={styles.itemName}>{item.title}</Text>
        <Text style={styles.itemDescription}>{item.color}</Text>
        <View style={styles.itemPriceQuatityContainer}>
          <Text> Giá:</Text>
          <Text style={styles.itemPrice}>{item.price} ₫</Text>
          <View style={styles.itemQuantityContainer}>
            <TouchableOpacity
              onPress={() => {
                if (item.quantity > 1) {
                  dispatch(updateQuantity(item.id, item.quantity - 1));
                }
              }}>
              <Text style={styles.quantityControl}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{item.quantity}</Text>
            <TouchableOpacity
              onPress={() =>
                dispatch(updateQuantity(item.id, item.quantity + 1))
              }>
              <Text style={styles.quantityControl}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => dispatch(removeFromCart(item.id))}
        style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  const selectedItems = cart.filter((item) => item.selected);

  // Tính tổng số lượng sản phẩm được chọn
  const totalSelectedQuantity = selectedItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // Tính tổng giá trị của sản phẩm được chọn
  const totalAmount = selectedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <Text style={styles.emptyCart}>Your cart is empty</Text>
      ) : (
        <>
          <ScrollView style={styles.cartList}>
            <FlatList
              data={cart}
              renderItem={renderCartItemUpgrate}
              keyExtractor={(item) => item.id.toString()}
            />
          </ScrollView>

          <View style={styles.footer}>
            <Text style={styles.totalText}>
              Tổng cộng: {totalAmount.toLocaleString()} ₫
            </Text>
            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={() => navigation.navigate('Checkout')}>
              <Text style={styles.checkoutButtonText}>
                Thanh toán ({totalSelectedQuantity})
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartList: {
    flex: 1,
    paddingHorizontal: 8,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },

  itemInfomation: {
    flex: 1,
  },

  itemName: {
    fontSize: 16,
    fontWeight: '500',
  },
  itemDescription: {},

  itemPriceQuatityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  itemQuantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityControl: {
    fontSize: 20,
    paddingHorizontal: 4,
    color: '#007AFF',
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    fontSize: 20,
    paddingHorizontal: 4,
    color: '#007AFF',
  },
  quantityText: {
    fontSize: 16,
    paddingHorizontal: 8,
  },
  removeButton: {
    backgroundColor: '#FF3B30',
    padding: 8,
    borderRadius: 4,
  },
  removeButtonText: {
    color: '#fff',
  },
  emptyCart: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
    color: '#666',
  },

  footer: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#34C759',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartScreen;
