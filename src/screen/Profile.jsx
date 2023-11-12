import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'

const Profile = () => {
  return (
    <View>
          <View style={styles.container}>
              <Image source={require('../images/pp.png')}style={styles.img}/>
              <Text style={styles.text}>sfiyatszwyh</Text>
              <Text style={styles.id}>Id 2021</Text>
          </View>
          <View style={styles.item}>
          <MaterialCommunityIcons name="account" color={'black'} size={26} />
              <Text style={styles.textItem}>My Profile</Text>
              <Image source={require('../images/back.png')}style={styles.imgItem}/>
          </View>
          <View style={styles.item}>
          <MaterialCommunityIcons name="map-marker" color={'black'} size={26} />
              <Text style={styles.textItem}>Addres</Text>
              <Image source={require('../images/back.png')}style={styles.imgItem1}/>
          </View>
          <View style={styles.item}>
              <MaterialCommunityIcons name="bell" color={'black'} size={26} /> 
              <Text style={styles.textItem}>Notification</Text>
              <Image source={require('../images/back.png')}style={styles.imgItem2}/>
          </View>
          <View style={styles.item}>
              <MaterialCommunityIcons name="cog" color={'black'} size={26} />
              <Text style={styles.textItem}>Setting</Text>
              <Image source={require('../images/back.png')}style={styles.imgItem3}/>
          </View>
          <View style={styles.item}>
              <MaterialCommunityIcons name="logout" color={'black'} size={26} />
              <Text style={styles.textItem}>Logout</Text>
              <Image source={require('../images/back.png')}style={styles.imgItem3}/>
          </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img:{
    width: 130,
    height: 130,
    marginLeft: 100,
    marginRight: 100,
    objectFit: 'cover',
    overflow: 'hidden',
  },
  text:{
    fontSize: 22,
    lineHeight: 50,
    fontStyle: 'normal',
    color: 'orange',
  },
  id:{
    fontSize: 14,
    lineHeight: 26,
    fontStyle: 'normal',
    color: 'gray',
    marginTop: -15,
  },
  item:{
    flexDirection: 'row',
    padding: 15
  },

  imgItem: {
    width: 22,
    height: 22,
    left: 150,
  },
  imgItem1: {
    width: 23,
    height: 23,
    left: 172,
  },
  imgItem2: {
    width: 22,
    height: 22,
    left: 140,
  },
  imgItem3: {
    width: 22,
    height: 22,
    left: 170,
  },


  textItem: {
    fontStyle: 'normal',
    padding: 8,
    lineHeight: 16,
    fontSize: 15
},
});