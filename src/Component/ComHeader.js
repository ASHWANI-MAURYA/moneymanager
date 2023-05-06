import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const ComHeader = ({ title, name, navigation,Note }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{ flexDirection: 'row', marginVertical: 15, }}>
        <View style={{ marginLeft: 20, marginHorizontal: 5 }}>
          <Icon name={'arrowleft'} size={20} color={'#000'}  />
        </View>
        <View>
          <Text style={styles.headerText}>{Note}</Text>
        </View>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginVertical: 5,marginTop:10 }}>
        <View style={{marginHorizontal:15}}>
        <MaterialCommunityIcons name={'playlist-star'} size={32} color={'#000'} />
        </View>
      </View>

    </View>
  )
}

export default ComHeader

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