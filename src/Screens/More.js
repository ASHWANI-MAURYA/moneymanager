import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const More = () => {
  return (
    <View>
      <View style={{ marginHorizontal: 15, marginVertical: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text>Settings</Text>
          </View>
          <View>
            <Text>4.7.4 AD</Text>
          </View>
        </View>
      </View>
      <View style={{ marginHorizontal: 0, marginVertical: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={{ alignItems: 'center', width: '33%' }}>
            <AntDesign name={'setting'} size={32} color={'#000'} />
            <Text>Configuration</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center', width: '33%' }}>
            <FontAwesome5 name={'coins'} size={32} color={'#000'} />
            <Text>Accounts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center', width: '33%' }}>
            <FontAwesome name={'unlock'} size={32} color={'#000'} />
            <Text>PassCode</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginHorizontal: 0, marginVertical: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={{ alignItems: 'center', width: '33%' }}>
            <MaterialCommunityIcons name={'palette'} size={32} color={'#000'} />
            <Text>Style</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center', width: '33%' }}>
            <MaterialIcons name={'computer'} size={32} color={'#000'} />
            <Text>PC Manager</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center', width: '33%' }}>
            <MaterialCommunityIcons name={'lock-reset'} size={32} color={'#000'} />
            <Text>Backup</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginHorizontal: 0, marginVertical: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={{ alignItems: 'center', width: '33%' }}>
            <MaterialIcons name={'feedback'} size={32} color={'#000'} />
            <Text>Feedback</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center', width: '33%' }}>
            <MaterialIcons name={'help'} size={32} color={'#000'} />
            <Text>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center', width: '33%' }}>
            <AntDesign name={'like1'} size={32} color={'#000'} />
            <Text>Recommend</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default More

const styles = StyleSheet.create({})