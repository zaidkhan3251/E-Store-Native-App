import React from 'react'
import { StyleSheet, Button ,Text, View,Dimensions, SafeAreaView, ScrollView,FlatList} from 'react-native';
import {AuthContext} from '../../context'

 const CreateAccount = () => {
  const { signUp } = React.useContext(AuthContext);

  return (
    <View>
      <Text>Create Account Screen</Text>
      <Button title="Sign Up" onPress={() => signUp()} />
    </View>
  );
};
export default CreateAccount;


