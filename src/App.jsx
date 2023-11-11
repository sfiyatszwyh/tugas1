import {View, Text} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Mulai from './screen/Mulai';
import Menu from './screen/Menu';
import Belajar from './screen/Belajar';
import Profile from './screen/Profile';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen 
            name='Menu' 
            options={{ 
                headerShown: false, tabBarIcon:({color, size}) => (<MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }} 
            component={Menu}/>
             <Tab.Screen 
            name='Belajar' 
            options={{ 
                headerShown: false, 
                tabBarLabel: 'Belajar',
                tabBarIcon:({color, size}) => (<MaterialCommunityIcons name="book" color={color} size={size} />
                ),
            }} 
            component={Belajar}/>
            <Tab.Screen name='Profile' 
            options={{
                headerShown: false,
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
                    name='Mulai'
                    options={{ headerShown: false}}
                    component={Mulai}
                />
                <Stack.Screen name='Menu'  options={{ headerShown: false}} component={Tabs}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;