import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View,
  SafeAreaView,
  Platform,
} from 'react-native';
import { SCREEN_WIDTH, SCREEN_HIGHT } from '../Constants/Constants';

import { Avatar } from 'react-native-elements';

import { SearchBar } from 'react-native-elements';

export default function Header({navigation}) {
  const [search, setSearch] = useState('');
  return (
    <View style={style.header}>
      <View style={style.viewStyle}>
        <Text style={style.Feattext}>E-Store </Text>

        <SearchBar
          round    
          inputContainerStyle={{
            backgroundColor: 'white',

            elevation: 10,
          }}
          containerStyle={{
            backgroundColor: '#fff',
            borderTopWidth: 0,
            borderBottomWidth: 0,
          }}
          lightTheme={true}
          searchIcon={{ size: 24 }}
          placeholder="Type Here..."
          onChangeText={(text) => setSearch(text)}
          value={search}
          onClear={(text) => setSearch('')}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 5,
          marginTop: 50,
        }}>
        <Avatar
          rounded
          size={45}
          source={{
            uri: 'https://www.w3schools.com/w3images/avatar6.png',
          }}
          onPress={() => navigation.toggleDrawer()}
        />
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    marginTop: Platform.OS == 'ios' ? 29 : 20,
  },
  header: {
    display: 'flex',
    flex: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'relative',
    marginTop: 10,
    width: SCREEN_WIDTH,
    marginBottom: 10,
    left: 0,
    top: 0,
  },
  Feattext: {
    justifyContent: 'center',
    textShadowOffset: { width: 2, height: 2 },
    textShadowColor: '#555555',
    textShadowRadius: 6,
    textAlign: 'left',
    fontSize: 24,
    marginBottom: 0,
    marginLeft: 15,
    color: '#000',
    elevation: 8,
  },
});
