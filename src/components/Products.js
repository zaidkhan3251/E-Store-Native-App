import React, { useRef } from 'react';
import { StyleSheet, Text, View,Dimensions, SafeAreaView, ScrollView,FlatList} from 'react-native';
import appData from './appData';
import ProductItem from "./ProductItem";
import { SCREEN_WIDTH,SCREEN_HIGHT } from '../Constants/Constants';
// export const SCREEN_WIDTH = Dimensions.get("window").width;


const Products = () => {

    return (
        <View>
            <FlatList
  horizontal={false}
  pagingEnabled={true}
  showsHorizontalScrollIndicator={false}
  legacyImplementation={false}   
  data={appData}
  renderItem={ProductItem}
  keyExtractor={(item) => item.id}
  numColumns={2}  



/>
            
        </View>
    )
}

export default Products;
// style={{width: SCREEN_WIDTH + 5, height:SCREEN_WIDTH*0.58}}