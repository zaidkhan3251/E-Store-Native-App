import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Dimensions, SafeAreaView, ScrollView } from 'react-native';
import Home from './src/screens/Home';
 const HEIGHT = Dimensions.get("window").height;

export default App =()=> {
  return (
    
    
    
    <View > 
        <StatusBar style="default" />

    <Home/>
         </View>
      
      
    
  );
}    

const styles = StyleSheet.create({ 
  container:{
    marginTop:0,
    backgroundColor:"#7e22ce",
    height:HEIGHT,

  },
  main:{
    position: "relative",
    width: 473,
    height: 1024,
    backgroundColor:"#DADADA",
  },
  home:{
    position: "absolute",
width: 473,
height: 915,
left: 0,
top: 109, 
backgroundColor: "#000",
  },  
});
