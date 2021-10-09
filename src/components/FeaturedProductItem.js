import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import { SCREEN_WIDTH } from "../Constants/Constants";
const ITEM_WIDTH = Math.round(SCREEN_WIDTH * 0.35);

const FeaturedProductItem = ({ item }) => {
  return (
    <View style={styles.container} key={item.id}>
      <Image source={{ uri: item.imgUrl }} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.header}>{item.author}</Text>
        <Text style={styles.price}>{item.qoute}</Text>
      </View>
    </View>
  );
};

export default FeaturedProductItem;
const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    backgroundColor: "white",
    width: SCREEN_WIDTH * 0.4,
    elevation: 0,
  },
  image: {
    width: ITEM_WIDTH,
    height: SCREEN_WIDTH * 0.45,
    borderRadius: 7,
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
