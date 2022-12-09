import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function User({ navigation }) {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.top}>
            <EvilIcons name="user" size={60} color='rgb(66, 35, 7)' />
            <Text style={styles.name}>HoangHa</Text>
          </View>
          <View style={styles.mid}>

            <TouchableOpacity style={styles.item}>
              <View style={styles.wrap}>
                <AntDesign name="wallet" size={24} color="#db5b37" />
                <Text style={styles.txt}>Ví Voucher</Text>
              </View>
              <MaterialIcons name="navigate-next" size={24} color="#3333" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
              <View style={styles.wrap}>
                <MaterialIcons name="payments" size={24} color="#db5b37" />
                <Text style={styles.txt}>Thanh toán</Text>
              </View>
              <MaterialIcons name="navigate-next" size={24} color="#3333" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
              <View style={styles.wrap}>
                <MaterialIcons name="place" size={24} color="#4ec9b0" />
                <Text style={styles.txt}>Địa chỉ</Text>
              </View>
              <MaterialIcons name="navigate-next" size={24} color="#3333" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
              <View style={styles.wrap}>
                <Ionicons name="help-circle-outline" size={24} color="#4ec9b0" />
                <Text style={styles.txt}>Trung tâm trợ giúp</Text>
              </View>
              <MaterialIcons name="navigate-next" size={24} color="#3333" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
              <View style={styles.wrap}>
                <Ionicons name="ios-settings-outline" size={24} color="#5e85cf" />
                <Text style={styles.txt}>Cài đặt</Text>
              </View>
              <MaterialIcons name="navigate-next" size={24} color="#3333" />
            </TouchableOpacity>

          </View>
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.btnLogout}>
              <Text style={styles.txt_btn}>Đăng xuất</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  top: {
    backgroundColor: 'rgb(250, 230, 209)',
    width: '100%',
    paddingVertical: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  name: {
    color: 'rgb(66, 35, 7)',
    fontSize: 18,
    fontWeight: '500'
  },
  mid: {
    backgroundColor: '#fff',
  },
  item: {
    borderBottomColor: '#3333',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt: {
    fontSize: 16,
    marginHorizontal: 10
  },
  bottom : {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15
  },
  btnLogout: {
    width: '95%',
    backgroundColor: '#0A1551',
    paddingVertical: 15,
  },
  txt_btn: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center'
  }
})
