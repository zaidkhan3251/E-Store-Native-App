import React from "react";
import { StyleSheet, View, Text, Image, Dimensions,Pressable } from "react-native";
import { SCREEN_WIDTH } from "../Constants/Constants";
const ITEM_WIDTH = Math.round(SCREEN_WIDTH * 0.35);
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const TrendingProductItem = ({ item ,navigation}) => {
  const onPressHandler=(item)=>{
    navigation.navigate("Detail",{product:item}) 
    console.log(item,"click on category Item")
  }
  return (
    <Pressable  onPress={()=>onPressHandler(item)}>  
    <View style={styles.container} key={item.id}>
      <Image source={{ uri: item.imgUrl }} style={styles.image} />

       <View style={{ marginTop: 2, paddingHorizontal: 8 }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 16, fontWeight: '600' }}>
                {item.author}
              </Text>
              <MaterialCommunityIcons
                name="heart-outline"
                size={18}
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
                <Text style={{ fontSize: 15, fontWeight: '200' }}>
                  {item.rating}
                </Text>
                <Ionicons name="star" size={18} color="#e5cb2e" />
              </View>
              <Text style={{ fontSize: 15, fontWeight: '400',color: '#78716c' }}>
                {item.qoute}
              </Text>
            </View>
      
      </View>
    </View>
    </Pressable>
  );
};

export default TrendingProductItem;
const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    backgroundColor: "white",
    width: SCREEN_WIDTH * 0.4,
    elevation: 0,
  },
  image: {
    width: ITEM_WIDTH,
    height: SCREEN_WIDTH * 0.25,
    borderRadius: 4,
  },
  // header: {
  //   color: "#222",
  //   fontSize: 20,
  //   fontWeight: "bold",
  //   paddingLeft: 60,
  //   paddingTop: 15,
  // },

  // price: {
  //   color: "#78716c",
  //   fontSize: 18,
  //   paddingLeft: 100,
  //   paddingRight: 20,
  // },

  body: {
    display:"flex",
    flex:1,
    flexDirection:"row",
    // bottom: ITEM_WIDTH * 0.1,
    justifyContent: "space-around",
    alignItems: "center",
  },   
});
