import React from 'react';
import { StyleSheet, Text, View,Dimensions, SafeAreaView, ScrollView,FlatList } from 'react-native';
import appData from './appData';
import FeaturedProductItem from "./FeaturedProductItem";
import { SCREEN_WIDTH } from '../Constants/Constants';
// export const SCREEN_WIDTH = Dimensions.get("window").width;


const FeaturedProduct = ({navigation}) => {
    return (
        <View>
            <FlatList
  horizontal
  pagingEnabled={false}
  showsHorizontalScrollIndicator={false}
  legacyImplementation={false}
  data={appData.products}
  renderItem={({item})=><FeaturedProductItem item={item} navigation={navigation}/>}
  keyExtractor={(item) => item.id}
  contentContainerStyle={{
    
    
}}
  style={{width: SCREEN_WIDTH + 5, height:SCREEN_WIDTH*0.58}}
  



/>
        </View>
    )
}

export default FeaturedProduct
