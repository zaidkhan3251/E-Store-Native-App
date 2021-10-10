import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View,
  SafeAreaView,Platform
} from "react-native";
import { SCREEN_WIDTH,SCREEN_HIGHT } from '../Constants/Constants';

import { Avatar } from "react-native-elements";

import { SearchBar } from "react-native-elements";

export default function Header() {
  const [search, setSearch] = useState("");
  return (
    <View style={style.header}>
      <View style={style.viewStyle}>
        <SearchBar
          round
          inputContainerStyle={{
            backgroundColor: "white",

            elevation: 10,
          }}
          containerStyle={{
            backgroundColor: "#fff",
            borderTopWidth: 0,
            borderBottomWidth: 0,
          }}
          lightTheme={true}
          searchIcon={{ size: 24 }}
          placeholder="Type Here..."
          onChangeText={(text) => setSearch(text)}
          value={search}
          onClear={(text) => setSearch("")}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 5,
          marginTop: 15,
        }}
      >
        <Avatar
          rounded
          size={45}
          source={{
            uri: "../assets/splash2.png",
          }}
        />
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  viewStyle: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#bffff4",
    marginTop: Platform.OS == "ios" ? 29 : 20,
  },
  header: {
    display: "flex",
    flex: 1,

    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    position: "relative",
    marginTop: 10,
    width: SCREEN_WIDTH,
    marginBottom: 10,
    left: 0,
    top: 0,
  },
});
