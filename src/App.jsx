// import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import React from 'react';
// import Card from './components/Card';

// export default function App() {
//     return (
//         <View style={Layout.box}>
//             <Text style={{ fontSize: 24, color: 'blue' }}>Login</Text>
//             <Card/>
//             <Card/>
//         </View>
//     );
// }

// const Layout = StyleSheet.create({
//  box: {
//     margin: 20,
//     borderWidth: 2,
//     padding: 10,
//  },
// });

// //export default App;

import {View, Text} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Mulai from './screen/Mulai';
import Menu from './screen/Menu';
import Belajar from './screen/Belajar';
import Profile from './screen/Profile'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen 
            name='Mulai' 
            options={{ 
                headerShown: false, tabBarIcon:({color, size}) => (<MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }} 
            component={Mulai}/>
            <Tab.Screen name='Profile' 
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
              }}
            component={Profile}/>
        </Tab.Navigator>
    );
};

const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Main'
                    options={{ headerShown: false}}
                    component={Tabs}
                />

                <Stack.Screen name='Menu' component={Menu}/>
                <Stack.Screen name='Belajar' component={Belajar}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;