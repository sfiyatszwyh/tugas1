import { View, Text, TouchableOpacity, StatusBar, TextInput, Image} from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

const Menu = () => {
  return (
    <View style={{padding: 10}}>
      <View >
      <StatusBar barStyle="dark-content" backgroundColor={'#f4f4f4'} />
      <Text style={{color: '#212121'}}>Hello</Text>
      <Text style={{fontSize: 22, fontWeight: 'bold', color: '#212121'}}>
        sfiyatszwyh
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          placeholder="search"
          style={{
            backgroundColor: '#FFFFFF',
            elevation: 3,
            marginTop: 20,
            paddingLeft: 10,
            borderRadius: 5,
            flex: 1,
          }}
        /> 
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#0082F7',
            marginTop: 20,
            paddingHorizontal: 20,
            borderRadius: 5,
            marginLeft: 10,
            elevation: 3,
          }}>
          <MaterialCommunityIcons name="magnify" color={'white'} size={25} />
        </TouchableOpacity>
      </View>
    </View>
    <View>
    <View style={{flexDirection: 'row', marginTop: 20}}>
      <Text style={{color: '#0082F7', fontWeight: 'bold'}}>
        Courses
      </Text>
      <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'flex-end', flex: 1}}>
        <Text style={{color: '#FDB436', fontWeight: 'bold'}}>
          View all
        </Text>
      </TouchableOpacity>
    </View>
    <View>
      <View
        style={{
          borderRadius: 10,
          backgroundColor: '#FFFFFF',
          elevation: 10,
          marginTop: 10,
        }}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{borderRadius: 10}}
          colors={['#ccb639', '#ccb639']}>
          <TouchableOpacity style={{padding: 20, borderRadius: 10}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{flex: 1, marginLeft: 10, justifyContent: 'center'}}>
                <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>
                  Digital Desain Thinking
                </Text>
                <Text style={{color: '#f4f4f4'}}>Create by Courson Agency</Text>
              </View>
            </View>

            <View style={{marginTop: 20}}>
              <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="clock-time-five" color={'white'} size={25} />
                <View
                  style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{color: '#FFFFFF', marginLeft: 10}}>
                    40 min
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="file-document" color={'white'} size={25} />
                <View
                  style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{color: '#FFFFFF', marginLeft: 10}}>
                    17 files
                  </Text>
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <MaterialCommunityIcons name="chevron-right" color={'white'} size={35} />
              </View>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  </View>
    
</View>
    
  )
}

export default Menu