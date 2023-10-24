import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {Component}  from 'react';
import Tombol from '../components/Tombol';
//import MyImageComponent from '../components/MyImageComponent';
  
// export default function App() {
//     return (
//         <View style={Layout.box}>
//             <Text style={{ fontSize: 24, color: 'blue' }}>Mari belajar bersama belajarkuy</Text>
//             <Tombol
//                 label={'Belajar'}
//                 onPress={() => this.props.navigation.navigate('Belajar')}
//             />
//         </View>
//     );
// }

export default class Mulai extends Component{
    render(){
        return(
            <View style={Layout.box}>
            
            <Text style={{ fontSize: 24, color: 'blue' }}>Mari belajar bersama belajarkuy</Text>
            <Tombol
                label={'Belajar'}
                onPress={() => this.props.navigation.navigate('Belajar')}
            />
            </View>
        );
    }
}

const Layout = StyleSheet.create({
 box: {
    margin: 20,
    borderWidth: 2,
    padding: 10,
 },
});