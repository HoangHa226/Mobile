import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Cart ({navigation}) {
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text
    onPress={()=> navigation.navigate('Home')}
    >đây là trang giỏ hàng</Text>
  </View>
}


const styles = StyleSheet.create({})
