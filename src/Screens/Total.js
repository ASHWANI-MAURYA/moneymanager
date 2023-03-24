import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Head from '../Component/Head'
import Icon from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { } from 'react-native'
import { COLORS } from '../Global/Styles'
const Total = () => {
  return (
    <View style={{flex:1}} >
      <View style={{ backgroundColor: '#FFF',flex:1.6 }}>
        <Head />
        <View style={{ borderBottomWidth: 1, borderColor: 'lightgray' }}></View>
        <View style={{ marginHorizontal: 20, flexDirection: 'row', padding: 10, justifyContent: 'space-between', }}>
          <View style={{ flexDirection: 'row', padding: 8 }}>
            <Icon name={'book'} size={18} color={'#000'} />
            <Text style={{ fontWeight: '500', fontSize: 16, marginTop: -3, marginLeft: 5 }}>Budget </Text>
          </View>
          <TouchableOpacity style={{ backgroundColor: 'lightgray', padding: 8, flexDirection: 'row', borderRadius: 10 }}>
            <Text>Budget Setting </Text>
            <Icon name={'right'} size={14} style={{ marginTop: 3 }} color={'#000'} />
          </TouchableOpacity>
        </View>
        <View style={{ borderBottomWidth: 1, borderColor: 'lightgray' }}></View>
      </View>
      <View style={{ marginTop: 15, backgroundColor: '#FFF',flex:8 }}>
        <View style={{ borderBottomWidth: 1, borderColor: 'lightgray' }}></View>
        <View style={{ marginHorizontal: 20, flexDirection: 'row', padding: 10, justifyContent: 'space-between', }}>
          <View style={{ flexDirection: 'row', padding: 8 }}>
            <FontAwesome5 name={'coins'} size={18} color={'#000'} />
            <Text style={{ fontWeight: '500', fontSize: 16, marginTop: -3, marginLeft: 5 }}>Accounts </Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 8 }}>
            <Text>01.02.2023</Text>
            <Text> ~ </Text>
            <Text>01.02.2023</Text>
          </View>
        </View>
        <View style={{ marginHorizontal: 20, }}>
          <View style={{ borderWidth: 1, borderColor: 'lightgray',padding:20,borderRadius:10 }}>
            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Compared Expenses (Last Month) </Text>
                <Text>100%</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:5 }}>
                <Text>Expenses (Cash, Accounts) </Text>
                <Text>₹ 0.00</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:5 }}>
                <Text>Expenses (Card) </Text>
                <Text>₹ 0.00</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:5 }}>
                <Text>Transfer (Cash, Account) </Text>
                <Text>₹ 0.00</Text>
              </View>
            </View>
          </View>
          <View style={{ borderWidth: 1, borderColor: 'lightgray',padding:20,borderRadius:10,marginTop:10 }}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <TouchableOpacity style={{flexDirection:'row'}}>
              <MaterialCommunityIcons name={'microsoft-excel'} size={20} style={{ marginTop: 3 }} color={'green'} />
                <Text style={{marginTop:2,marginLeft:10,fontSize:16}}>Export Data To excel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Total

const styles = StyleSheet.create({})