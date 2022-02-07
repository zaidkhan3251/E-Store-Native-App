import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import appData from '../components/appData';
import NewArrItem from '../components/NewArrItem';
import { SCREEN_WIDTH, SCREEN_HIGHT } from '../Constants/Constants';
import { Ionicons } from '@expo/vector-icons';
import CategoryList from '../components/CategoryList';
import Products from '../components/Products';
import NewArr from '../components/NewArr';
import FeaturedProduct from '../components/FeaturedProduct';
import TrendingProduct from '../components/Trending';
import { Avatar, Header } from 'react-native-elements';
import CategoryItem from '../components/CategoryItem';
import HeaderBar from '../components/Header'
import Banner from '../components/Banner'
const Home = ({ navigation }) => {
  // console.log('data', appData.products);  
  // const onPressHandler=()=>{
  //   navigation.navigate("Detail")
  // }
  return (
    <SafeAreaView> 
    <View style={styles.home}> 
      <HeaderBar navigation={navigation}/>
    
      <ScrollView style={styles.Subhome}>
      <Banner/>
        <CategoryItem navigation={navigation} data={appData.categories} />
        <View>
          <Text style={styles.NewArrtext}>New Arrival</Text>  
        </View>

               <NewArr navigation={navigation}/>

        <Text style={styles.Feattext}> Featured</Text>

        <FeaturedProduct navigation={navigation}/> 
                <Text style={styles.Feattext}> Trending</Text>

        <TrendingProduct navigation={navigation}/>
        <Products navigation={navigation}/>
      </ScrollView> 
    </View></SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  home: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    top: 2,
    backgroundColor: '#fff',
    color: '#fff',
  },
  Subhome: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 10,
    marginBottom: 80,
    top: 0,
    backgroundColor: '#fff',
    color: '#fff',
  },
  NewArrtext: {
    justifyContent: 'center',
    textShadowOffset: { width: 2, height: 2 },

    textAlign: 'center',
    fontSize: 24,
    marginTop: 8,
    marginBottom: 2,
    fontWeight: 'bold',
    color: '#000',
    elevation: 8,
  },
  Feattext: {
    justifyContent: 'center',
    textShadowOffset: { width: 2, height: 2 },
    textShadowColor: '#555555',
    textShadowRadius: 6,
    textAlign: 'left',
    fontSize: 24,
    marginBottom: 10,
    marginLeft: 15,
    color: '#000',
    elevation: 8,
  },
});
