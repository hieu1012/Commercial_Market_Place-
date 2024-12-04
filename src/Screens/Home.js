import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>All Deals</Text>
        <View style={styles.headerIcons}>
          <FontAwesome name="shopping-cart" size={24} color="black" style={styles.icon} />
          <Image
            source={{ uri: 'https://your-avatar-url.com/avatar.png' }}
            style={styles.avatar}
          />
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={18} color="gray" />
        <TextInput
          placeholder="Search for product"
          style={styles.searchInput}
        />
        <FontAwesome name="sliders" size={18} color="gray" style={styles.filterIcon} />
      </View>

      {/* Category Section */}
      <View style={styles.categoriesContainer}>
        <TouchableOpacity style={styles.category}>
          <Image source={{ uri: 'https://your-image-url.com/electronics.png' }} style={styles.categoryImage} />
          <Text>Electronics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Image source={{ uri: 'https://your-image-url.com/fashion.png' }} style={styles.categoryImage} />
          <Text>Fashion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Image source={{ uri: 'https://your-image-url.com/beauty.png' }} style={styles.categoryImage} />
          <Text>Beauty</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Image source={{ uri: 'https://your-image-url.com/fresh.png' }} style={styles.categoryImage} />
          <Text>Fresh</Text>
        </TouchableOpacity>
      </View>

      {/* Deal Section */}
      <View style={styles.dealContainer}>
        <Text style={styles.dealTitle}>Shoes</Text>
        <Text style={styles.dealSubtitle}>50% off</Text>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy now</Text>
        </TouchableOpacity>
        <Image
          source={{ uri: 'https://your-image-url.com/shoes.png' }}
          style={styles.dealImage}
        />
      </View>

      {/* Additional Deals Section */}
      <View style={styles.additionalDealsContainer}>
        <TouchableOpacity style={styles.additionalDeal}>
          <Image source={{ uri: 'https://your-image-url.com/bag.png' }} style={styles.additionalDealImage} />
          <Text style={styles.discountLabel}>30%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.additionalDeal}>
          <Image source={{ uri: 'https://your-image-url.com/laptop.png' }} style={styles.additionalDealImage} />
          <Text style={styles.discountLabel}>30%</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    padding: 10,
  },
  filterIcon: {
    marginLeft: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  category: {
    alignItems: 'center',
  },
  categoryImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  dealContainer: {
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
  },
  dealTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dealSubtitle: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
  },
  buyButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  buyButtonText: {
    color: '#fff',
  },
  dealImage: {
    width: '100%',
    height: 100,
    marginTop: 10,
    borderRadius: 10,
  },
  additionalDealsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  additionalDeal: {
    width: '48%',
    position: 'relative',
  },
  additionalDealImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  discountLabel: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'red',
    color: '#fff',
    paddingHorizontal: 5,
    borderRadius: 3,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Home;
