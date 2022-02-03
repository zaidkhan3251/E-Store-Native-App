import React from 'react'
import { StyleSheet, View, Text,FlatList, Image,Dimensions,Pressable } from "react-native";
import { SCREEN_WIDTH } from '../Constants/Constants';
const ITEM_WIDTH = Math.round(SCREEN_WIDTH * 0.28);
import appData from '../components/appData';


         
const CategoryItem = ({ item,navigation}) => {
   const onPressHandler=(item)=>{
    navigation.navigate("CategoryProduct",{product:item}) 
    console.log(item,"click on category Item")
  }
    return (
            <Pressable  onPress={()=>onPressHandler(item)}>     

        <View style={styles.container} key={item.id}>
          <Image source={{ uri: item.imgUrl }} style={styles.image} />
          <View style={styles.body}>
            <Text style={styles.text}>{item.author}</Text>
          </View>
        </View></Pressable>
      );  
}



  






const Explore = ({navigation} ) => {
   return (
        <View>
            <FlatList   
  pagingEnabled={false}
  showsVerticalScrollIndicator={false}
  legacyImplementation={false}
  data={appData.products}
  renderItem={({item})=><CategoryItem item={item} navigation={navigation}/>}     
  keyExtractor={(item) => item.id}   
  contentContainerStyle={{
    paddingBottom:20, backgroundColor:'#fff' 
    
}}
  



/>
        </View>
    )
}


export default Explore
const styles = StyleSheet.create({
    container: {
      alignItems:'center',
      backgroundColor: "white",
      width: SCREEN_WIDTH,
      elevation: 0,
paddingTop:20,  
  },
    image: {
      width: SCREEN_WIDTH*0.97,
      height: ITEM_WIDTH,
      borderRadius: 7, 
      opacity:0.9,
      resizeMode:"cover"

    },
    header: {
      
    },
       
    text: {
      color: "#fff",
      fontSize: 20,
      
    },
    body: { position: 'absolute', top: 0, left: 0, right: 0, bottom: ITEM_WIDTH*0.1, justifyContent: 'center', alignItems: 'center'}    
  });
  



