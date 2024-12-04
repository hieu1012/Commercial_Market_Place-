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
  
  const data = [
    {
      id: '1',
      title: 'iPhone 12',
      price: 18990000,
      quantity: 50,
      star: 5,
      image:
        'https://img.tgdd.vn/imgt/old/f_webp,fit_outside,quality_75/https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-la-new-2-200x200.jpg',
      description: 'Apple iPhone 12 64GB, Chip A14 Bionic, hỗ trợ 5G.',
      category: 'Electronics',
      sub_Category: 'Smartphone',
    },
    {
      id: '2',
      title: 'Samsung Galaxy Tab S7',
      price: 15990000,
      quantity: 30,
      star: 4,
      image:
        'https://cdn.tgdd.vn/Products/Images/522/225031/samsung-galaxy-tab-s7-gold-new-600x600.jpg',
      description:
        'Máy tính bảng Samsung Galaxy Tab S7 với màn hình 11 inch, hỗ trợ bút S Pen.',
      category: 'Electronics',
      sub_Category: 'Tablet',
    },
    {
      id: '3',
      title: 'MacBook Air M1',
      price: 28990000,
      quantity: 20,
      star: 5,
      image: 'https://cdn.tgdd.vn/Products/Images/44/231244/grey-1-750x500.jpg',
      description: 'MacBook Air với chip Apple M1, màn hình Retina 13 inch.',
      category: 'Electronics',
      sub_Category: 'Laptop',
    },
    {
      id: '4',
      title: "Men's Casual Shirt",
      price: 350000,
      quantity: 100,
      star: 4,
      image:
        'https://cdn.shopify.com/s/files/1/0981/8178/files/editor-slate-grey-square.jpg?v=1604522085',
      description: 'Áo sơ mi nam chất liệu cotton thoáng mát, phong cách casual.',
      category: 'Fashion',
      sub_Category: 'Men',
    },
    {
      id: '5',
      title: "Women's Summer Dress",
      price: 450000,
      quantity: 70,
      star: 4,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaOemoO4ZixG86u78b1QTpJO1oVHQObB-p8g&s',
      description: 'Đầm mùa hè cho nữ với họa tiết hoa nhẹ nhàng.',
      category: 'Fashion',
      sub_Category: 'Women',
    },
    {
      id: '6',
      title: 'Unisex Hoodie',
      price: 600000,
      quantity: 40,
      star: 3,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSdw5_KLjQRGTZEhV-kmshOPa545IjcYGRKw&s',
      description: 'Áo hoodie unisex phong cách streetwear, chất liệu ấm áp.',
      category: 'Fashion',
      sub_Category: 'Unisex',
    },
    {
      id: '7',
      title: 'Kids Winter Jacket',
      price: 550000,
      quantity: 60,
      star: 5,
      image:
        'https://i5.walmartimages.com/asr/fd7ff2f4-7096-4c3c-abfd-5c9a7c44d377.578edb932a9d49e80067fe9b92dd9586.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      description: 'Áo khoác mùa đông cho trẻ em, giữ ấm tốt.',
      category: 'Fashion',
      sub_Category: 'Kids',
    },
    {
      id: '8',
      title: 'Face Cream for Women',
      price: 200000,
      quantity: 150,
      star: 4,
      image:
        'https://m.media-amazon.com/images/I/71T9Ig3ROjL._SY450_PIbundle-2,TopRight,0,0_AA450SH20_.jpg',
      description: 'Kem dưỡng da mặt cho nữ, giúp dưỡng ẩm và làm sáng da.',
      category: 'Beauty',
      sub_Category: 'Beauty for Women',
    },
    {
      id: '9',
      title: 'Aftershave Balm for Men',
      price: 180000,
      quantity: 80,
      star: 3,
      image:
        'https://clmensstore.com/wp-content/uploads/2023/04/bulldog-original-aftershave-balm-510x488.jpg',
      description: 'Kem dưỡng sau cạo râu cho nam, giúp làm dịu da.',
      category: 'Beauty',
      sub_Category: 'Beauty for Men',
    },
    {
      id: '10',
      title: 'Organic Berry Mix',
      price: 120000,
      quantity: 200,
      star: 5,
      image: 'https://anskitchen.vn/wp-content/uploads/2022/08/22-2.png',
      description:
        'Hỗn hợp các loại quả mọng hữu cơ bao gồm dâu, việt quất, mâm xôi.',
      category: 'Fresh Fruits',
      sub_Category: 'Berries',
    },
    {
      id: '11',
      title: 'Oranges',
      price: 50000,
      quantity: 300,
      star: 4,
      image:
        'https://www.heddensofwoodtown.co.uk/wp-content/uploads/2020/05/oranges_opt-700x700.jpg',
      description: 'Cam tươi giàu vitamin C, tốt cho sức khỏe.',
      category: 'Fresh Fruits',
      sub_Category: 'Citrus',
    },
    {
      id: '12',
      title: 'Mangoes',
      price: 80000,
      quantity: 250,
      star: 4,
      image: 'https://www.greenlife.co.ke/wp-content/uploads/2022/04/Mangoes.jpg',
      description: 'Xoài tươi, ngon ngọt, giàu vitamin A.',
      category: 'Fresh Fruits',
      sub_Category: 'Tropical Fruits',
    },
    {
      id: '13',
      title: 'Sony WH-1000XM4',
      price: 7000000,
      quantity: 100,
      star: 5,
      image:
        'https://cdn.tgdd.vn/Products/Images/2162/217200/sony-wh-1000xm4-600x600.jpg',
      description:
        'Tai nghe chống ồn Sony WH-1000XM4 với công nghệ chống ồn tiên tiến, pin lâu dài.',
      category: 'Electronics',
      sub_Category: 'Headphones',
    },
    {
      id: '14',
      title: 'iPad Air 2020',
      price: 15990000,
      quantity: 50,
      star: 4,
      image:
        'https://cdn.tgdd.vn/Products/Images/522/233160/ipad-air-4-wifi-64gb-green-200x200.jpg',
      description:
        'Máy tính bảng Apple iPad Air 2020 với màn hình 10.9 inch và chip A14 Bionic.',
      category: 'Electronics',
      sub_Category: 'Tablet',
    },
    {
      id: '15',
      title: 'Asus ROG Zephyrus G14',
      price: 39990000,
      quantity: 30,
      star: 5,
      image:
        'https://cdn.tgdd.vn/Products/Images/44/235504/asus-rog-zephyrus-g14-600x600.jpg',
      description:
        'Laptop gaming Asus ROG Zephyrus G14 với chip Ryzen 9 và card đồ họa GTX 1660Ti.',
      category: 'Electronics',
      sub_Category: 'Laptop',
    },
    {
      id: '16',
      title: "Men's Formal Suit",
      price: 1200000,
      quantity: 40,
      star: 4,
      image:
        'https://cdn.shopify.com/s/files/1/2345/1641/products/formal-suit.jpg?v=1625043132',
      description: 'Bộ vest nam sang trọng, thích hợp cho các dịp trang trọng.',
      category: 'Fashion',
      sub_Category: 'Men',
    },
    {
      id: '17',
      title: "Women's Leather Jacket",
      price: 1500000,
      quantity: 35,
      star: 5,
      image:
        'https://cdn.shopify.com/s/files/1/2345/1641/products/leather-jacket.jpg?v=1625043132',
      description: 'Áo khoác da nữ chất lượng cao, phong cách cá tính.',
      category: 'Fashion',
      sub_Category: 'Women',
    },
    {
      id: '18',
      title: 'Unisex Cap',
      price: 150000,
      quantity: 80,
      star: 3,
      image:
        'https://cdn.shopify.com/s/files/1/0981/8178/files/unisex-cap.jpg?v=1625043132',
      description: 'Nón unisex thời trang, thích hợp cho mọi giới tính.',
      category: 'Fashion',
      sub_Category: 'Unisex',
    },
    {
      id: '19',
      title: 'Kids Cotton T-Shirt',
      price: 120000,
      quantity: 100,
      star: 4,
      image:
        'https://cdn.shopify.com/s/files/1/0981/8178/files/kids-tshirt.jpg?v=1625043132',
      description: 'Áo thun cotton cho trẻ em, mềm mại và thoáng mát.',
      category: 'Fashion',
      sub_Category: 'Kids',
    },
    {
      id: '20',
      title: "Men's Face Wash",
      price: 200000,
      quantity: 200,
      star: 4,
      image:
        'https://m.media-amazon.com/images/I/71T9Ig3ROjL._SY450_PIbundle-2,TopRight,0,0_AA450SH20_.jpg',
      description: 'Sữa rửa mặt cho nam giúp làm sạch sâu và giữ ẩm da.',
      category: 'Beauty',
      sub_Category: 'Beauty for Men',
    },
    {
      id: '21',
      title: 'Organic Aloe Vera Gel',
      price: 150000,
      quantity: 120,
      star: 5,
      image:
        'https://cdn.shopify.com/s/files/1/0981/8178/files/aloe-vera-gel.jpg?v=1625043132',
      description: 'Gel lô hội hữu cơ, dưỡng ẩm và làm dịu da.',
      category: 'Beauty',
      sub_Category: 'Beauty for Unisex',
    },
    {
      id: '22',
      title: 'Dragon Fruit',
      price: 60000,
      quantity: 250,
      star: 4,
      image:
        'https://www.greenlife.co.ke/wp-content/uploads/2022/04/dragon-fruit.jpg',
      description: 'Thanh long tươi ngon, giàu dinh dưỡng.',
      category: 'Fresh Fruits',
      sub_Category: 'Tropical Fruits',
    },
    {
      id: '23',
      title: 'Lemon',
      price: 40000,
      quantity: 300,
      star: 4,
      image:
        'https://www.heddensofwoodtown.co.uk/wp-content/uploads/2020/05/lemons.jpg',
      description: 'Chanh tươi, giàu vitamin C, giúp tăng cường hệ miễn dịch.',
      category: 'Fresh Fruits',
      sub_Category: 'Citrus',
    },
    {
      id: '24',
      title: 'Blueberries',
      price: 90000,
      quantity: 150,
      star: 5,
      image: 'https://cdn.tgdd.vn/Products/Images/42/blueberries.jpg',
      description:
        'Quả việt quất tươi, giàu chất chống oxy hóa và tốt cho sức khỏe.',
      category: 'Fresh Fruits',
      sub_Category: 'Berries',
    },
  ];
  
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
  
  const DATA_SanPham = [
    {
      id: '1',
      title: 'Shoe',
      img: 'https://drake.vn/image/catalog/H%C3%ACnh%20content/hinh-anh-giay-vans/hinh-anh-giay-vans-17.jpg',
      score: '4.5',
      price: '299$',
    },
    {
      id: '1',
      title: 'Shoe',
      img: 'https://drake.vn/image/catalog/H%C3%ACnh%20content/hinh-anh-giay-vans/hinh-anh-giay-vans-17.jpg',
      score: '4.5',
      price: '299$',
    },
    {
      id: '1',
      title: 'Shoe',
      img: 'https://drake.vn/image/catalog/H%C3%ACnh%20content/hinh-anh-giay-vans/hinh-anh-giay-vans-17.jpg',
      score: '4.5',
      price: '299$',
    },
    {
      id: '1',
      title: 'Shoe',
      img: 'https://drake.vn/image/catalog/H%C3%ACnh%20content/hinh-anh-giay-vans/hinh-anh-giay-vans-17.jpg',
      score: '4.5',
      price: '299$',
    },
    {
      id: '1',
      title: 'Shoe',
      img: 'https://drake.vn/image/catalog/H%C3%ACnh%20content/hinh-anh-giay-vans/hinh-anh-giay-vans-17.jpg',
      score: '4.5',
      price: '299$',
    },
    {
      id: '1',
      title: 'Shoe',
      img: 'https://drake.vn/image/catalog/H%C3%ACnh%20content/hinh-anh-giay-vans/hinh-anh-giay-vans-17.jpg',
      score: '4.5',
      price: '299$',
    },
    {
      id: '1',
      title: 'Shoe',
      img: 'https://drake.vn/image/catalog/H%C3%ACnh%20content/hinh-anh-giay-vans/hinh-anh-giay-vans-17.jpg',
      score: '4.5',
      price: '299$',
    },
    {
      id: '1',
      title: 'Shoe',
      img: 'https://drake.vn/image/catalog/H%C3%ACnh%20content/hinh-anh-giay-vans/hinh-anh-giay-vans-17.jpg',
      score: '4.5',
      price: '299$',
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
    const [electronic, setElectronic] = useState([]);
    const [product, setPorduct] = useState([]);
  
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
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => {
          // Lọc sản phẩm theo danh mục "men's clothing"
          const filteredProducts = json.filter(
            (item) => item.category === "men's clothing"
          );
          setPorduct(filteredProducts); // Cập nhật state với sản phẩm đã lọc
        });
    }, []);
  
    //Dùng mockapi
  
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate('ManHinh4', { product: item })}>
          <View style={styles.item_product}>
            <View style={styles.img_item}>
              <Image source={{ uri: item.image }} style={styles.img_produc} />
            </View>
            <View style={styles.box_title_icon}>
              <View style={styles.title_icon}>
                <Text style={{ fontSize: 15, fontWeight: 500 }}>
                  {item.title}
                </Text>
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
                  <Image
                    source={require('../imgs/star.png')}
                    style={styles.sao_SanPham}
                  />
                </View>
  
                <Text style={styles.price}>{item.price}$</Text>
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
                  data={product}
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
  