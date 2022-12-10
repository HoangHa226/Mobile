import React, { useContext, useState } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Image, TextInput, TouchableOpacity, FlatList, Dimensions, onPress, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import reactDom from 'react-dom';
import { cartContext } from './CartContext';

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
        uriimg: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AFDK6gPPKZBLsroeB-oaY007wT6KxLyQePg7LFCfsQEIR99HrB9sgLUsbEP0AgrfwJGTgDX4FytJEjgBt-umKFpYxkTtL7rUrQ=w1366-h657',
        name: 'Filter Coffee',
        price: '$7.00',
        add: 'Add to Cart',
        status: 'Food & Drink'
    },
    {
        id: 2,
        uriimg: 'https://www.jotform.com/uploads/mehmetkarakasli/form_files/guy-basabose-FzdEbrA3Qj0-unsplash.jpg?nc=1',
        name: 'Mocha',
        price: '$10.00',
        add: 'Add to Cart',
        status: 'Food & Drink'
    },
    {
        id: 3,
        uriimg: 'https://www.jotform.com/uploads/mehmetkarakasli/form_files/kris-gerhard-N2Lxs1FAzSE-unsplash.jpg?nc=1',
        name: 'Espresso',
        price: '$9.00',
        add: 'Add to Cart',
        status: 'Food & Drink'
    },
    {
        id: 4,
        uriimg: 'https://www.jotform.com/uploads/mehmetkarakasli/form_files/shayna-douglas-84orFfYwuuU-unsplash.jpg?nc=1',
        name: 'Flat White',
        price: '$8.00',
        add: 'Add to Cart',
        status: 'Food & Drink'
    },
    {
        id: 5,
        uriimg: 'https://www.jotform.com/uploads/mehmetkarakasli/form_files/anubhav-arora-RFLDagtOsMM-unsplash.jpg?nc=1',
        name: 'Cappuccino',
        price: '$11.00',
        add: 'Add to Cart',
        status: 'Food & Drink'
    },
    {
        id: 6,
        uriimg: 'https://www.jotform.com/uploads/mehmetkarakasli/form_files/one-zen-SKoZa7rcLlU-unsplash.jpg?nc=1',
        name: 'Americano',
        price: '$9.00',
        add: 'Add to Cart',
        status: 'Food & Drink'
    },
    {
        id: 7,
        uriimg: 'https://www.jotform.com/uploads/mehmetkarakasli/form_files/emily-richards-QD4g6u1-cS4-unsplash.jpg?nc=1',
        name: 'Mocha',
        price: '$13.00',
        add: 'Add to Cart',
        status: 'Food & Drink'
    },
    {
        id: 8,
        uriimg: 'https://www.jotform.com/uploads/mehmetkarakasli/form_files/tina-guina-s8_7AqkzCWY-unsplash.jpg?nc=1',
        name: 'Cheesecake',
        price: '$14.00',
        add: 'Add to Cart',
        status: 'Food & Drink'
    },
    {
        id: 9,
        uriimg: 'https://www.jotform.com/uploads/mehmetkarakasli/form_files/yulia-khlebnikova-vJyNLAQxefg-unsplash.jpg?nc=1',
        name: 'Macchiato',
        price: '$10.00',
        add: 'Add to Cart',
        status: 'Food & Drink'
    },
    {
        id: 10,
        uriimg: 'https://www.jotform.com/uploads/mehmetkarakasli/form_files/daniel-jerico-rEYaMYYVePw-unsplash.jpg?nc=1',
        name: 'Costa Rican Coffee',
        price: '$18.00',
        add: 'Add to Cart',
        status: 'Coffee Bean'
    },
    {
        id: 11,
        uriimg: 'https://www.jotform.com/uploads/mehmetkarakasli/form_files/phil-desforges-fjrl9YBYEL0-unsplash.jpg?nc=1',
        name: 'Colombian Coffee',
        price: '$21.00',
        add: 'Add to Cart',
        status: 'Coffee Bean'
    },
    {
        id: 12,
        uriimg: 'https://www.jotform.com/uploads/mehmetkarakasli/form_files/tina-guina-obV_LM0KjxY-unsplash.jpg?nc=1',
        name: 'El Salvador Coffee',
        price: '$23.00',
        add: 'Add to Cart',
        status: 'Coffee Bean'
    },
    {
        id: 13,
        uriimg: 'https://www.jotform.com/uploads/mehmetkarakasli/form_files/battlecreek-coffee-roasters-mY4hAwxNA_0-unsplash.jpg?nc=1',
        name: 'Ethiopian Coffee',
        price: '$14.00',
        add: 'Add to Cart',
        status: 'Coffee Bean'
    },
    {
        id: 14,
        uriimg: 'https://www.jotform.com/uploads/mehmetkarakasli/form_files/mockup-graphics-m7ijvnNGaV0-unsplash.jpg?nc=1',
        name: 'Brazilian Coffee',
        price: '$20.00',
        add: 'Add to Cart',
        status: 'Coffee Bean'
    },
    {
        id: 15,
        uriimg: 'https://www.jotform.com/uploads/mehmetkarakasli/form_files/petri-haanpaa-dV6BexRcEcY-unsplash.jpg?nc=1',
        name: 'Colombian Supreme Coffee',
        price: '$25.00',
        add: 'Add to Cart',
        status: 'Coffee Bean'
    },
]


export default function Home({ navigation }) {


    const [cart, setcart] = useContext(cartContext);

    const renderItem = ({ item, index }) => {
        // const handleClick = (item) => {
        //     cart.push(item);
        //     console.log(cart);
        // };
        return (
            
            <View key={index} style={[styles.product, (item % 2 !== 0 ? { marginRight: 5 } : { marginLeft: 5 })]}>
                <TouchableOpacity style={styles.wrapImg}
                    onPress={() => navigation.navigate('Detail',{
                        itemId: item.id
                      })}
                >
                    <Image

                        source={{
                            uri: item.uriimg,
                        }}
                        style={styles.imgProduct} />
                    <TouchableOpacity
                        onPress={onPress}
                        style={styles.btnHeart}
                    >
                        <AntDesign style={styles.iconHeart} name="heart" size={19} color="#fff" />
                    </TouchableOpacity>
                </TouchableOpacity>
                <Text style={[styles.nameProduct, styles.txt]} numberOfLines={1}>{item.name}</Text>
                <Text style={[styles.priceProduct, styles.txt]}>{item.price}</Text>

                {/* <TouchableOpacity style={styles.btnAdd}
                    // onClick={() => handleClick(item)}
                    // onPress={() => handleClick([...cart, item])}
                    onPress={() => handleClick(item)}

                >
                    <Text style={[styles.txtAdd]}>Add to Cart</Text>
                </TouchableOpacity> */}

                {cart.includes(item) ? (

                    <TouchableOpacity


                        onPress={() =>  setcart(cart.filter((x) => x.id !== item.id))}
                        // onPress ={() => this.onClickAddCart(item)}

                        style={styles.btnAdd}
                    >
                        <Text style={[styles.txtAdd]}>Remove form Cart</Text>
                        <View style={{ width: 10 }} />


                    </TouchableOpacity  >

                ) : (
                    <TouchableOpacity

                        onPress={() => setcart([...cart, item])}
                        // onPress ={() => this.onClickAddCart(item)}

                        style={styles.btnAdd}
                    >
                        <Text style={[styles.txtAdd]}>{item.add}</Text>
                        <View style={{ width: 10 }} />

                    </TouchableOpacity  >
                )}


            </View>

        )

    }


    // console.log("bao gom", cart);
    cart.push();
    console.log(cart);
    




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
        paddingHorizontal: 20,
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
        alignItems: 'center',
        marginVertical: 5
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


