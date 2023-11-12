import { View, Text, TouchableOpacity, StatusBar, TextInput, Image} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
const Belajar = () => {
  return (
    <View style={{padding: 10}}>
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
                <Text style={{color: '#FFFFFF', fontSize: 20, fontWeight: 'bold'}}>
                  Find a course you
                </Text>
                <Text style={{color: '#f4f4f4'}}>want to learn!</Text>
                <Text style={{backgroundColor: 'white', borderRadius: 50, margin: 5, padding: 6, color: 'black', fontWeight: 'bold'}}>check now</Text>
              </View>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
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
          colors={['#ccb5f1', '#ccb5f1']}>
          <TouchableOpacity style={{padding: 20, borderRadius: 10}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{flex: 1, marginLeft: 10, justifyContent: 'center'}}>
                <Text style={{color: '#FFFFFF', fontSize: 20, fontWeight: 'bold'}}>
                  Creative Art Design
                </Text>
                <Text style={{color: '#f4f4f4'}}>Craft a career in the design arts with support from our finest creatives.</Text>
                <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>
                  Completed 70%
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
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
          colors={['#00168e', '#00168e']}>
          <TouchableOpacity style={{padding: 20, borderRadius: 10}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{flex: 1, marginLeft: 10, justifyContent: 'center'}}>
                <Text style={{color: '#FFFFFF', fontSize: 20, fontWeight: 'bold'}}>
                  Quilting Courses
                </Text>
                <Text style={{color: '#f4f4f4'}}>Congratulation! you completed.</Text>
                <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>
                  Completed 100%
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
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
          colors={['#ccb5c0', '#ccb5c0']}>
          <TouchableOpacity style={{padding: 20, borderRadius: 10}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{flex: 1, marginLeft: 10, justifyContent: 'center'}}>
                <Text style={{color: '#FFFFFF', fontSize: 20, fontWeight: 'bold'}}>
                  Powerpoint
                </Text>
                <Text style={{color: '#f4f4f4'}}>Enhance your presentation skills.</Text>
                <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>
                  Completed 70%
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  )
}

export default Belajar