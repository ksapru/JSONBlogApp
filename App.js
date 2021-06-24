import React, { Component } from 'react';
import {TouchableOpacity, Alert , Button, StyleSheet, Text, View, FlatList, Image } from 'react-native';
import Detail from './Detail'
import Widget from './Widget'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Classification from './Classification';

const Tab = createMaterialBottomTabNavigator();
 
 





export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Detail">
        <Tab.Screen 
        name="Detail" 
        component={Detail}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
    
        <Tab.Screen 
        name="Widget" 
        component={Widget}
        options={{
          tabBarLabel: 'Widget',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
    
    <Tab.Screen 
        name="Classification" 
        component={Classification}
        options={{
          tabBarLabel: 'Classification',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book" color={color} size={26} />
          ),
        }}
      />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

 