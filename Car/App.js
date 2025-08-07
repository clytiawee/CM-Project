import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import AnnouncementsScreen from './Screens/AnnouncementsScreen';
import LoanScreen from './Screens/LoanScreen';
import SettingsScreen from './Screens/SettingsScreen';

const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home')
            return <Icon name="home" size={24} color={color} />;
          if (route.name === 'Announcements')
            return <Icon name="info" size={24} color={color} />;
          if (route.name === 'Loaning')
            return <Icon name="list" size={24} color={color} />;
          if (route.name === 'Settings')
            return <Icon name="settings" size={24} color={color} />;
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#D5E0EC',
          height: 60,
        },
        tabBarActiveTintColor: '#2E4576',
        tabBarInactiveTintColor: '#76797C',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Announcements" component={AnnouncementsScreen} />
      <Tab.Screen name="Loaning" component={LoanScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
