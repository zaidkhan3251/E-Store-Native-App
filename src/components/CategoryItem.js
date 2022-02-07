import React from 'react'
import { StyleSheet, View, Text, Image,Dimensions,Pressable,ScrollView } from "react-native";
import { SCREEN_WIDTH } from '../Constants/Constants';
const ITEM_WIDTH = Math.round(SCREEN_WIDTH * 0.4);
import appData from './appData';


const CategoryItem = ({ navigation,data }) => {
  const onPressHandler=(item)=>{
    navigation.navigate("CategoryProduct",{product:item}) 
    console.log(item,"click on category Item")
  }
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginHorizontal:10}}>
      {appData.categories.map((item)=>(  
      
      <Pressable  onPress={()=>onPressHandler(item)}>     
        <View style={styles.container} key={item.id}>
          <Image source={ item.imgUrl } style={styles.image} />
        </View>
        </Pressable>)
        )}  
        </ScrollView>
      ); 
}
 
export default CategoryItem;
const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      // width: SCREEN_WIDTH*0.43,
      elevation: 7,
       borderRadius: 10,
        borderColor: '#778899',
    borderWidth: 1,
    marginHorizontal:8,
    padding:10
    },
    image: {
      width: 30,
      height:30,
      borderRadius: 10,
      resizeMode:"contain"

    },
  
    // body: { position: 'absolute', top: 0, left: 0, right: 0, bottom: ITEM_WIDTH*0.1, justifyContent: 'center', alignItems: 'center'}    
  });
  
