import * as React from 'react';
import { View, Text } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
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
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}></BlurView>
      </LinearGradient>

      <LinearGradient
        colors={['#9930ee', '#5e17eb']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        useAngle
        angle={160}
        style={{
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',

          height: 100,
          width: 100,
          marginTop: -60,
        }}>
        <BlurView
          blurType="light"
          blurAmount={50}
          style={{
            borderRadius: 50,

            justifyContent: 'center',
            alignItems: 'center',
            height: 100,
            width: 100,
          }}>
          <Avatar
            rounded
            size={90}
            source={{
              uri: 'https://www.w3schools.com/w3images/avatar6.png',
            }}
            //  onPress={() => navigation.toggleDrawer()}
          />
        </BlurView>
      </LinearGradient>
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
            <Text style={{ fontSize: 16, fontWeight: '600' }}>Zaid Khan</Text>
            <MaterialCommunityIcons
              name="circle-edit-outline"
              size={24}
              color="black"
            />
          </View>
        </BlurView>
      </LinearGradient>
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
            <Text style={{ fontSize: 16, fontWeight: '600' }}>
              ZaidKhan@gmail.com
            </Text>
            <MaterialCommunityIcons
              name="circle-edit-outline"
              size={24}
              color="black"
            />
          </View>
        </BlurView>
      </LinearGradient>
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
            <Text style={{ fontSize: 16, fontWeight: '600' }}>09345348928</Text>
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
}
