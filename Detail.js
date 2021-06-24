import React, { Component } from 'react';
import {TouchableOpacity ,  StyleSheet, Text, View, FlatList, Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Button, Card, Title, Paragraph, ProgressBar, Colors, TouchableRipple } from 'react-native-paper';
import { Link } from '@react-navigation/native';



export default class App extends Component {

  

    constructor() {
      super()
      this.state = {
        dataSource: []
        
      }
    }
  
   
    renderItem = ({ item }) => {
  
     
      return ( 
        <Card style={{ marginBottom: 20, marginTop: 80 }}>

        <TouchableRipple
    onPress={() => console.log('Pressed')}
    rippleColor="rgba(0, 0, 0, .32)"
  >
        
      <Card.Cover style={{ width: 350, height: 180}}
        source={{ uri: item.image }} />

  </TouchableRipple>
        
        <Link to="/Classification">
        <Card.Title title={item.book_title}> 
        </Card.Title>
        </Link>
        <Card.Content>
        <Title>{item.author}</Title>

        <Paragraph>{item.date}</Paragraph>
 
        </Card.Content>
 
    
        </Card>
       )
  }
      
  
    componentDidMount() {
  
      const url = 'http://www.json-generator.com/api/json/get/bTZATyYiSq?indent=2'
      fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.book_array
        })
    })
  
  
    .catch((error) => {
      console.log(error)
    })
  }        
  
    render() {
      return (
        
        <View style={styles.container}>
          <FlatList
              data={this.state.dataSource}
              renderItem={this.renderItem}
              /> 
        </View>
    );
  }
  }  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000', 
      alignItems: 'center',
    },
    button: { 
      marginRight: 170,
      padding: 15,
  
     },
  });
  