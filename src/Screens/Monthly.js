import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Head from '../Component/Head'
import TODO from '../Component/Todo'
const Monthly = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ borderBottomWidth: 1, borderColor: 'lightgray' }}></View>
      <Head />
      <View style={{ borderBottomWidth: 1, borderColor: 'lightgray' }}></View>
      <View style={{ marginTop: 'auto', alignItems: 'flex-end', marginVertical: 10, marginHorizontal: 10 }}>
        <View>
          <View>
            <TODO navigation={navigation}/>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Monthly

const styles = StyleSheet.create({})