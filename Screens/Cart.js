import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image ,Dimensions,TouchableOpacity,ScrollView} from 'react-native';
import reactDom from 'react-dom';
import { cartContext } from './CartContext';
import { useContext } from 'react';
var {height, width } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';

export default function Cart ({navigation}) {
  const [cart,setcart] = useContext(cartContext);
  return(
    // <View>

    //   <View style={{ height: 1, borderColor: "gray", borderWidth: 2 ,marginTop:40 }} />
    //   <View><Text>CART ITEMS ADDED: </Text>
      // <Text> item in cart :0 {cart.length}</Text>
    //   {cart.map((item) => (
    //     <View style={{margin:10}}>
    //       <Image style={{ width: 100, height: 100, borderRadius: 8 }} source={{uri: item.uriimg}}/>
    //       <Text>{item.name}</Text>
    //     </View>
    //   ))}</View>
    //   </View>

    <ScrollView>
      
    <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
    <View style={{height:20}} />
    <Text style={{fontSize:28, color:"gray"}}>My Cart</Text>
    <View style={{height:10}} />
    <Text style={{fontSize:30,color:"green"}}> Item in cart :{cart.length}</Text>
    {cart.map((item) => (
    <View style={{flex:1}}>
      <View style={{width:width-20,margin:10,backgroundColor:'transparent', flexDirection:'row', borderBottomWidth:2, borderColor:"#cccccc", paddingBottom:10}}>
        <Image resizeMode={"contain"} style={{width:width/3,height:width/3}} source={{uri: item.uriimg}} />
        <View style={{flex:1, backgroundColor:'transparent', padding:10, justifyContent:"space-between"}}>
          <View>
            <Text style={{fontWeight:"bold", fontSize:20}}>{item.name}</Text>
            <Text>{item.status}</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontWeight:'bold',color:"#9fd236",fontSize:20}}>{item.price}</Text>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <TouchableOpacity>
                <Icon name="ios-remove-circle" size={30} color={"#9fd236"} />
              </TouchableOpacity>
              <Text style={{paddingHorizontal:8, fontWeight:'bold'}}>1</Text>
              <TouchableOpacity>
                <Icon name="ios-add-circle" size={30} color={"#9fd236"} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

    </View>
    ))}

    <View style={{height:20}} />

  <TouchableOpacity style={{
      backgroundColor:"#9fd236",
      width:width-40,
      alignItems:'center',
      padding:10,
      borderRadius:15
    }}>
    <Text style={{
        fontSize:24,
        fontWeight:"bold",
        color:'white'
      }}>
      CHECKOUT
    </Text>
  </TouchableOpacity>

  <View style={{height:70}} />


 </View>
 </ScrollView>
);

}

  // const Cart = (cart,setCart) => {
  //   return(
  // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //   <Text
  //   onPress={()=> navigation.navigate('Home')}
  //   >đây là trang giỏ hàng</Text>
  // </View>
  //   )
  // return (
    
    // <View style={{ height: 1, borderColor: "gray", borderWidth: 2 }} />
    //   <Text>CART ITEMS ADDED: </Text>
    //   <View><Text>CART ITEMS ADDED: </Text>
    //   {cart.map((item) => (
    //     <View style={{margin:10}}>
    //       <Image style={{ width: 100, height: 100, borderRadius: 8 }} source={{uri:item.image}}/>
    //       <Text>{item.name}</Text>
    //     </View>
    //   ))}</View>)




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