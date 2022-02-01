import React from 'react'
import { StyleSheet, Button ,Text, View,Dimensions, SafeAreaView, ScrollView,FlatList} from 'react-native';
import {AuthContext} from '../../context'
 const SignIn = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

  return (   
    <View>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={() => signIn()} />
      <Button
        title="Create Account"
        onPress={() => navigation.push("CreateAccount")}
      />
    </View>
  );
};

export default SignIn;