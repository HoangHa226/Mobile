import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function Cart ({navigation}) {
  const Cart = ({ cart, setCart }) => {
    return(
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text
    onPress={()=> navigation.navigate('Home')}
    >đây là trang giỏ hàng</Text>
  </View>
    )
  // return (
    
    // <View style={{ height: 1, borderColor: "gray", borderWidth: 2 }} />
      // <Text>CART ITEMS ADDED: </Text>
      // <View><Text>CART ITEMS ADDED: </Text>
      // {cart.map((item) => (
      //   <View style={{margin:10}}>
      //     <Image style={{ width: 100, height: 100, borderRadius: 8 }} source={{uri:item.image}}/>
      //     <Text>{item.name}</Text>
      //   </View>
      // ))}</View>)
}}


const styles = StyleSheet.create({})

// import React, { useState, useEffect } from "react";
// import { View ,Text} from "react-native";

// const Cart = ({ cart, setCart, handleChange }) => {
//   const [price, setPrice] = useState(0);


//   // const handleRemove = (id) => {
//   //   const arr = cart.filter((item) => item.id !== id);
//   //   setCart(arr);
//   //   handlePrice();
//   // };

//   // const handlePrice = () => {
//   //   let ans = 0;
//   //   cart.map((item) => (ans += item.amount * item.price));
//   //   setPrice(ans);
//   // };

//   // useEffect(() => {
//   //   handlePrice();
//   // });

//   return (
    
//     // <View style={{ height: 1, borderColor: "gray", borderWidth: 2 }} />
//       // <Text>CART ITEMS ADDED: </Text>
//       <View><Text>CART ITEMS ADDED: </Text>
//       {cart.map((item) => (
//         <View style={{margin:10}}>
//           <Image style={{ width: 100, height: 100, borderRadius: 8 }} source={{uri:item.image}}/>
//           <Text>{item.name}</Text>
//         </View>
//       ))}</View>


//     // <article>
//     //   {cart.map((item) => (
//     //     <div className="cart_box" key={item.id}>
//     //       <div className="cart_img">
//     //         <img src={item.img} alt="" />
//     //         <p>{item.title}</p>
//     //       </div>
//     //       {/* <div>
//     //         <button onClick={() => handleChange(item, 1)}>+</button>
//     //         <button>{item.amount}</button>
//     //         <button onClick={() => handleChange(item, -1)}>-</button>
//     //       </div>
//     //       <div>
//     //         <span>{item.price}</span>
//     //         <button onClick={() => handleRemove(item.id)}>Remove</button>
//     //       </div> */}
//     //     </div>
//     //   ))}
//     //   <div className="total">
//     //     <span>Total Price of your Cart</span>
//     //     <span>Rs - {price}</span>
//     //   </div>
//     // </article>
//   );
// };

// export default Cart;