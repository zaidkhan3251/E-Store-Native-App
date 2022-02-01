import React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import Explore from './src/screens/Explore';
import Cart from './src/screens/Cart';
import Wallet from './src/screens/Wallet';
import Search from './src/screens/Search';
import Home from './src/screens/Home';
import Detail from './src/screens/Detail';
import SignIn from './src/screens/SignIn';
import CreateAccount from './src/screens/CreateAccount';
import { AuthContext } from './context';
import Splash from './src/screens/Splash';
import NewArr from './src/components/NewArr';
import NewArrItem from './src/components/NewArrItem';
const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: 'Sign In' }}
    />
    <AuthStack.Screen
      name="CreateAccount"
      component={CreateAccount}
      options={{ title: 'Create Account' }}
    />
  </AuthStack.Navigator>
);

const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home-outline' : 'home-outline';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'ellipse-outline' : 'ellipse-outline';
          } else if (route.name === 'Wallet') {
            iconName = focused ? 'wallet-outline' : 'wallet-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search-outline' : 'search-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeStackScreen}
      />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen
        name="Search"
        options={{ headerShown: false }}
        component={Search}
      />
      <Tab.Screen name="Wallet" component={Wallet} />
    </Tab.Navigator>
  );
}

function NotificationsScreen({ navigation }) {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>No New Notifications!</Text>
      <Button onPress={() => navigation.toggleDrawer()} title="Go back home" />
      <Button title="Sign Out" onPress={() => signOut()} />
    </View>
  );
}
const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    <HomeStack.Screen name="Detail" component={Detail} />
    <HomeStack.Screen name="Cart" component={Cart} />
    <HomeStack.Screen name="NewArr" component={NewArr} />
    <HomeStack.Screen name="NewArrItem" component={NewArrItem} />
   

  </HomeStack.Navigator>
);
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Drawer.Screen name="Notifications" component={NotificationsScreen} />
  </Drawer.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={DrawerScreen}
        options={{
          animationEnabled: false,
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
    )}
  </RootStack.Navigator>
);

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
