import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const MyImageComponent = () => {
    return (
      <View style={styles.container}>
        <Image
          source={require('./images/icon.JPG')} 
          style={styles.image}
        />
      </View>
    );
  };

  //export default MyImageComponent;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 200,
      height: 200,
    },
  });
  