import React from "react";
import { StyleSheet, View, Dimensions, Text, Image } from "react-native";
import { SCREEN_WIDTH } from "../Constants/Constants";

export const ITEM_WIDTH = Math.round(SCREEN_WIDTH * 0.6);

const CarouselItem = ({ item, index }) => {

 
  return (
    <View style={styles.container} key={index}>
      <Image source={{ uri: item.imgUrl }} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.header}>{item.author}</Text>
        <Text style={styles.price}>{item.qoute}</Text>
      </View>
    </View>
  );
};
export default CarouselItem;

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: "white",
    borderRadius: 20,
    paddingBottom: 40,
    width: SCREEN_WIDTH,
    elevation: 0,
  },
  image: {
    width: ITEM_WIDTH,
    height: SCREEN_WIDTH*0.7,
    borderRadius: 10,
  },
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
