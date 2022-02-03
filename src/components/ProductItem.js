import React, { useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { SCREEN_WIDTH } from '../Constants/Constants';
const ITEM_WIDTH = (SCREEN_WIDTH / 1.33) * 0.56;
const ITEM_HIGHT = ITEM_WIDTH * 1.2;

const ProductItem = ({ item, navigation }) => {
  const onPressHandler = (item) => {
    navigation.navigate('Detail', { product: item });
    console.log(item, 'click on category Item');
  };
  return (
    <Pressable onPress={() => onPressHandler(item)}>
      <View
        style={{
          display: 'flex',
          flex: 1,
          paddingBottom: ITEM_HIGHT * 0.1,
          width: SCREEN_WIDTH / 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        key={item.id}>
        <View
          style={{
            borderRadius: 18,
            borderWidth: 7,
            borderColor: '#fff',
            elevation: 4,
            shadowColor: 'black',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            backgroundColor: 'white',
          }}>
          <View
            style={{
              alignItems: 'center',
              width: ITEM_WIDTH,
              height: ITEM_HIGHT,
              overflow: 'hidden',
            }}>
            <Image
              source={{ uri: item.imgUrl }}
              style={{
                width: ITEM_WIDTH,
                height: ITEM_HIGHT,
                borderRadius: 18,
                resizeMode: 'cover',
              }}
            />
          </View>

          <View> 
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              <Text>{item.author}</Text>
            <MaterialCommunityIcons name="heart-outline" size={25} color="red" />
            </View> 
            <View>
              <Text>{item.rating}</Text>    
              <Text>{item.qoute}</Text>   
            </View>   
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductItem;
const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {},
  image: {},
  header: {
    color: '#222',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 60,
    paddingTop: 15,
  },

  price: {
    color: '#78716c',
    fontSize: 18,
    paddingLeft: 100,
    paddingRight: 20,
  },
  body: {},
});
