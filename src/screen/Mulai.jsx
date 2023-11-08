import React, {Component} from 'react';
import {Text, StyleSheet, View, Alert, Image} from 'react-native';
import Tombol from '../components/Tombol';

export default class Mulai extends Component{
    render(){
        return(
            <View style={styles.latar}>
                <View style={styles.container}>
                    <Image source={require('../images/img1.png')}
                    style={styles.img}/>
                </View>
                <View style={styles.box}>
                    <Tombol
                        label={'Get Started'}
                        onPress={() => this.props.navigation.navigate('Menu')}
                    />
                </View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    latar:{
        backgroundColor: 'white'

    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    img:{
        
        width: 300,
        height: 300,
    },
    box: {
        margin: 20,
        padding: 10,
    },
})