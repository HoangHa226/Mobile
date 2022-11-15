import React, { useState } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Image, TextInput, TouchableOpacity, FlatList, Dimensions, onPress } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const listTab = [
    {
        status: 'All'
    },
    {
        status: 'Food & Drink'
    },
    {
        status: 'Coffee Bean'
    },
];
const data = [
    {
        id: 1,
        img: require('../img/drink1.jpg'),
        name: 'Filter Coffee',
        price: '$7.00',
        add: 'Add to Cart',
        status: 'Food & Drink'
    },
    {
        id: 2,
        img: require('../img/drink2.jpg'),
        name: 'Mocha',
        price: '$10.00',
        add: 'Add to Cart',
        status: 'Food & Drink'
    },
    {
        id: 3,
        img: require('../img/drink3.jpg'),
        name: 'Espresso',
        price: '$9.00',
        add: 'Add to Cart',
        status: 'Food & Drink'
    },
    {
        id: 4,
        img: require('../img/drink4.jpg'),
        name: 'Flat White',
        price: '$8.00',
        add: 'Add to Cart',
        status: 'Food & Drink'
    },
    {
        id: 5,
        img: require('../img/drink5.jpg'),
        name: 'Muffin',
        price: '$11.00',
        add: 'Add to Cart',
        status: 'Food & Drink'
    },
    {
        id: 6,
        img: require('../img/drink6.jpg'),
        name: 'Americano',
        price: '$9.00',
        add: 'Add to Cart',
        status: 'Food & Drink'
    },
    {
        id: 7,
        img: require('../img/drink7.jpg'),
        name: 'Flat White',
        price: '$13.00',
        add: 'Add to Cart',
        status: 'Food & Drink'
    },
    {
        id: 8,
        img: require('../img/drink8.jpg'),
        name: 'Cheesecake',
        price: '$14.00',
        add: 'Add to Cart',
        status: 'Food & Drink'
    },
    {
        id: 9,
        img: require('../img/drink9.jpg'),
        name: 'Macchiato',
        price: '$10.00',
        add: 'Add to Cart',
        status: 'Food & Drink'
    },
    {
        id: 10,
        img: require('../img/coffee1.jpg'),
        name: 'Costa Rican Coffee',
        price: '$18.00',
        add: 'Add to Cart',
        status: 'Coffee Bean'
    },
    {
        id: 11,
        img: require('../img/coffee2.jpg'),
        name: 'Colombian Coffee',
        price: '$21.00',
        add: 'Add to Cart',
        status: 'Coffee Bean'
    },
    {
        id: 12,
        img: require('../img/coffee3.jpg'),
        name: 'El Salvador Coffee',
        price: '$23.00',
        add: 'Add to Cart',
        status: 'Coffee Bean'
    },
    {
        id: 13,
        img: require('../img/coffee4.jpg'),
        name: 'El Salvador Coffee',
        price: '$14.00',
        add: 'Add to Cart',
        status: 'Coffee Bean'
    },
    {
        id: 14,
        img: require('../img/coffee5.jpg'),
        name: 'Brazilian Coffee',
        price: '$20.00',
        add: 'Add to Cart',
        status: 'Coffee Bean'
    },
    {
        id: 15,
        img: require('../img/coffee6.jpg'),
        name: 'Colombian Supreme Coffee',
        price: '$25.00',
        add: 'Add to Cart',
        status: 'Coffee Bean'
    },
]
const renderItem = ({ item, index }) => {
    return (
        <View key={index} style={styles.product}>
            <TouchableOpacity style={styles.wrapImg}>
                <Image source={item.img} style={styles.imgProduct} />
                <TouchableOpacity
                    onPress={onPress}
                    style={styles.btnHeart}
                >
                    <AntDesign style={styles.iconHeart} name="heart" size={19} color="#fff" />
                </TouchableOpacity>
            </TouchableOpacity>
            <Text style={[styles.nameProduct, styles.txt]} numberOfLines={1}>{item.name}</Text>
            <Text style={[styles.priceProduct, styles.txt]}>{item.price}</Text>
            <TouchableOpacity style={styles.btnAdd}>
                <Text style={[styles.txtAdd]}>{item.add}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default function Home() {
    const [status, setStatus] = useState('All')
    const [dataList, setDataList] = useState(data)
    const setStatusFilter = status => {
        if (status !== 'All') {
            setDataList([...data.filter(e => e.status === status)])
        }
        else {
            setDataList(data)
        }
        setStatus(status)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.top}>
                    <View style={styles.info}>
                        <Image style={styles.logo}
                            source={require('../img/logo.png')}
                        />
                        <Text style={styles.nameShop}>Bấc coffee</Text>
                    </View>
                    <TouchableOpacity style={styles.iconNotification}>
                        <EvilIcons name="bell" size={27} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.formSearch}>
                    <EvilIcons style={styles.iconSearch} name="search" size={24} color="black" />
                    <TextInput style={styles.input} placeholder='Nhập tên cần tìm' />
                </View>
                <View style={styles.listTab}>
                    {
                        listTab.map(e => (
                            <TouchableOpacity
                                style={[styles.btntab, status === e.status && styles.btnTabActive]}
                                onPress={() => setStatusFilter(e.status)}
                            >
                                <Text style={[styles.textTab, status === e.status && styles.textTabActive]}>{e.status}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
            <View style={styles.content}>
                <FlatList
                    numColumns={2}
                    data={dataList}
                    keyExtractor={(e, i) => i.toString()}
                    renderItem={renderItem}

                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity>
                    <AntDesign name="home" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="ios-cart-outline" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="hearto" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="user" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'

    },
    header: {
        flex: 2.5,
        justifyContent: 'space-around',
        // backgroundColor: 'rgb(250, 230, 209)',
        paddingHorizontal: 20,
        // paddingVertical: 20
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        width: 30,
        height: 30,
    },
    nameShop: {
        color: 'rgb(66, 35, 7)',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1,
        paddingHorizontal: 10
    },
    formSearch: {
        marginTop: -10,
        flexDirection: 'row',
        borderColor: '#3333',
        borderRadius: 15,
        backgroundColor: '#f0f1f5',
        alignItems: 'center',
    },
    iconSearch: {
        position: 'absolute',
        paddingHorizontal: 10,
    },
    input: {
        paddingHorizontal: 40,
        paddingVertical: 14,
        width: '100%'
    },
    listTab: {
        flexDirection: 'row',
        // justifyContent: 'space-around'
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    btntab: {
        width: '33%',
        // paddingHorizontal: 10,
        alignItems: 'center',
    },
    textTab: {
        fontSize: 14,
        fontWeight: '500',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    btnTabActive: {
        backgroundColor: 'rgb(250, 230, 209)',
    },
    textTabActive: {
        color: 'rgb(66, 35, 7)',
        opacity: 0.8
    },
    txt: {
        color: '#0A1551',
        width: '90%'
    },
    content: {
        flex: 6,
        paddingHorizontal: 20
    },
    iconSearch: {
        position: 'absolute',
        paddingHorizontal: 10,
    },
    product: {
        width: '49%',
        borderWidth: 1,
        borderColor: '#3333',
        alignItems: 'center'
    },
    wrapImg: {
        width: '100%',
        height: 150
    },
    imgProduct: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    iconHeart: {
        position: 'absolute',
        bottom: 120,
        right: 8
    },
    nameProduct: {
        marginTop: 10,
    },
    priceProduct: {
        fontSize: 15,
        fontWeight: '700'
    },
    btnAdd: {
        backgroundColor: '#0A1551',
        width: '90%',
        paddingVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 5
    },
    txtAdd: {
        color: '#fff',
        fontWeight: 'bold'
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        opacity: 0.5
    },
})


