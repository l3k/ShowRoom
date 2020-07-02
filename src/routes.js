import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SimpleLineIcons } from '@expo/vector-icons';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import HomeScreen from './pages/Home';
import FavoritesScreen from './pages/Favorites';
import CheckoutScreen from './pages/Checkout';
import SettingsScreen from './pages/Settings';
import ProductDetail from './pages/ProductDetail';

function Home() {
  return (
    <Tab.Navigator tabBarOptions={{
      showLabel: false,
      activeTintColor: '#FECE9E',
      inactiveTintColor: '#FFFFFF',
      style: {
        backgroundColor: '#5C6181',
      },
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ color }) => (
          <SimpleLineIcons name="home" color={color} size={20} />
        ),
      }} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} options={{
        tabBarIcon: ({ color }) => (
          <SimpleLineIcons name="heart" color={color} size={20} />
        ),
      }} />
      <Tab.Screen name="Checkout" component={CheckoutScreen} options={{
        tabBarIcon: ({ color }) => (
          <SimpleLineIcons name="handbag" color={color} size={20} />
        ),
      }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        tabBarIcon: ({ color }) => (
          <SimpleLineIcons name="user" color={color} size={20} />
        ),
      }} />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>      
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}