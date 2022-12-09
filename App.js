import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home'
import User from './Screens/User';
import Cart from './Screens/Cart';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        position: 'absolute',
        alignSelf: "center",
        height: 60,
        backgroundColor: '#fff'
      },
    }}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ color }) => (
          <AntDesign style={styles.iconTab} name="home" size={23} color={color} />
        ),
        tabBarActiveTintColor: 'rgb(66, 35, 7)',
        // tabBarInactiveTintColor: ""

      }} />
      <Tab.Screen name="Cart" component={Cart} options={{
        tabBarIcon: ({ color }) => (
          <Ionicons style={styles.iconTab} name="ios-cart-outline" size={26} color={color} />
        ),
        tabBarActiveTintColor: 'rgb(66, 35, 7)',
      }} />

      <Tab.Screen name="User" component={User} options={{
        tabBarIcon: ({ color }) => (
          <AntDesign style={styles.iconTab}  name="user" size={22} color={color} />
        ),
        tabBarActiveTintColor: 'rgb(66, 35, 7)',
      }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeTabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  iconTab: {
    // opacity: 0.6
  }
});
