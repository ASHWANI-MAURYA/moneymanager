import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Head from '../../Component/InputHead'
const NoteInput = ({ navigation }) => {
  return (
    <View>
      <Head navigation={navigation} />
      <View style={{ marginHorizontal: 20, }}>
        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', padding: 3, borderWidth: 1, borderRadius: 10, width: 100 }}>
          <Text>26.3 (SUN)</Text>
        </TouchableOpacity>
        <View>
          <TextInput style={{fontWeight:'bold',fontSize:18}} placeholder={'Title'} />
        </View>
        <View>
          <TextInput style={{fontWeight:'400',fontSize:18}} placeholder={'Note'} multiline={true}/>
        </View>
      </View>
    </View>
  )
}

export default NoteInput

const styles = StyleSheet.create({})