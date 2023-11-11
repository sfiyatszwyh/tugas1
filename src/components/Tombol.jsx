import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Tombol = ({label, onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.boxTombol}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
};

export default Tombol;

const styles = StyleSheet.create({
    text:{
        fontSize: 15,
        color: 'black',
    },
    boxTombol:{
        backgroundColor: 'yellow',
        padding: 10,
        borderRadius: 50,
        alignItems: 'center'
    }
})