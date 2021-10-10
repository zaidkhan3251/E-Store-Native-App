import React, { useRef } from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import { SCREEN_WIDTH } from "../Constants/Constants";
const ITEM_WIDTH = (SCREEN_WIDTH/1.33) * 0.56;
const ITEM_HIGHT = ITEM_WIDTH * 1.2;

const ProductItem = ({ item }) => {
   
  return (
    <View
      style={{
          display:"flex",
          flex:1,
          paddingBottom:10,
        width: SCREEN_WIDTH/2,
        alignItems: "center",
        justifyContent: "center",
      }}
      key={item.id}
    >
      <View
        style={{
          borderRadius: 18,
          borderWidth: 7,
          borderColor: "#fff",
          elevation: 4,
          shadowColor: "black",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            alignItems: "center",
            width: ITEM_WIDTH,
            height: ITEM_HIGHT,
            overflow: "hidden",
          }}
        >
          <Image
            source={{ uri: item.imgUrl }}
            style={{
              width: ITEM_WIDTH,
              height: ITEM_HIGHT,
              borderRadius: 18,
              resizeMode: "cover",
            }}
          />
        </View>
        
      </View>
      
    </View>
  );
};

export default ProductItem;
const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {},
  image: {},
  header: {
    color: "#222",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 60,
    paddingTop: 15,
  },

  price: {
    color: "#78716c",
    fontSize: 18,
    paddingLeft: 100,
    paddingRight: 20,
  },
  body: {},
});
