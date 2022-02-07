import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';
// import NewArr from  '../components/NewArr'
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Detail = ({ navigation, route }) => {
  const { product } = route.params;
  console.log('from detail page', product);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ marginHorizontal: 2 }}>
          <Image style={styles.productImg} source={{ uri: product.imgUrl }} />
          <View style={{ marginTop: 2, paddingHorizontal: 8 }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 20, fontWeight: '600' }}>
                {product.author}
              </Text>
              <MaterialCommunityIcons
                name="heart-outline"
                size={24}
                color="red"
              />
            </View>

            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{ fontSize: 18, fontWeight: '400' }}>
                  {product.rating}
                </Text>
                <Ionicons name="star" size={22} color="#e5cb2e" />
              </View>
              <Text
                style={{ fontSize: 18, fontWeight: '700', color: '#78716c' }}>
                {product.qoute}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis
            </Text>
            <View style={styles.contentColors}>
              <TouchableOpacity
                style={[
                  styles.btnColor,
                  { backgroundColor: '#00BFFF' },
                ]}></TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.btnColor,
                  { backgroundColor: '#FF1493' },
                ]}></TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.btnColor,
                  { backgroundColor: '#00CED1' },
                ]}></TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.contentSize}>
          <TouchableOpacity style={styles.btnSize}>
            <Text>S</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSize}>
            <Text>M</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSize}>
            <Text>L</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSize}>
            <Text>XL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.addToCarContainer}>
          <TouchableOpacity
            style={styles.shareButton}
            onPress={() => this.clickEventListener()}>
              <LinearGradient
              colors={['#9930ee', '#5e17eb']}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              useAngle
              angle={160}  
              style={{ height: '100%',
                borderRadius: 30,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',}}
              >
            <BlurView
              blurType="light"
              blurAmount={50}
              style={{
                height: '100%',
                borderRadius: 30,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{ alignItems: 'center' }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Roboto-Medium',
                    color: 'white',
                  }}>
                  Add to cart
                </Text>
              </View>
             
            </BlurView>
             </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: 'white',
    marginBottom:8
  },
  productImg: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: 'bold',
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
  description: {
    marginTop: 10,
    color: '#696969',
    marginLeft: 5,
    padding: 1,
  },
  star: {
    width: 40,
    height: 40,
  },
  btnColor: {
    height: 20,
    width: 20,
    borderRadius: 5,
    marginVertical: 3,
  },
  btnSize: {
    height: 40,
    width: 40,
    borderRadius: 10,
    borderColor: '#778899',
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor: 'white',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  contentColors: {
    justifyContent: 'center',
    marginHorizontal: 30,
    marginTop: 20,
  },
  contentSize: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  separator: {
    height: 2,
    backgroundColor: '#eeeeee',
    marginTop: 20,
    marginHorizontal: 30,
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',

    borderRadius: 30,
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  addToCarContainer: {
    marginHorizontal: 30,
  },
});
