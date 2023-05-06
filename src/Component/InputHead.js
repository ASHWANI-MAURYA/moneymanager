import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { COLORS, parameters } from '../Global/Styles'
import Icon from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const Header = ({ title, name, navigation }) => {
  return (
    <View style={styles.header}>
      <View style={{ flexDirection: 'row', marginVertical: 15, }}>
        <View style={{ marginLeft: 20, marginHorizontal: 5 }}>
          <Icon name={'arrowleft'} size={18} color={'#000'} onPress={()=>{navigation.goBack()}} />
        </View>
        <View>
          <Text style={styles.headerText}>Note</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginVertical: 5,marginTop:10 }}>
        <View style={{marginHorizontal:15}}>
          <FontAwesome5 name={'palette'} size={18} color={'#000'} />
        </View>
        <View style={{ marginHorizontal: 15,}}>
          <Entypo name={'pin'} size={18} color={'#000'} />
        </View>
      </View>

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    // backgroundColor: COLORS.CardBackground,
    justifyContent: 'space-between'
  },
  headerText: {
    color:'#000',
    fontSize: 14,
    // fontWeight: 'bold',
    // marginLeft: 30
  }
})