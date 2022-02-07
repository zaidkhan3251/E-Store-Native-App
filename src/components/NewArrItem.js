import React, { useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import { SCREEN_WIDTH } from '../Constants/Constants';
const ITEM_WIDTH = SCREEN_WIDTH * 0.56;
const ITEM_HIGHT = ITEM_WIDTH * 1.2;
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NewArrItem = ({ item, navigation }) => {
  const onPressHandler = (item) => {
    navigation.navigate('Detail', { product: item });
    console.log(item, 'click on category Item');
  };
  return (
    <Pressable onPress={() => onPressHandler(item)}>
      <View
        style={{
          width: SCREEN_WIDTH,
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
          <View style={{ marginTop: 5, padding: 5 }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                {item.author}
              </Text>
              <MaterialCommunityIcons
                name="heart-outline"
                size={22}
                color="red"
              />
            </View>

            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{ fontSize: 18, fontWeight: '300' }}>
                  {item.rating}
                </Text>
                <Ionicons name="star" size={18} color="#e5cb2e" />
              </View>
              <Text style={{ fontSize: 18, fontWeight: '600',color: '#78716c',
}}>
                {item.qoute}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default NewArrItem;
const styles = StyleSheet.create({});
