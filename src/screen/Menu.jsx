import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';


export default function App() {
    return (
        <View style={Layout.box}>
            <Text style={{ fontSize: 24, color: 'blue' }}>Mari belajar bersama belajarkuy</Text>
        </View>
    );
}

const Layout = StyleSheet.create({
 box: {
    margin: 20,
    borderWidth: 2,
    padding: 10,
 },
});