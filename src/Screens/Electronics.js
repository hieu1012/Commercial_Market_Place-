import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
  FlatList,
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



const DATA_AnhDanhMuc = [
  {
    id: '1',
    img: 'https://down-vn.img.susercontent.com/file/c7db377b177fc8e2ff75a769022dcc23',
  },
  {
    id: '1',
    img: 'https://down-vn.img.susercontent.com/file/c7db377b177fc8e2ff75a769022dcc23',
  },
  {
    id: '1',
    img: 'https://down-vn.img.susercontent.com/file/c7db377b177fc8e2ff75a769022dcc23',
  },
  {
    id: '1',
    img: 'https://down-vn.img.susercontent.com/file/c7db377b177fc8e2ff75a769022dcc23',
  },
  {
    id: '1',
    img: 'https://down-vn.img.susercontent.com/file/c7db377b177fc8e2ff75a769022dcc23',
  },
  {
    id: '1',
    img: 'https://down-vn.img.susercontent.com/file/c7db377b177fc8e2ff75a769022dcc23',
  },
  {
    id: '1',
    img: 'https://down-vn.img.susercontent.com/file/c7db377b177fc8e2ff75a769022dcc23',
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

const Item_Category = ({ obj }) => {
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
          source={{ uri: obj.image }}
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

export default function Electronics({ navigation }) {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const filteredProducts = products.filter((product) => product.category === 'Electronics');




  const [electronic, setElectronic] = useState([]);

  useEffect(() => {
    fetch('https://66fc9835c3a184a84d176ec7.mockapi.io/data')
      .then((res) => res.json())
      .then((json) => {
        const filteredElectronics = json.filter(
          (item) => item.category === 'Electronics'
        );
        setElectronic(filteredElectronics);
      });
  });




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
        showsVerticalScrollIndicator={false}>
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

        {/* Sub Category */}
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
              data={electronic}
              renderItem={({ item }) => <Item_Category obj={item} />}
              // renderItem={({ item }) => <Item obj={item} navigation={navigation} />}
              keyExtractor={(item) => item.id}
              horizontal={true} // Hiển thị theo chiều ngang
              showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
              // contentContainerStyle={styles.flatListContent} // Thêm style cho FlatList
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
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginHorizontal: 30,
            }}>
            <View
              style={[styles.box_Title_Sales, { backgroundColor: '#EBFDFF' }]}>
              <Text style={[styles.title_Sales, { color: '#39BACD' }]}>
                Best Sales
              </Text>
            </View>
            <View style={[styles.box_Title_Sales, {}]}>
              <Text style={styles.title_Sales}>Best Matched</Text>
            </View>
            <View style={[styles.box_Title_Sales, {}]}>
              <Text style={styles.title_Sales}>Popular</Text>
            </View>
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
                data={filteredProducts}
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
  price: { fontSize: 18, fontWeight: 500 },

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
