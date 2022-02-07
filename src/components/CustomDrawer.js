import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Profile from './elogo.png';
const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: '#5E17EB' }}>
        <View style={{ marginLeft: 10, paddingLeft: 15 }}>
          <Avatar
            rounded
            size={60}
            source={{
              uri: 'https://www.w3schools.com/w3images/avatar6.png',
            }}
            //  onPress={() => navigation.toggleDrawer()}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 1,
              fontWeight: 'bold',
              marginTop:5
            }}>
            Zaid Khan
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom:5 }}>
            <Ionicons name="mail-outline" size={14} color="#fff" />
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Roboto-Regular',
                marginLeft: 5,
                fontSize: 16,
                marginBottom:4
              }}>
              zaidkhan@gmail.com
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
          <DrawerItemList {...props} style={{ marginLeft: 10 }} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15,alignItems:"center",justifyContent:"center" }}>
          <BlurView blurType="light" blurAmount={20} style={{padding:15,borderRadius:30,}}>
            <LinearGradient
              colors={['#fc00ff', '#00dbde']}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              useAngle
              angle={160}  
              style={{padding:15,borderRadius:30,}}
              >
 <View style={{ flexDirection: 'row', alignItems: 'center' }}> 
                <Ionicons name="exit-outline" size={24} color="white" />
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Roboto-Medium',
                    marginLeft: 5,
                    color:"white"
                  }}>
                  Sign Out
                </Text>
              </View>
            </LinearGradient>
          </BlurView>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
