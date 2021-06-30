import React, { Component } from 'react';
import {TouchableOpacity ,  StyleSheet, View, FlatList, Image, ImageBackground, Text } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Button, Card, Title, Paragraph, ProgressBar, Colors, TouchableRipple, Chip } from 'react-native-paper';
import { Link } from '@react-navigation/native';
import  Search  from './Search';

 


export default class App extends Component {

  

    constructor() {
      super()
      this.state = {
        dataSource: []
        
      }
    }
  
    
   
    renderItem = ({ item }) => {
  
     
      return ( 

  
        <ImageBackground style={styles.container} source={require('./background.gif')}>
          <Card style={{ marginBottom: 20, marginTop: 80, }}>

            <TouchableRipple onPress={() => console.log('Pressed')} rippleColor="rgba(0, 0, 0, .32)">
              <Link to="/Classification">
                <Card.Cover style={{ width: 350, height: 180 }} source={{ uri: item.image }} />
              </Link>
            </TouchableRipple>



            <Card.Title title={item.book_title}>
              <Text> </Text>

            </Card.Title>

            <Card.Content>


              <Chip icon="book" onPress={() => console.log('Pressed')}> {item.author} </Chip>
              <Text> </Text>
              <ProgressBar progress={0.35} color={Colors.red800} />
              <Text> </Text>
              <Chip icon="clock" onPress={() => console.log('Pressed')}> {item.date} </Chip>


            </Card.Content>
            <Text>   </Text>

            <Button title="Read More" onPress={() => {
    alert(item.details);
  }}>Read More </Button>
          </Card>
        </ImageBackground> 
 
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
  
