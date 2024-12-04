// import { Text, View, StyleSheet, Image , TouchableOpacity, Button, TextInputm,ScrollView,FlatList,TextInput} from 'react-native';
// import {FontAwesome,AntDesign,Ionicons,MaterialIcons,MaterialCommunityIcons,Feather} from '@expo/vector-icons';


// export default function Screen({navigation}){
//   return(
//     <View style={styles.container}>

//     {/*------------------------ Content ------------------*/}
//       <ScrollView 
//         style={styles.scrollView}
//         showsVerticalScrollIndicator={false} // Ẩn thanh cuộn dọc
//       >

//       </ScrollView>
      
//     {/*------------------ Footer -------------------*/}
//       <View style={styles.footer}>

//       </View>

//     </View>
    
//   );

// }

// const styles=StyleSheet.create({
//   container:{
//     height: 750,
//     width:392 ,
//     // borderWidth:1,
//   },
//   scrollView: {
//     width: "100%", // Đặt chiều rộng cố định
//     height:'80%', // Đặt chiều cao cố định
//     // borderWidth: 1, // Đường viền để dễ nhìn thấy container
//     // borderColor: 'blue',
//   },


// // Foter---------------------------------------------
//   footer:{
//     height:'8%',
//     width:'100%',
//     // backgroundColor:'blue'
//     borderTopWidth:0.5,
//     borderColor:'rgb(207,208,212)',
//     flexDirection:'row',
//     alignItems:'center',
//     justifyContent:'space-between',
//     paddingHorizontal:10
//   },

// })

import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView ,TouchableOpacity} from 'react-native';

export default function DetailScreen  ({ route })  {
  // Nhận thông tin sản phẩm từ tham số điều hướng
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>Price: ${product.price}</Text>
        <Text style={styles.category}>Category: {product.category}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </ScrollView>
      {/* Footer với nút Mua hàng và Thêm vào giỏ hàng */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Add to cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Buy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'white'
  },
  scrollView: {
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginBottom: 10,
  },
  category: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderTopWidth: 1,
    borderColor: 'rgb(207,208,212)',
  },
  button: {
    flex: 1,
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


