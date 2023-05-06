import React from 'react'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
// import welcomScreen from '../Screens/AuthScreens/SignInWelcomeScreen'
// import signScreen from '../Screens/AuthScreens/SignINScreen'
import Note from '../Screens/AuthScreens/NoteInput';
import Tab from '../Navigation/Bottom';
import ADD from '../Navigation/../Screens/Add';
const Stack=createNativeStackNavigator();

const AuthNavigators = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="welcomScreen" component={Tab} options={{headerShown:false}} />
        <Stack.Screen name="NoteInput" component={Note} options={{headerShown:false}} />
        <Stack.Screen name="ADD" component={ADD} options={{headerShown:false}} />
        {/* <Stack.Screen name="signScreen" component={signScreen} options={{headerShown:false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/> */}
      </Stack.Navigator>
  )
}

export default AuthNavigators