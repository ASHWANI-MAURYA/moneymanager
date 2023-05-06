import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, parameters } from '../Global/Styles'
import Icon from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

const Accounts = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>
        <View style={{ flexDirection: 'row', marginVertical: 15, }}>
          <View>
            <Text style={styles.headerText}>Accounts</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 5, }}>
          <TouchableOpacity style={{ padding: 5, marginRight: 15, }}>
            <Icon name={'barschart'} size={20} color={'#000'} style={{ marginTop: 3, marginLeft: 5 }} />
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 5, marginRight: 15, }}>
            <Entypo name={'dots-three-vertical'} size={20} color={'#000'} style={{ marginTop: 3, marginLeft: 5 }} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ borderBottomWidth: 1, borderColor: 'lightgray', }}></View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 35, alignItems: 'center' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text>Assets</Text>
          <Text style={{ color: 'blue' }}>0.00</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text>Liabilities</Text>
          <Text style={{ color: 'red' }}>0.00</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text>Assets</Text>
          <Text>0.00</Text>
        </View>
      </View>
      <View style={{ backgroundColor: 'lightgray' }}>
        <View style={{ marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>
          <View>
            <Text>Cash</Text>
          </View>
          <View>
            <Text>₹ 0.00</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={{ marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>
          <View>
            <Text>Cash</Text>
          </View>
          <View>
            <Text>₹ 0.00</Text>
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: 'lightgray' }}>
        <View style={{ marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>
          <View>
            <Text>Accounts</Text>
          </View>
          <View>
            <Text>₹ 0.00</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={{ marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>
          <View>
            <Text>Accounts</Text>
          </View>
          <View>
            <Text>₹ 0.00</Text>
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: 'lightgray' }}>
        <View style={{ marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>
          <View>
            <Text>Card</Text>
          </View>
          <View style={{ alignItems: 'flex-end',}}>
            <Text>Outst.Balance</Text>
            <Text>₹ 0.00</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text>Balance.Payable</Text>
            <Text>₹ 0.00</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={{ marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>
          <View>
            <Text>Card</Text>
          </View>
          <View style={{ alignItems: 'flex-end',marginRight:15}}>
            {/* <Text>Outst.Balance</Text> */}
            <Text>₹ 0.00</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            {/* <Text>Balance.Payable</Text> */}
            <Text>₹ 0.00</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Accounts

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: COLORS.CardBackground,
    justifyContent: 'space-between'
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '400',
    // marginLeft: 30
  }
})