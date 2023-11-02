import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const Input = ({placeholder, multiline, typeKeyboard}) => {
  return (
    <View style={styles.boxInput}>
      <TextInput placeholder={placeholder} multiline={multiline} inputMode={typeKeyboard}/>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    boxInput: {
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 5,
        backgroundColor: 'white',
        borderColor: "gray",
        marginBottom: 5,
    },
});