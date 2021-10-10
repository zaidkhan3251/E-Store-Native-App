import React, { useRef } from 'react';
import { StyleSheet, Text, View,Dimensions, SafeAreaView, ScrollView,FlatList} from 'react-native';
import appData from './appData';
import NewArrItem from "./NewArrItem";
import { SCREEN_WIDTH,SCREEN_HIGHT } from '../Constants/Constants';
// export const SCREEN_WIDTH = Dimensions.get("window").width;


const NewArr = () => {

    return (
        <View>
            <FlatList
  horizontal
  pagingEnabled={true}
  showsHorizontalScrollIndicator={false}
  legacyImplementation={false}
  data={appData}
  renderItem={NewArrItem}
  keyExtractor={(item) => item.id}
  style={{width: SCREEN_WIDTH, height:SCREEN_WIDTH*0.88}}
  



/>
        </View>
    )
}

export default NewArr;
// style={{width: SCREEN_WIDTH + 5, height:SCREEN_WIDTH*0.58}}