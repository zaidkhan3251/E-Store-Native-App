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
import { Avatar, Header } from 'react-native-elements';
import CategoryItem from '../components/CategoryItem';
const Home = ({ navigation }) => {
  console.log('data', appData.products);
  // const onPressHandler=()=>{
  //   navigation.navigate("Detail")
  // }
  return (
    <View style={styles.home}> 
      <Header
        statusBarProps={{ barStyle: 'light-content' }}
        leftComponent={
          <Avatar
            rounded
            size={45}
            source={{
              uri: 'https://www.w3schools.com/w3images/avatar6.png',
            }}
            onPress={() => navigation.toggleDrawer()}
          />
        }
        rightComponent={
          <Ionicons
            name="cart-outline"
            size={40}
            color="#000"
            onPress={() => navigation.navigate('Cart')}
          />
        }
        centerComponent={<Text style={styles.NewArrtext}> E-Store</Text>}
        containerStyle={{
          backgroundColor: '#fff',
          justifyContent: 'space-around',
          height: 80,
          elevation: 8,
        }}
      />
      <ScrollView style={styles.Subhome}>
        <CategoryItem navigation={navigation} data={appData.products} />
        <View>
          <Text style={styles.NewArrtext}>New Arrival</Text> 
        </View>

        <FlatList
          horizontal
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          data={appData.products}
          renderItem={NewArrItem}
          keyExtractor={(item) => item.id}
          style={{ width: SCREEN_WIDTH, height: SCREEN_WIDTH * 0.99 }}
        />

        <Text style={styles.Feattext}> Featured</Text>

        <FeaturedProduct />
        <Products />
      </ScrollView>
    </View>
  );
};
// FeaturedProductItem
// FeaturedProduct
export default Home;
const styles = StyleSheet.create({
  home: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    top: 0,
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
