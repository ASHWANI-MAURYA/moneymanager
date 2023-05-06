import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Head from '../Component/Head'
import TODO from '../Component/Todo'
import TODO2 from '../Component/Todo2.js'
const Expenses = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Text>No data available.</Text>
        <View style={{ borderBottomWidth: 1, borderColor: 'lightgray' }}></View>
      </View>
      <View style={{ flex:0.05,backgroundColor:'#FFF' }}>
        <View style={{ borderBottomWidth: 1, borderColor: 'lightgray', }}></View>
      </View><View style={{ borderBottomWidth: 1, borderColor: 'lightgray', }}></View>
      <View style={{  alignItems: 'center', flex: 1, justifyContent: 'center', }}>
      <Text>No data available.</Text>
      </View>
      <View style={{ marginTop: 'auto', alignItems: 'flex-end', marginVertical: 10, marginHorizontal: 10 }}>
        {/* <View style={{ flexDirection: 'row' }}>
          <View style={{ marginHorizontal: 10 }}>
            <TODO2 />
          </View>
          <View>
            <TODO />
          </View>
        </View> */}
      </View>
    </View>
  )
}

export default Expenses

const styles = StyleSheet.create({})