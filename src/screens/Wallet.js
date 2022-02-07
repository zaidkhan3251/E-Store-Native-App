import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Wallet = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#eee' }}>
      <LinearGradient
        colors={['#9930ee', '#5e17eb']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        useAngle
        angle={160}
        style={{
          height: '25%',

          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}>
        <BlurView
          blurType="light"
          blurAmount={50}
          style={{
            height: '100%',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            flexDirection: 'row',
            paddingHorizontal: 16,
          }}>
          <View style={{}}>
            <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}>
              My wallet
            </Text>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>
              Zaid Khan
            </Text>
            <Text style={{ color: 'white', fontSize: 26, fontWeight: '600' }}>
              $30.5
            </Text>
            <Text style={{ color: 'white', fontSize: 14, fontWeight: '500' }}>
              zaidkhan@gmail.com
            </Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'cneter' }}>
            <TouchableOpacity
              style={{ height: 50, width: 50, borderRadius: 50 }}>
              <MaterialCommunityIcons
                name="wallet-plus-outline"
                size={30}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </BlurView>
      </LinearGradient>
      <Text style={{ color: '#78716c' }}> Transactions</Text>
      <LinearGradient
        colors={['#9930ee', '#5e17eb']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        useAngle
        angle={160}
        style={{
          height: '10%',

          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
          marginVertical: 20,
        }}>
        <BlurView
          blurType="light"
          blurAmount={50}
          style={{
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
          }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 16, fontWeight: '600', color: 'white' }}>
              No new transaction{' '}
            </Text>
            <MaterialCommunityIcons
              name="circle-edit-outline"
              size={24}
              color="black"
            />
          </View>
        </BlurView>
      </LinearGradient>
    </View>
  );
};

export default Wallet;
