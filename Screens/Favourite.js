// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function Favourite ({navigation}) {
//   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//     <Text
//     onPress={()=> navigation.navigate()}
//     >đây là trang thông báo</Text>
//   </View>
// }


// const styles = StyleSheet.create({})

import React from 'react';
import MapView, { Callout, Circle } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import { Marker } from 'react-native-maps';



export default function App() {
  21.046468090887064, 105.78494359728461
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        initialRegion={{
          latitude: 21.046590820442873,
          longitude: 105.78493867654873,
          latitudeDelta: 0.005,
          longitudeDelta: 0.0005,
        }}
      >
        <Marker
          coordinate={{ latitude: 21.046468090887064, longitude: 105.78494359728461 }}
          pinColor="gold"
          title="BẤC Coffee"
          description='ở đây không có wifi Hãy nói chuyện như những năm 90 '
          draggable={true}
          onDragStart={(e) => {
            console.log("Drag Start", e.nativeEvent.coordinate);
          }}
          onDragEnd={(e) => {
            console.log("Drag End", e.nativeEvent.coordinate);
          }}
        >
          <Callout>
            <Text>BẤC Coffee</Text>
          </Callout>
        </Marker>

        <Circle
          center={{ latitude: 21.046468090887064, longitude: 105.78494359728461 }}
          radius={100}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
