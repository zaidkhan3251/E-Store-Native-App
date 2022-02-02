import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View,
  SafeAreaView,
  Platform,
  Image,
} from 'react-native';
import Brand from './brand4.PNG';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-community/masked-view';

import { SCREEN_WIDTH, SCREEN_HIGHT } from '../Constants/Constants';
import { Ionicons } from '@expo/vector-icons';

import { Avatar, Header } from 'react-native-elements';

import { SearchBar } from 'react-native-elements'; 

export default function HeaderBar({ navigation }) {
  // brand name color code #ED0095 // 
  return (
    <View   
      style={{
        width: '100%',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 3,
        marginBottom: 2,
        marginTop: 20,
      }}>
      <Image
        source={Brand}
        style={{
          width: 150,
          height: 60,
          resizeMode: 'contain',  
        }}
      />
      <Avatar
        rounded
        size={30}
        source={{
          uri: 'https://www.w3schools.com/w3images/avatar6.png',
        }}
        onPress={() => navigation.toggleDrawer()}
      />
    </View>
  );
}
const style = StyleSheet.create({
  brandName: {
    textShadowOffset: { width: 2, height: 2 },

    fontSize: 24,
    fontFamily: 'FiraCode_300Light',

    // marginTop: 8,
    // marginBottom: 2,
    // fontWeight: 'bold',
    // color: '#000',
    // elevation: 8,
    // <Image source={Brand} style={{
    //         width: 100,
    //         height:70,
    //         resizeMode: "contain"

    //       }}/>
  },
});
