import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TODO from '../Component/Todo'
import TODO2 from '../Component/Todo2.js'
const Note = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      {/* <Text>Note</Text> */}
      <View style={{ marginTop: 'auto', alignItems: 'flex-end', marginVertical: 10, marginHorizontal: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ marginHorizontal: 10 }}>
            <TODO2 navigation={navigation} />
          </View>
          {/* <View>
            <TODO />
          </View> */}
        </View>
      </View>
    </View>
  )
}

export default Note

const styles = StyleSheet.create({})