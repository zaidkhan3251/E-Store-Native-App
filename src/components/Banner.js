import * as React from 'react';
import { View, Text,Image } from "react-native";
import Baner from './Banner.png';
import { SCREEN_WIDTH } from '../Constants/Constants';
export default function Banner() {
    return (
      <View style={{flex:1, justifyContent: 'center' ,marginBottom:10, width: SCREEN_WIDTH, 
          height: SCREEN_WIDTH*0.5,overflow:"hidden",borderBottomLeftRadius:15,borderBottomRightRadius:15,backgroundColor:"grey"}}>
        <Image source={Baner}   style={{
          width: SCREEN_WIDTH, 
          height: SCREEN_WIDTH,
          resizeMode: 'contain',
        }}/>
      </View>
    );  
  }  