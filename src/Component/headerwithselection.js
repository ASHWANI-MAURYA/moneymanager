import React from 'react'
import { StyleSheet, Text, View, Dimensions,TouchableOpacity } from 'react-native'
import { COLORS, parameters } from '../Global/Styles'
import Icon from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
const headerwithselection = ({ title, name, navigation }) => {
  return (
    <View style={styles.header}>
      <View style={{ flexDirection: 'row', marginVertical: 15, }}>
        <View style={{ marginLeft: 20, marginHorizontal: 5 }}>
          <Icon name={'left'} size={18} color={'#000'} />
        </View>
        <View>
          <Text style={styles.headerText}>Feb 2022</Text>
        </View>
        <View style={{ marginHorizontal: 5 }}>
          <Icon name={'right'} size={18} color={'#000'} />
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginVertical: 5, }}>
        {/* <View style={{marginHorizontal: 15 }}>
          <MaterialCommunityIcons name={'playlist-star'} size={32} color={'#000'} />
        </View>
        <View style={{marginHorizontal:15}}>
          <Ionicons name={'md-search-outline'} size={28} color={'#000'} />
        </View>
        <View style={{ marginHorizontal: 15,marginTop:5 }}>
          <SimpleLineIcons name={'equalizer'} size={18} color={'#000'} />
        </View> */}
    <View>
    <TouchableOpacity style={{padding:5,borderRadius:10,borderWidth:1,marginRight:15,borderColor:'lightgray'}}>
      <View style={{flexDirection:'row'}}>
      <Text style={{fontSize:14,fontWeight:'500'}}>Monthly</Text>
      <Icon name={'down'} size={14} color={'#000'} style={{marginTop:3,marginLeft:5}} />
      </View>
    </TouchableOpacity>
    </View>
      </View>

    </View>
  )
}

export default headerwithselection

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: COLORS.CardBackground,
    justifyContent: 'space-between'
  },
  headerText: {
    color:'#000',
    fontSize: 14,
    // fontWeight: 'bold',
    // marginLeft: 30
  }
})