import React,{useState} from 'react'
import { StyleSheet, Text, View,Dimensions, SafeAreaView, ScrollView,FlatList,Platform} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { SCREEN_WIDTH, SCREEN_HIGHT } from '../Constants/Constants';


const Search = () => {
    const [search, setSearch] = useState('');

    return (
        <View style={{marginTop:25 , }}>
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
    )
}

export default Search


