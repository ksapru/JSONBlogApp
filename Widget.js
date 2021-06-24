import React, { Component, useRef, useEffect } from 'react';
import {TouchableOpacity, Alert ,  StyleSheet, Text, View, FlatList, Image } from 'react-native';
import Detail from './Detail'
import Classification from './Classification'
import 'react-native-gesture-handler';
import { Link } from '@react-navigation/native';
import { Badge, ProgressBar, Chip, Avatar, Button} from 'react-native-paper';



 
export default class App extends React.Component {
    render() {
        return (

             


            <View style={styles.container}>
                <Text style={{ fontSize: 35, marginLeft: 5, marginBottom: 0   }}>Your Top 3 blogs: </Text>
 
  
                <View style={styles.box}>
                    <View style={styles.inner}>
                    <Image 
        style={{ width: 140, height: 90, margin: 7}}
        source={{ uri:'https://ichef.bbci.co.uk/news/976/cpsprodpb/161DA/production/_110368509_dracula1_976.jpg'}}/>
                     <Text  style={{ fontSize: 25 }}> <Link to='/Classification'> Dracula </Link></Text>
                     <Text></Text>
                     <Badge style={{ marginRight: 30, marginBottom: 10 }}>Your top blog</Badge>
                  

                </View>               
            </View>


            <View style={styles.box}>
                    <View style={styles.inner}>
                    <Image 
        style={{width: 140, height: 90, margin: 7}}
        source={{ uri:'https://upload.wikimedia.org/wikipedia/en/4/4c/Shiningnovel.jpg'}}/>
                  
                    <Text style={{ fontSize: 25    }}> <Link to='/Classification'> The Shining </Link></Text>
                     <Text></Text>
                    <Chip style={{ marginBottom: -10}} icon="information" onPress={() => console.log('Pressed')}>Next Read</Chip>
                 </View>
            </View>

            <View style={styles.box}>
                    <View style={styles.inner}>
                    <Image 
        style={{ width: 140, height: 90, margin: 7}}
        source={{ uri:'https://resizing.flixster.com/COcQAJOSYv8vbWyLY0vu8qWf1C4=/740x380/v1.bjsxNzU4MDE3O2o7MTg4NzU7MTIwMDsyOTAwOzE0NTA'}}/>
                    <Text style={{ fontSize: 25    }}><Link to='/Classification'> Kiss the Girls </Link></Text>
                    <Button icon="clock" color="#7DF9FF"> 22h 12m </Button>
                </View>
            </View>

        </View>
 
 
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 25,
        marginTop: 15,
        height: '100%',
        width: '100%',      
        backgroundColor: '#E0FFFF', 
    },

    box: {
        width: '50%',
        height: '50%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
 

    },
    inner: {
        flex: 1, 
        backgroundColor: '#949494',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
        


    }
})
   