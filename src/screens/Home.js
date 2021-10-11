import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import CategoryList from "../components/CategoryList";
import Products from "../components/Products";
import NewArr from "../components/NewArr";
import FeaturedProduct from "../components/FeaturedProduct";
import Header from "../components/Header";
   
const Home = () => {
  return (
    <View style={styles.home}> 
      <ScrollView> 
      <Text style={styles.Feattext}>E-Store </Text>
        <Header />
        <CategoryList />
        <View>
          <Text style={styles.NewArrtext}>New Arrival </Text>
        </View>
        <NewArr/>
        <Text style={styles.Feattext}>Featured </Text>
        <FeaturedProduct/>
        <Products/>
        
        
        
      </ScrollView>
    </View>
  );
};
// FeaturedProductItem
// FeaturedProduct
export default Home;
const styles = StyleSheet.create({
  home: {
    display: "flex",
    flexDirection: "column",
   
    padding: 0,
    top: 0,
    backgroundColor: "#fff",
    color: "#fff",
  },
  NewArrtext: {
    justifyContent: "center",
    textShadowOffset: { width: 2, height: 2 },
    textShadowColor: "#555555",
    textShadowRadius: 6,
    textAlign: "center",
    fontSize: 24,
    marginBottom:10,
    fontWeight: "bold",
    color: "#000",
    elevation: 8,
  },
  Feattext: {
    justifyContent: "center",
    textShadowOffset: { width: 2, height: 2 },
    textShadowColor: "#555555",
    textShadowRadius: 6,
    textAlign: "left",
    fontSize: 24,
    marginBottom:10,
    marginLeft:15,
    color: "#000",
    elevation: 8,
  },
});
