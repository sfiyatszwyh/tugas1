import {View, Text, StyleSheet} from 'react-native';
import React, {Component} from 'react';

export default class Card extends Component{
    render(){
        return(
            <View style={styles.box}>
            <Text >component</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    box: {
       margin: 20,
       borderWidth: 1,
       padding: 10,
    },
   });