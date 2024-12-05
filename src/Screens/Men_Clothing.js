import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
  FlatList,
  Pressable,
} from 'react-native';
import {
  FontAwesome,
  AntDesign,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/index';
const type_men_data = [
  {
    id: '1',
    img: 'https://m.yodycdn.com/100/438/408/products/ao-thun-nam-stm6007-den-2.jpg?v=1690163400750',
    type: 't-shirt',
  },
  {
    id: '2',
    img: 'https://m.yodycdn.com/100/438/408/products/ao-polo-nam-sam6067-x1m-5-yody.jpg?v=1690163529187',
    title: 'polo',
  },
  {
    id: '3',
    img: 'https://m.yodycdn.com/products/quan-jeans-nam-yody-qjm6037-xtu-gut6090-bee-7.jpg',
    type: 'jeans',
  },
  {
    id: '4',
    img: 'https://m.yodycdn.com/products/that-lung-nam-tlm7007-den-4.jpg',
    type: 'belt',
  },
  {
    id: '5',
    img: 'https://m.yodycdn.com/products/ao-khoac-nam-SKM7003-NAV (1).jpg',
    type: 'jacket',
  },
];

const Item_SanPham = ({ obj }) => {
  return (
    <View style={styles.item_product}>
      <Image source={{ uri: obj.img }} style={styles.img_produc} />
      <View style={styles.box_title_icon}>
        <View style={styles.title_icon}>
          <Text style={{ fontSize: 20, fontWeight: 500 }}>{obj.title}</Text>
          <Feather name="plus-circle" size={24} color="black" />
        </View>
        <View style={styles.title_icon}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../imgs/star.png')}
              style={styles.sao_SanPham}
            />
            <Image
              source={require('../imgs/star.png')}
              style={styles.sao_SanPham}
            />
            <Image
              source={require('../imgs/star.png')}
              style={styles.sao_SanPham}
            />
            <Image
              source={require('../imgs/star.png')}
              style={styles.sao_SanPham}
            />
          </View>

          <Text style={styles.price}>{obj.price}</Text>
        </View>
      </View>
    </View>
  );
};

const Item_DanhMuc = ({ obj }) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          width: 90,
          height: 90,
          borderRadius: 10,
          overflow: 'hidden', // Đảm bảo nội dung bên trong không bị tràn ra ngoài
          marginRight: 20,
        }}>
        <Image
          source={{ uri: obj.img }}
          style={{
            width: '100%',
            height: '100%',
            // resizeMode: 'cover', // Cắt ảnh để phù hợp với kích thước đã chuẩn bị sẵn
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default function Men_Clothing({ navigation }) {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  // Giả sử bạn muốn lấy các sản phẩm có `type` là "t-shirt":
  const selectedType = 't-shirt'; // Loại sản phẩm bạn muốn lọc
  const filteredProducts = products.filter(
    (product) => product.type === selectedType
  );
  const [selectedCategory, setSelectedCategory] = useState();
  const [filter, setFilter] = useState('bestSales'); // Mặc định là Best Sales
  const [showAll, setShowAll] = useState(false); // Hiển thị tất cả hoặc chỉ 4 sản phẩm
  const handleCategorySelect = (id) => {
    setSelectedCategory(id);
    setFilter('bestSales');
    setShowAll(false);
  };
  const handleSeeAll = () => {
    setShowAll(true);
  };

  const type = 't-shirt'; // Ví dụ giá trị type
  const classify = 'Popular'; // Ví dụ giá trị classify

  const productsToShow = showAll
    ? products.filter(
        (product) => product.type === type && product.classify === classify
      )
    : products
        .filter(
          (product) => product.type === type && product.classify === classify
        )
        .slice(0, 4);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Detail_Product', { product: item })
        }>
        <View style={styles.item_product}>
          <View style={styles.img_item}>
            <Image source={{ uri: item.image }} style={styles.img_produc} />
          </View>
          <View style={styles.box_title_icon}>
            <View style={styles.title_icon}>
              <Text style={{ fontSize: 15, fontWeight: 500 }}>
                {item.title}
              </Text>

              <TouchableOpacity onPress={() => dispatch(addToCart(item))}>
                <Feather name="plus-circle" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.title_icon}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={require('../imgs/star.png')}
                  style={styles.sao_SanPham}
                />
                <Image
                  source={require('../imgs/star.png')}
                  style={styles.sao_SanPham}
                />
                <Image
                  source={require('../imgs/star.png')}
                  style={styles.sao_SanPham}
                />
                <Image
                  source={require('../imgs/star.png')}
                  style={styles.sao_SanPham}
                />
              </View>

              <Text style={styles.price}>{item.price} đ</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false} // Ẩn thanh cuộn dọc
      >
        {/* Thanh Tim Kiem */}
        <View style={styles.section_search}>
          <FontAwesome
            name="search"
            size={18}
            color="black"
            style={styles.icon_search}
          />
          <TextInput
            style={styles.input_search}
            placeholder="Search for product"
            placeholderTextColor="rgb(207,208,212)"
          />
        </View>
        {/* Danh mục */}
        <View
          style={{
            width: '100%',
            height: 140,
            // backgroundColor:'red',
            marginTop: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 18,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Categories
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: '',
              }}>
              See all
            </Text>
          </View>

          {/* Ảnh sản phẩm trong danh mục */}
          <View
            style={{
              marginTop: 8,
              marginLeft: 15,
            }}>
            <FlatList
              data={type_men_data}
              renderItem={({ item }) => <Item_DanhMuc obj={item} />}
              // renderItem={({ item }) => <Item obj={item} navigation={navigation} />}
              keyExtractor={(item) => item.id}
              horizontal={true} // Hiển thị theo chiều ngang
              showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
              contentContainerStyle={styles.flatListContent} // Thêm style cho FlatList
            />
          </View>
        </View>

        {/* Danh  sản phẩm */}
        <View
          style={{
            // backgroundColor:'blue',
            width: '100%',
            height: 'auto',
          }}>
          {/* Box title sales */}
          {/* Mục lọc sản phẩm */}
          <View style={styles.filtersContainer}>
            <Pressable onPress={() => setFilter('bestSales')}>
              <Text
                style={[
                  styles.filterText,
                  filter === 'bestSales' && styles.selectedFilter,
                ]}>
                Best Sales
              </Text>
            </Pressable>
            <Pressable onPress={() => setFilter('bestMatched')}>
              <Text
                style={[
                  styles.filterText,
                  filter === 'bestMatched' && styles.selectedFilter,
                ]}>
                Best Matched
              </Text>
            </Pressable>
            <Pressable onPress={() => setFilter('popular')}>
              <Text
                style={[
                  styles.filterText,
                  filter === 'popular' && styles.selectedFilter,
                ]}>
                Popular
              </Text>
            </Pressable>
          </View>

          {/* hiển thị sản phẩm*/}
          <View
            style={{
              height: '100%',
              width: '100%',
              marginLeft: 18,
            }}>
            <View
              style={{
                marginTop: 15,
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <FlatList
                data={productsToShow}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                vertical={true} // Hiển thị theo chiều dọc
                showsVerticalScrollIndicator={false}
                contentContainerStyle={
                  {
                    // justifyContent: 'center',
                    // alignItems: 'center',
                  }
                } // Thêm style cho FlatList
              />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footer_icon_text}>
          <AntDesign name="home" size={24} color="black" />
          <Text style={styles.footer_text}>Home</Text>
        </View>
        <View style={styles.footer_icon_text}>
          <Ionicons name="search-outline" size={24} color="black" />
          <Text style={styles.footer_text}>Search</Text>
        </View>
        <View style={styles.footer_icon_text}>
          <MaterialIcons name="favorite-border" size={24} color="black" />
          <Text style={styles.footer_text}>Favorites</Text>
        </View>
        <View style={styles.footer_icon_text}>
          <Ionicons name="chatbox-outline" size={24} color="black" />
          <Text style={styles.footer_text}>Inbox</Text>
        </View>
        <View style={styles.footer_icon_text}>
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={24}
            color="black"
          />
          <Text style={styles.footer_text}>Account</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 750,
    width: 392,
    // borderWidth:1,
    // backgroundColor:'red'
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },

  filterText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#888',
  },

  selectedFilter: {
    color: '#000',
    borderBottomWidth: 2,
    borderBottomColor: '#4a90e2',
  },
  scrollView: {
    width: '100%', // Đặt chiều rộng cố định
    height: '80%', // Đặt chiều cao cố định

    // borderWidth: 1, // Đường viền để dễ nhìn thấy container
    // borderColor: 'blue',
  },
  section_search: {
    marginTop: 15,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  icon_search: {
    // position:'absolute',
    // marginRight:'82%',
    // transform: [{ translateY: '15%' }]
    position: 'absolute',
    left: 25,
    zIndex: 1, //Đảm bảo biểu tượng nằm trên TextInput
  },
  input_search: {
    height: 30,
    width: '90%',
    backgroundColor: 'rgb(243,244,246)',
    // borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 30,
    borderWidth: 1,
    borderColor: 'rgb(207,208,212)',
  },

  //Title Sales
  box_Title_Sales: {
    height: 25,
    width: 100,
    borderRadius: 15,

    borderWidth: 1,
    borderColor: 'rgb(207,208,212)',
  },
  title_Sales: {
    textAlign: 'center',
    fontWeight: 500,
  },
  sao_SanPham: {
    height: 15,
    width: 15,
  },

  item_product: {
    height: 110,
    width: '90%',
    borderWidth: 1,
    overflow: 'hidden', // Đảm bảo nội dung bên trong không bị tràn ra ngoài,
    borderRadius: 8,
    borderColor: 'rgb(207,208,212)',
    flexDirection: 'row',
    marginBottom: 10,
  },
  img_item: {
    overflow: 'hidden',
    width: 110,
    height: 110,
    // borderWidth:1,
  },
  img_produc: {
    width: '80%',
    height: '100%',
    resizeMode: 'cover',
  },
  box_title_icon: {
    flexDirection: 'column',
    width: 200,
    // marginHorizontal:20,
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  title_icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: { fontSize: 24, fontWeight: 500 },

  footer: {
    height: '8%',
    width: '100%',
    // backgroundColor:'blue'
    borderTopWidth: 0.5,
    borderColor: 'rgb(207,208,212)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  footer_icon_text: {
    alignItems: 'center',
  },
  footer_text: {
    fontWeight: '500',
  },
});
