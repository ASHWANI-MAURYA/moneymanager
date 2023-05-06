import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Head from '../Component/ComHeader'
import { COLORS } from '../Global/Styles'
import Feather from 'react-native-vector-icons/Feather'
const ADD = ({ navigation, }) => {
  const [Type, setType] = useState(1);
  const title = "ADD"

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.8, backgroundColor: '#FFF' }}>
        <Head navigation={navigation} Note={title} />
        <View style={{ marginHorizontal: 20, }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={styles.without}>
              <Text>Income</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.with}>
              <Text style={{ color: COLORS.buttons, }}>Expense</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '30%', borderWidth: 1, borderColor: 'lightgray', padding: 5, alignItems: 'center', borderRadius: 10 }}>
              <Text>Transfer</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <View style={{ width: '10%', }}>
              <Text>Date</Text>
            </View>
            <View style={{ flexDirection: 'row', width: '40%', }}>
              <Text>26/03/23(sun)</Text>
              <Text style={{ marginLeft: 10 }}>12:44</Text>
            </View>
            <TouchableOpacity style={{ width: "20%", alignItems: 'flex-end' }}>
              <View style={{ alignItems: 'center' }}>
                <Feather name={'repeat'} size={13} color={'#000'} />
                <Text style={{ fontSize: 10 }}>Rep/inst.</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '20%', marginTop: 20 }}>
              <Text>Account</Text>
            </View>
            <View style={{ width: '80%' }}>
              <TextInput style={{ borderBottomWidth: 1, borderColor: 'lightgray' }} />
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <View style={{ width: '20%', marginTop: 20 }}>
              <Text>Category</Text>
            </View>
            <View style={{ width: '80%' }}>
              <TextInput style={{ borderBottomWidth: 1, borderColor: 'lightgray' }} />
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <View style={{ width: '20%', marginTop: 20 }}>
              <Text>Amount</Text>
            </View>
            <View style={{ width: '80%' }}>
              <TextInput style={{ borderBottomWidth: 1, borderColor: 'lightgray' }} />
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <View style={{ width: '20%', marginTop: 20 }}>
              <Text>Note</Text>
            </View>
            <View style={{ width: '80%' }}>
              <TextInput style={{ borderBottomWidth: 1, borderColor: 'lightgray' }} />
            </View>
          </View>
        </View>
      </View>
      <View style={{ borderBottomWidth: 1, borderColor: 'lightgray' }}></View>
      <View style={{ borderBottomWidth: 1, borderColor: 'lightgray', marginTop: 10 }}></View>
      <View style={{ flex: 0.8, backgroundColor: '#FFF' }}>
        <View style={{ marginHorizontal: 20 }}>
          <View style={{ borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between', borderColor: 'lightgray' }}>
            <TextInput placeholder='Description' style={{ fontWeight: '500', }} />
            <TouchableOpacity>
              <Feather name={'camera'} size={20} color={'#000'} style={{ marginTop: 20 }} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginHorizontal: 20 ,marginTop:20 ,flexDirection:'row',justifyContent:'space-between',}}>
          <TouchableOpacity style={{borderWidth:1,borderColor:'lightgray',padding:10,borderRadius:10,width:'60%',alignItems:'center',backgroundColor:'#414a4c'}}>
            <Text style={{color:'#FFF'}}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderWidth:1,borderColor:'lightgray',padding:10,borderRadius:10,width:'38%',alignItems:'center'}}>
            <Text>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ADD

const styles = StyleSheet.create({
  without: {
    width: '30%', borderWidth: 1, borderColor: 'lightgray', padding: 5, alignItems: 'center', borderRadius: 10
  },
  with: {
    width: '30%', borderWidth: 1, borderColor: COLORS.buttons, padding: 5, alignItems: 'center', borderRadius: 10
  }
})