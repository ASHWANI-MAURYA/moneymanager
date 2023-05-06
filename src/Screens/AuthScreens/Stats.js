import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Income from '../Income'
import Expenses from '../Expenses'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Headerwithselection from '../../Component/headerwithselection'
const Tab = createMaterialTopTabNavigator();

const Stats = () => {
  return (
    <>
      <Headerwithselection />
      <Tab.Navigator>

        <Tab.Screen name="Income" component={Income} />
        <Tab.Screen name="Expenses" component={Expenses} />
      </Tab.Navigator>
    </>

  )
}

export default Stats

const styles = StyleSheet.create({})