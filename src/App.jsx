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
import Mulai from './screen/Mulai';
import Menu from './screen/Menu';
import Belajar from './screen/Belajar';

const Stack = createNativeStackNavigator();

const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Mulai'
                    options={{ headerShown: false}}
                    component={Mulai}
                />

                <Stack.Screen name='Menu' component={Menu}/>
                <Stack.Screen name='Belajar' component={Belajar}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;