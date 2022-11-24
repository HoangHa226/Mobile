import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function Notification ({navigation}) {
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text
    onPress={()=> navigation.navigate('Home')}
    >đây là trang thông báo</Text>
  </View>
}


const styles = StyleSheet.create({})
