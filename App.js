import React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import Detail from "./src/screens/Detail"
import Cart from "./src/screens/Cart"
import Add from "./src/screens/Add" 
import Home from "./src/screens/Home"
const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;     
          if (route.name === 'Home') {
            iconName = focused  
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';   
          } else if (route.name === 'Detail') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }
           else if (route.name === 'Cart') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }
           else if (route.name === 'Add') {   
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        }, 
      })} 
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>      
      <Tab.Screen name="Home" options={{headerShown:false}} component={Home} />
      <Tab.Screen name="Detail" component={Detail} /> 
      <Tab.Screen name="Cart" component={Cart} />      
      <Tab.Screen name="Add" component={Add} />           
    </Tab.Navigator>
  );  
}
function NotificationsScreen({ navigation }) {
  return (   
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>No New Notifications!</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
const Stack = createStackNavigator();
function TabAScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabA Home" component={TabADetailsScreen} />
      <Stack.Screen name="TabA Details" component={Detail} />
    </Stack.Navigator>
  );
}
function TabADetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to TabA page!</Text>
      <Button
        onPress={() => navigation.navigate('TabA Details')}
        title="Go to TabA Details"
      />
    </View>
  );
}      
function Details() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>TabA Details here!</Text>
    </View>
  );
}
function TabBScreen() {
  return (
    <View>
      <Text style={{ textAlign: 'center', marginTop: 300 }}>
        Welcome to TabB page!
      </Text>
    </View>   
  );       
}  
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
