import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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

const Menu = () => {
  return (
    <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
                  name='Main'
                  options={{ headerShown: false}}
                  component={Tabs}
              />
          </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Menu