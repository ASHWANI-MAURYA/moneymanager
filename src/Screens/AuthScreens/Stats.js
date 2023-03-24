import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Daily from '../Daily'
import Expenses from '../Expenses'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

const Stats = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Daily" component={Daily} />
    <Tab.Screen name="Expenses" component={Expenses} />
  </Tab.Navigator>
  )
}

export default Stats

const styles = StyleSheet.create({})