import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Daily from '../Daily'
import Calendar from '../Calendar'
import Monthly from '../Monthly.js'
import Total from '../Total.js'
import Note from '../Note.js'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Header from '../../Component/Header'
const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  const TAB_BAR_ITEM_PADDING = 10;

  return (
    <>
    <Header/>
    <Tab.Navigator screenOptions={{
      // tabBarGap: 9,
      tabBarLabelStyle: { fontSize: 9,fontWeight:'bold' },
    }}>
    <Tab.Screen name="Daily" component={Daily} />
    <Tab.Screen name="Calendar" component={Calendar} />
    <Tab.Screen name="Monthly" component={Monthly} />
    <Tab.Screen name="Total" component={Total} />
    <Tab.Screen name="Note" component={Note} />
  </Tab.Navigator>
    </>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({})