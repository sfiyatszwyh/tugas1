import React, {Component} from 'react';
import {Text, StyleSheet, View, Alert, Image} from 'react-native';
import Tombol from '../components/Tombol';

export default class Mulai extends Component{
    render(){
        return(
            <View>
                <View style={styles.container}>
                    <Image source={require('../images/3.png')}
                    style={styles.img}/>
                </View>
                <View>
                    <Text style={styles.text}>Halo, ayo Join Bersama Kami di Belajarkuy</Text>
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
    container: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    img:{
        margin: 50,
        width: 300,
        height: 300,
    },
    text:{
        fontSize: 15,
        color: 'black',
        padding: 10,
    },
    box: {
        margin: 20,
        padding: 10,
    },
})