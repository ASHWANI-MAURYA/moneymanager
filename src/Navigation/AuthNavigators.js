import React from 'react'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
// import welcomScreen from '../Screens/AuthScreens/SignInWelcomeScreen'
// import signScreen from '../Screens/AuthScreens/SignINScreen'
import HomeScreen from '../Screens/AuthScreens/Trans.js';
import Tab from '../Navigation/Bottom';
const Stack=createNativeStackNavigator();

const AuthNavigators = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="welcomScreen" component={Tab} options={{headerShown:false}} />
        {/* <Stack.Screen name="welcomScreen" component={welcomScreen} options={{headerShown:false}} />
        <Stack.Screen name="signScreen" component={signScreen} options={{headerShown:false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/> */}
      </Stack.Navigator>
  )
}

export default AuthNavigators