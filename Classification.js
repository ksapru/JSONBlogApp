import React, { Component } from 'react';
import {TouchableOpacity,  Alert , Button, StyleSheet, Text, View, FlatList, Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Widget from './Widget';
import { Divider, Searchbar } from 'react-native-paper';


 
 


export default class App extends Component {

  

    constructor() {
      super()
      this.state = {
        dataSource: []
        
      }
    }


  
  
   
   
    renderItem = ({ item }) => {
  
     
      return ( 
          
        
         <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10, marginTop: 70}}>
        
    
        <Image 
        style={{ width: 100, height: 150, margin: 7}}
        source={{ uri: item.image }}/>
  
  
        <View style={{ flex: 1, justifyConntent: 'center'}}> 
         
        <Text style={{fontSize: 18, color: 'green', marginBottom: 8}}>
           {item.book_title}  
          </Text>
  
    
          <Text style={{ fontSize: 16, color: 'red'}}>
            {item.author}
          </Text>
          <Text style={{ fontSize: 10, color: 'black', marginTop: 5}}>
            {item.date}
  
           
         </Text>
 
       
         <TouchableOpacity  
          style={styles.button}>
       
          </TouchableOpacity>
 

          <Text>
         {item.details}
         </Text>


         <Divider/>
  
      </View>
      
    </View>
    
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
  