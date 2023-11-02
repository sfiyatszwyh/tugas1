import { View, Text, StyleSheet } from 'react-native'
import React, {Component} from 'react'
import Input from '../components/Input'

export default class Profile extends Component{
  constructor(props){
    super(props);

    this.state = {
      profil: "Halaman Profile"
    }
  }

  render(){
    return(
      <View style={styles.box}> 
        <Text>{this.state.profil}</Text>
        <Input placeholder={'Ketik Nama Anda'} typeKeyboard={'email'}/>
        <Input placeholder={'Ketik Alamat Anda'} multiline={true}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  box:{
    padding: 10,
  },
});