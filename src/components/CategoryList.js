import React from 'react';
import { StyleSheet, Text, View,Dimensions, SafeAreaView, ScrollView,FlatList } from 'react-native';
import appData from './appData';
import CategoryItem from "./CategoryItem";
import { SCREEN_WIDTH } from '../Constants/Constants';
// export const SCREEN_WIDTH = Dimensions.get("window").width;


const CategoryList = () => {
    return (
        <View>
            <FlatList
  horizontal
  pagingEnabled={false}
  showsHorizontalScrollIndicator={false}
  legacyImplementation={false}
  data={appData}
  renderItem={CategoryItem}
  keyExtractor={(item) => item.id}
  contentContainerStyle={{
    
    
}}
  style={{width: SCREEN_WIDTH + 5, height:SCREEN_WIDTH*0.2}}
  



/>
        </View>
    )
}

export default CategoryList
