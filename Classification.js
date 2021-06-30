import React, { Component } from 'react';
import {TouchableOpacity,  Alert , Button, StyleSheet, Text, View, FlatList, Image, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Widget from './Widget';
import { Divider, Drawer, Searchbar, ProgressBar, Colors, Surface, Chip } from 'react-native-paper';
 



 


export default class App extends Component {


    constructor() {
      super()
      this.state = {
        dataSource: []
        
      }
    }


  
  
   
   
    renderItem = ({ item }) => {
  
     
      return ( 


        <ImageBackground style={styles.container} source={require('./download.png')}>

        
         <Surface style={{ flex: 1, color: '#ffff', flexDirection: 'row', marginLeft: 10, marginTop: 70,  padding: 8, elevation: 4}}>
        
    
        <Image 
        style={{ width: 100, height: 150, margin: 7 }}
        source={{ uri: item.image }}/>
      
  
        <View style={{ flex: 1, justifyConntent: 'center'}}> 
         
           
  
 
          <Drawer.Item
     style={{ backgroundColor: '#B19CD9' }}
     label={item.book_title}  
   />
   <Text>  </Text>


    
          <Text style={{ fontSize: 10, color: 'red'}}>
          <Chip style={{ height: 34, width: 180 }}icon="star" onPress={() => console.log('Pressed')}> 
{item.author}          </Chip>

          </Text>
          <Text> </Text>
          <Chip style={{ height: 34, width: 180 }}icon="clock" onPress={() => console.log('Pressed')}> 
          {item.date} 
          </Chip>

        
 
       
         <TouchableOpacity  
          style={styles.button}>
       
          </TouchableOpacity>
 

          <Text>
         {item.details}
         </Text>


         <Divider/>
  
      </View>
      
    </Surface>
    </ImageBackground>
 
    
      )
  }
      
  
    componentDidMount() {
  
      const url = 'http://www.json-generator.com/api/json/get/cglrNlmXvS?indent=2'
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
     },
    button: { 
      marginRight: 170,
      padding: 15,
  
     },

     
  });
  
