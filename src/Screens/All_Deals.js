import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  FontAwesome,
  AntDesign,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const catergoris_data = [
  {
    id: '1',
    img: 'https://down-vn.img.susercontent.com/file/c7db377b177fc8e2ff75a769022dcc23',
    title: 'Men clothing',
  },
  {
    id: '2',
    img: 'https://vn-test-11.slatic.net/p/41b28d8d0193a744abb723de6b481059.jpg',
    title: 'Women clothing',
  },
  {
    id: '3',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyznNBWscYJj0G7ZHsCQigtxjvM5Ayno0ruQ&s',
    title: 'Electronics',
  },
  {
    id: '4',
    img: 'https://m.media-amazon.com/images/I/51s2WycAWPL._AC_UF894,1000_QL80_.jpg',
    title: 'Jewelery',
  },
];

const DATA_RECOMMENT = [
  {
    id: '1',
    title: 'Shoe',
    img: 'https://drake.vn/image/catalog/H%C3%ACnh%20content/hinh-anh-giay-vans/hinh-anh-giay-vans-17.jpg',
    score: '4.5',
    price: '299$',
  },
  {
    id: '2',
    title: 'Shoe',
    img: 'https://drake.vn/image/catalog/H%C3%ACnh%20content/hinh-anh-giay-vans/hinh-anh-giay-vans-17.jpg',
    score: '4.5',
    price: '299$',
  },
];

export default function All_Deals({ navigation }) {
  const products = useSelector((state) => state.products);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail_Product', { product: item })}>
      <View style={styles.recomment_item}>
        <View style={styles.img_item}>
          <Image source={{ uri: item.image }} style={styles.recomemnt_img} />
        </View>
        <Text style={styles.recomment_price}>{item.catergory}</Text>
      </View>
    </TouchableOpacity>
  );

  const Item_Category = ({ obj }) => {
    let handlePress = () => {
      if (obj.title == 'Men clothing') {
        navigation.navigate('Men_Clothing');
      }
      if (obj.title == 'Women clothing') {
        navigation.navigate('Women_Clothing');
      }
      if (obj.title == 'Electronics') {
        navigation.navigate('Electronics');
      }
      if (obj.title == 'Jewelery') {
        navigation.navigate('Jewelery');
      }
    };

    return (
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.section_category}>
          <View style={styles.circle_category}>
            <Image source={{ uri: obj.img }} style={styles.image_category} />
          </View>
          <Text style={styles.title_category}>{obj.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const Item_Recomment = ({ item }) => {
    let handlePress = () => {};

    return (
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.recomment_item}>
          <Image source={{ uri: item.img }} style={styles.recomemnt_img} />
          <Text style={styles.recomment_title}>{item.title}</Text>
          <View style={styles.star_score}>
            <Image
              source={require('../imgs/star.png')}
              style={styles.star_img}
            />
            <Text style={styles.recomment_score}> {item.score}</Text>
            <Text style={styles.recomment_price}> {item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.section}>
          {/* Section search */}
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

          {/* Section Category */}
          <View style={styles.flatList_Category}>
            <FlatList
              data={catergoris_data}
              renderItem={({ item }) => <Item_Category obj={item} />}
              keyExtractor={(item) => item.id}
              horizontal={true} // Hiển thị theo chiều ngang
              showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
            />
          </View>

          {/* Section Discount */}
          <View style={styles.section_discount}>
            {/* Discount Box */}
            <View style={styles.discount_box}>
              <View style={styles.discount_title_prices_button}>
                <Text style={styles.discount_title}>Shoes</Text>
                <Text style={styles.discount_prices}>70% off</Text>
                <TouchableOpacity style={styles.discount_button}>
                  <Text style={styles.discount_button_text}>Buy now</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.discount_box_img}>
                <Image
                  style={styles.box_img}
                  source={require('../imgs/shoes_discount.png')}
                />
              </View>
            </View>

            {/* Discount IMG */}
            <View style={styles.discount_img}>
              <View style={styles.two_discount_img}>
                <Image
                  style={styles.left_img}
                  source={{
                    uri: 'https://media.loveitopcdn.com/853/thumb/ao-so-midui-nam-dai-tay-do-m8-2.jpg',
                  }}
                />
              </View>
              <View style={styles.two_discount_img}>
                <Image
                  style={styles.right_img}
                  source={{
                    uri: 'https://storage.googleapis.com/ep-material/images/ldf/ldf-desktop/CH6372_F2W_24.webp',
                  }}
                />
              </View>
            </View>
          </View>

          {/* Section Recommend */}
          <View style={styles.section_recomment}>
            <View style={styles.recoment_title}>
              <Text style={styles.title_bold}>Recommend for you</Text>
              <Text style={styles.title}>View all</Text>
            </View>
            <View style={styles.flatList_Recomment}>
              <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true} // Hiển thị theo chiều ngang
                showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
                contentContainerStyle={styles.flatListContent} // Thêm style cho FlatList
              />
            </View>
          </View>
        </View>

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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 750,
    width: 392,
    // borderWidth:1,
    backgroundColor: 'white',
  },

  section_recomment: {
    flex: 1,
    width: '100%',
    marginTop: 30,
  },
  recoment_title: {
    // width:'100%',
    flexDirection: 'row',
    // alignItems:'center',
    justifyContent: 'space-between',
    // backgroundColor:'red',
    paddingHorizontal: 15,
  },
  title_bold: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    fontSize: 16,
  },
  flatList_Recomment: {
    marginTop: 5,
  },
  recomment_item: {
    flexDirection: 'column',
    height: 170,
    width: 110,
    backgroundColor: '#EBEBEB',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginRight: 14,
    borderRadius: 6,
  },

  img_item: {
    width: 110,
    height: 140,
    overflow: 'hidden',
  },
  recomemnt_img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  recomment_title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  star_score: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 14,
    paddingHorizontal: 5,
    // backgroundColor:'red'
    borderRadius: 6,
  },
  star_img: {
    width: 15,
    height: 15,
    borderRadius: 6,
  },
  recomment_score: {
    marginRight: 15,
  },
  recomment_price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#47BED4',
  },

  section: {
    height: '92%',
    width: '100%',
    // Đảm bảo section không căn giữa các thành phần con
    alignItems: 'flex-start',
    // justifyContent: 'flex-start',
  },

  // Search
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
  },

  // Category
  flatList_Category: {
    marginTop: 15,
    marginLeft: 10,
    height: 100,
    // width:'100%'
  },
  flatListContent: {
    paddingHorizontal: 10, // Thêm padding ngang để tránh tràn
  },
  section_category: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 20, // Thêm khoảng cách giữa các mục
    // width: 100, // Đặt chiều rộng cố định cho các mục
  },
  circle_category: {
    width: 80, // Đường kính của hình tròn
    height: 80, // Đường kính của hình tròn
    borderRadius: 50, // Nửa đường kính để tạo hình tròn
    overflow: 'hidden', // Đảm bảo nội dung bên trong không bị tràn ra ngoài
    justifyContent: 'center', // Căn giữa nội dung theo chiều dọc
    alignItems: 'center', // Căn giữa nội dung theo chiều ngang,
  },
  image_category: {
    width: '100%', // Chiều rộng của ảnh chiếm 100% chiều rộng của vòng tròn
    height: '100%', // Chiều cao của ảnh chiếm 100% chiều cao của vòng tròn
    resizeMode: 'cover', // Cắt ảnh để phù hợp với kích thước hình tròn
  },
  title_category: {
    fontSize: 15,
    fontWeight: 500,
  },

  // Discount
  section_discount: {
    width: '100%',
    height: 280,
    alignItems: 'center',
    marginTop: 15,
  },
  //Discount Box
  discount_box: {
    width: '90%',
    height: '50%',
    backgroundColor: 'rgb(245,242,253)',
    flexDirection: 'row',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20, //Bo tròn một góc bên phải
  },
  discount_title_prices_button: {
    width: '40%',
    // backgroundColor:'red',
    // marginLeft:15
    paddingLeft: 25,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  discount_title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#47BED4',
    // marginTop:10
  },
  discount_prices: {
    fontSize: 18,
    color: '#7D7A83',
  },
  discount_button: {
    width: '70%',
    height: '35%',
    backgroundColor: 'black',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  discount_button_text: {
    color: 'white',
    // textAlign:'center',
    fontSize: 16,
  },
  discount_box_img: {
    width: '65%',
    // backgroundColor:'red'
  },
  box_img: {
    width: '90%',
    height: '90%',
  },
  // Discount IMG
  discount_img: {
    width: '90%',
    height: '50%',
    flexDirection: 'row',
    // borderBottomRightRadius: 8,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  two_discount_img: {
    height: '100%',
    width: '49%',
  },
  left_img: {
    height: '100%',
    width: '100%',
    borderBottomLeftRadius: 20,
  },
  right_img: {
    height: '100%',
    width: '100%',
    borderBottomRightRadius: 20,
  },

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
