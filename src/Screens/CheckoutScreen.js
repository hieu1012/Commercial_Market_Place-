import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';



const CheckoutScreen = ({ navigation }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('');

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  useEffect(() => {
    if (cart.length > 0) {
      Alert.alert('Notification', 'Cart data has been loaded successfully!');
    }
  }, [cart]);

  const handleInputChange = (field, value) => {
    setShippingInfo({ ...shippingInfo, [field]: value });
  };

  const handlePaymentMethodSelect = (method) => {
    setPaymentMethod(method);
  };

  const handlePlaceOrder = () => {
    if (!shippingInfo.name || !shippingInfo.address || !shippingInfo.phone || !shippingInfo.email) {
      Alert.alert('Error', 'Please fill in all shipping information fields.');
      return;
    }
    if (!paymentMethod) {
      Alert.alert('Error', 'Please select a payment method.');
      return;
    }
    Alert.alert(
      'Order Placed Successfully',
      'Thank you for your order! A confirmation email has been sent.',
      [
        {
          text: 'OK',
          onPress: () => {
            dispatch(cartActions.clearCart());
            navigation.navigate('Products');
          },
        },
      ]
    );
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(cartActions.updateQuantity(productId, newQuantity));
    } else {
      dispatch(cartActions.removeFromCart(productId));
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Checkout</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shipping Information</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={shippingInfo.name}
          onChangeText={(text) => handleInputChange('name', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={shippingInfo.address}
          onChangeText={(text) => handleInputChange('address', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={shippingInfo.phone}
          onChangeText={(text) => handleInputChange('phone', text)}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={shippingInfo.email}
          onChangeText={(text) => handleInputChange('email', text)}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Method</Text>
        {['Credit Card', 'Bank Transfer', 'E-Wallet', 'Cash on Delivery'].map(
          (method) => (
            <TouchableOpacity
              key={method}
              style={[
                styles.paymentMethod,
                paymentMethod === method && styles.selectedPaymentMethod,
              ]}
              onPress={() => handlePaymentMethodSelect(method)}>
              <Text style={styles.paymentMethodText}>{method}</Text>
            </TouchableOpacity>
          )
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Summary</Text>
        {cart.map((item) => (
          <View key={item.id} style={styles.orderItem}>
            <Text style={styles.orderItemName}>{item.title}</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => handleUpdateQuantity(item.id, item.quantity - 1)}>
                <Text style={styles.quantityButton}>-</Text>
              </TouchableOpacity>
              <Text style={styles.orderItemQuantity}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => handleUpdateQuantity(item.id, item.quantity + 1)}>
                <Text style={styles.quantityButton}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.orderItemPrice}>
              ${(item.price * item.quantity).toFixed(2)}
            </Text>
          </View>
        ))}
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalAmount}>${totalAmount.toFixed(2)}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.placeOrderButton}
        onPress={handlePlaceOrder}>
        <Text style={styles.placeOrderButtonText}>Thanh toán</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  paymentMethod: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  selectedPaymentMethod: {
    backgroundColor: '#e6f3ff',
    borderColor: '#007AFF',
  },
  paymentMethodText: {
    fontSize: 16,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  orderItemName: {
    flex: 2,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  quantityButton: {
    fontSize: 20,
    paddingHorizontal: 10,
    color: '#007AFF',
  },
  orderItemQuantity: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  orderItemPrice: {
    flex: 1,
    textAlign: 'right',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  placeOrderButton: {
    backgroundColor: '#34C759',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  placeOrderButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;

