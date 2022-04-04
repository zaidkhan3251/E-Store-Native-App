import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  FlatList,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SCREEN_WIDTH } from '../Constants/Constants';
import { AntDesign } from '@expo/vector-icons';
import appData from '../components/appData';
import currencyFormatter from 'currency-formatter';
import { useSelector, useDispatch } from 'react-redux';
const ITEM_WIDTH = Math.round(SCREEN_WIDTH * 0.28);

const CartItem = ({ item, navigation }) => {
  const { products, totalPrice, totalQuantities } = useSelector(
    (state) => state.CartReducer
  );
      const dispatch = useDispatch()
  const onPressHandler = (item) => {
    navigation.navigate('Detail', { product: item });
    console.log(item, 'click on category Item');
  };
  return (
    <View style={styles.container} key={item.id}>
      <Pressable onPress={() => onPressHandler(item)}>
        <Image source={{ uri: item.imgUrl }} style={styles.image} />
      </Pressable>
      <View style={styles.body}>
        <View style={styles.namePrice}>
          <Text style={{ fontSize: 20, color: '#000' }}>{item.author}</Text>
          <Text style={{ fontSize: 30, color: '#5500AA' }}>
            {currencyFormatter.format(item.qoute, { code: 'USD' })}
          </Text>
        </View>
        <View style={styles.tpTq}>
          <View
            style={{
              // flexDirection: 'row',
              paddingRight: 10,
            }}>
            <Text
              style={{
                fontSize: 13,
                color: '#9BDDFF',
                fontWeight: '600',
                fontStyle: 'italic',
                paddingRight: 2,
                justifyContent: 'center',
                alignItems:"center"
              }}>
              Total Price:
            </Text>
            <Text style={{ fontSize: 14, color: '#8AC5E2', fontWeight: '600',paddingBottom:5}}>
             {currencyFormatter.format(item.qoute * item.quantity, { code: 'USD'} )}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingRight: 10,
            }}>
            <Text
              style={{
                fontSize: 13,
                color: '#EFAFAE',
                fontWeight: '600',
                fontStyle: 'italic',
                paddingRight: 2,
                justifyContent: 'center',
                alignItems:"center"
              }}>
              Total Qty:
            </Text>
            <Text style={{ fontSize: 14, color: '#C96868', fontWeight: '600',paddingBottom:5 }}>
              {item.quantity}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.options}>
        <TouchableOpacity style={styles.icon} onPress={() => dispatch({ type: 'INC', payload: item.id })}>
          <AntDesign name="plus" size={20} color="#5500AA" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={() => dispatch({ type: 'DEC', payload: item.id })}>
          <AntDesign name="minus" size={20} color="#5500AA" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={() => dispatch({ type: 'REMOVE', payload:item.id })}>
          <AntDesign name="delete" size={20} color="#5500AA" />
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
};

const Cart = ({ navigation }) => {
  const { products, totalPrice, totalQuantities } = useSelector(
    (state) => state.CartReducer
  );
  const dispatch = useDispatch();
  return (
    <View>
      <FlatList
        pagingEnabled={false}
        showsVerticalScrollIndicator={false}
        legacyImplementation={false}
        data={products}
        renderItem={({ item }) => (
          <CartItem item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          marginBottom: 20,
          backgroundColor: '#fff',
          marginTop: 20,
        }}
      />
    </View>
  );
};

export default Cart;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:"center",
    backgroundColor: 'white',
    // width: SCREEN_WIDTH,
    elevation: 0,
    marginTop: 5,
    paddingVertical: 20,
    paddingHorizontal: 10,
    // backgroundColor: 'blue',
  },
  image: {
    width: SCREEN_WIDTH * 0.27,
    height: ITEM_WIDTH,
    borderRadius: 7,
    opacity: 0.9,
    resizeMode: 'cover',
  },

  text: {
    color: '#000',
    fontSize: 20,
  },
  body: {
    // bottom: ITEM_WIDTH * 0.1,
    alignItems: 'left',
    paddingHorizontal: 10,
    paddingRight: 60,
    justifyContent: 'space-between',
  },
  tpTq: {
    display:"flex",
    flexDirection: 'row',
  },
  options: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  namePrice: {
    marginBottom: 25,
    justifyContent: 'space-around',
  },
  icon: {
    // paddingVertical:6,
    marginVertical: 3,
    backgroundColor: '#E2C6FF',
    borderRadius: 50,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// <Pressable onPress={() => onPressHandler(item)}>
//   </Pressable>
