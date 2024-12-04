import { Text, View, StyleSheet, Image , TouchableOpacity, Button, TextInputm,ScrollView,FlatList,TextInput, Dimensions} from 'react-native';
import {FontAwesome,AntDesign,Ionicons,MaterialIcons,MaterialCommunityIcons,Feather} from '@expo/vector-icons';
import  { useState, useEffect } from 'react';

const { width } = Dimensions.get('window');
const images = [
  'https://sadesign.vn/wp-content/uploads/2021/04/chup-anh-giay-dep.jpg',
  'https://c.pxhere.com/photos/e4/45/photo-70947.jpg!s2',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2cR9a05mlJYHUyjD-K4MSq_hMX6_lf3Ii3nFMduq1TGRS-hyrR7ZiQ3Q8u2litOYisDY&usqp=CAU',
];

const AutoSlideShow = () => {
  // Khởi tạo state để lưu chỉ số của hình ảnh hiện tại
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Thiết lập interval để thay đổi chỉ số hình ảnh mỗi 2 giây
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    },2000); // Chuyển slide mỗi 2 giây

    // Xóa interval khi component bị unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView1}
      contentOffset={{ x: currentIndex * width, y: 0 }} // Đặt vị trí ban đầu của ScrollView
    >
      {images.map((image, index) => (
        <Image key={index} source={{ uri: image }} style={styles.image} />
      ))}
    </ScrollView>
  );
};

const SanPham1 = [
  {
    id:'1',
    title:'Shoe - MT1',
    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/8d/df/56/83aa3d4a7907a4e33641bf6115443322.jpg.webp',
    price: '545$'
  },
    {
    id:'1',
    title:'Shoe - MT1',
    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/8d/df/56/83aa3d4a7907a4e33641bf6115443322.jpg.webp',
    price: '545$'
  },
    {
    id:'1',
    title:'Shoe - MT1',
    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/8d/df/56/83aa3d4a7907a4e33641bf6115443322.jpg.webp',
    price: '545$'
  },
    {
    id:'1',
    title:'Shoe - MT1',
    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/8d/df/56/83aa3d4a7907a4e33641bf6115443322.jpg.webp',
    price: '545$'
  },  
  {
    id:'1',
    title:'Shoe - MT1',
    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/8d/df/56/83aa3d4a7907a4e33641bf6115443322.jpg.webp',
    price: '545$'
  }, 
  {
    id:'1',
    title:'Shoe - MT1',
    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/8d/df/56/83aa3d4a7907a4e33641bf6115443322.jpg.webp',
    price: '545$'
  }, 
  {
    id:'1',
    title:'Shoe - MT1',
    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/8d/df/56/83aa3d4a7907a4e33641bf6115443322.jpg.webp',
    price: '545$'
  }, 
]
const Item_SanPham1 = ({ obj }) => {
  return (
    <View style={{
      height:200,
      width:'45%',
      borderWidth:1,
      overflow: 'hidden', // Đảm bảo nội dung bên trong không bị tràn ra ngoài,
      borderRadius:8,
      borderColor:'rgb(207,208,212)',
      flexDirection:'column',
      marginBottom:10,
      justifyContent:'space-between',
      paddingBottom:10,
      marginRight:20,
      backgroundColor:'white'
    }}>
      <Image
        source={{ uri: obj.img }}
        style={{
          width:175,
          height:120 ,
        }}
      />

      <View style={{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:5,
        // paddingBottom:20
      }}>
        <Text style={{fontSize:20, fontWeight: 500}}>{obj.title}</Text>
        <Feather name="plus-circle" size={20} color="black" />
      </View>

      <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
          marginHorizontal:5,
        }}>
          <View style={{flexDirection:'row' }}>
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
          
          <Text style={{fontSize:18, fontWeight: 500}}>{obj.price}</Text>
        </View>
    
    </View>
  );
};

export default function Screen3({navigation}){
  
  return(
    <View style={styles.container}>

    {/*------------------------ Content ------------------*/}
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false} // Ẩn thanh cuộn dọc
      >
      {/* Thanh Tim Kiem */}
        <View style={styles.section_search}>
          <FontAwesome name="search" size={18} color="black" style={styles.icon_search} />
          <TextInput
            style={styles.input_search}
            placeholder='Search for product'
            placeholderTextColor = 'rgb(207,208,212)'
          />
        </View>
      {/* Anh tu dong chuyen  */}
        <AutoSlideShow  style={{
          marginTop:20,
        }} />

      {/* DS sản phẩm 1 */}
        <View style={{
            marginTop:15,
            flex:1,
            justifyContent:'center',
            alignContent:'center',
            marginLeft:18
          }}>
            <FlatList
              data={SanPham1}
              renderItem={({ item }) => <Item_SanPham1 obj={item} />} 
              keyExtractor={(item) => item.id}
              numColumns={2} // Display two products per row
              showsVerticalScrollIndicator={false} 
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'space-between',
              }} // Thêm style cho FlatList
            />
        </View>

      
      {/*         <View style={{
            height:40,
            width:350,
            backgroundColor:'#A2A5AB',
            borderRadius:6,
            marginLeft:20,
            alignItems:'center',
            justifyContent:'center'

        }}>
          <Text style={{fontSize:15, fontWeight:400}}>See all</Text>
        </View> */}
        
      </ScrollView>
      
    {/*------------------ Footer -------------------*/}
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
          <MaterialCommunityIcons name="account-circle-outline" size={24} color="black" />
          <Text style={styles.footer_text}>Account</Text>
        </View>
      </View>

    </View>
    
  );

}

const styles=StyleSheet.create({
  container:{
    height: 750,
    width:392 ,
    // borderWidth:1,
  },
  scrollView: {
    width: "100%", // Đặt chiều rộng cố định
    height:'80%', // Đặt chiều cao cố định
    // borderWidth: 1, // Đường viền để dễ nhìn thấy container
    // borderColor: 'blue',
  },
  section_search:{
    marginTop:15,
    position:'relative',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    marginBottom:10
  },
  icon_search:{
    // position:'absolute',
    // marginRight:'82%',
    // transform: [{ translateY: '15%' }] 
    position: 'absolute',
    left: 25,
    zIndex: 1, //Đảm bảo biểu tượng nằm trên TextInput
  },
  input_search:{
    height:30,
    width:'90%',
    backgroundColor:'rgb(243,244,246)',
    // borderWidth: 1,
    borderRadius:5,
    paddingLeft: 30,
    borderWidth: 1,
    borderColor:'rgb(207,208,212)'
  },
  scrollView1: {
    width,
  },
  image: {
    width,
    height: 150,   
  },

 sao_SanPham:{
    height:15,
    width:15
  },



// Foter---------------------------------------------
  footer:{
    height:'8%',
    width:'100%',
    // backgroundColor:'blue'
    borderTopWidth:0.5,
    borderColor:'rgb(207,208,212)',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10
  },
  footer_icon_text:{
    alignItems:'center'
  },
  footer_text:{
    fontWeight:'500'
  }
})

// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

// // Lấy chiều rộng của màn hình thiết bị
// const { width } = Dimensions.get('window');

// // Mảng chứa các URL hình ảnh
// const images = [
//   'https://th.bing.com/th/id/OIP.NR5qWNC95DH96nvQP_GdqAHaE8?rs=1&pid=ImgDetMain',
//   'https://vanhoadoisong.vn/wp-content/uploads/2022/05/tong-hop-100-hinh-anh-mat-trang-dep-nhat-thumbnail.jpg',
//   'https://i.ytimg.com/vi/ImuEyKlPE78/hqdefault.jpg',
// ];

// const AutoSlideShow = () => {
//   // Khởi tạo state để lưu chỉ số của hình ảnh hiện tại
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     // Thiết lập interval để thay đổi chỉ số hình ảnh mỗi 2 giây
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     },6000); // Chuyển slide mỗi 2 giây

//     // Xóa interval khi component bị unmount
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <ScrollView
//       horizontal
//       pagingEnabled
//       showsHorizontalScrollIndicator={false}
//       style={styles.scrollView}
//       contentOffset={{ x: currentIndex * width, y: 0 }} // Đặt vị trí ban đầu của ScrollView
//     >
//       {images.map((image, index) => (
//         <Image key={index} source={{ uri: image }} style={styles.image} />
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     width,
//   },
//   image: {
//     width,
//     height: 200,   
//   },
// });

// export default AutoSlideShow;

