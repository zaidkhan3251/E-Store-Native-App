import { View, Text } from "react-native";
import * as React from 'react';

export default function SettingsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:16,fontWeight:'700'}}>Settings Screen</Text>
      </View>
    );
  }