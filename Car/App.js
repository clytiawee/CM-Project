import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native'; 
import AnnouncementsScreen from './Screens/AnnouncementsScreen';
import HomeScreen from './Screens/HomeScreen';
import BookingScreen from './Screens/BookingScreen';
import SettingsScreen from './Screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home')
              return <Icon name="home" size={24} color={color} />; 
            if (route.name === 'Announcements')
              return <Icon name="info" size={24} color={color} />;
            if (route.name === 'Settings')
              return <Icon name="settings" size={24} color={color} />;
            if (route.name === 'Booking')
              return <Icon name="list" size={24} color={color} />;
          },
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#D5E0EC', // The light blue from design
            height: 60
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Announcements" component={AnnouncementsScreen}/>
        <Tab.Screen name="Booking" component={BookingScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
