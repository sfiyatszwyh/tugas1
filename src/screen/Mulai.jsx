import React, {Component} from 'react';
import {Text, StyleSheet, View, Alert, Image} from 'react-native';
import Tombol from '../components/Tombol';
//import MyImageComponent from "../components/MyImageComponent";
//import Card from '../components/Card';


export default class Mulai extends Component{
    render(){
        return(
            <View style={styles.box}>
            
            <Tombol
                label={'Ke Menu'}
                onPress={() => this.props.navigation.navigate('Menu')}
            />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        margin: 20,
        flex: 1,
        padding: 10,
    },
})