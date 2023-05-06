import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../Global/Styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const Todo1 = ({navigation}) => {
    return (
        <View style={{}}>
            <TouchableOpacity onPress={()=>{navigation.navigate('NoteInput')}}  style={{ backgroundColor: "#FFF", width: 50, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 25,borderWidth:1,borderColor:COLORS.buttons }}>
                <MaterialCommunityIcons name={'expand-all'} size={18} color={COLORS.buttons}/>

            </TouchableOpacity>
        </View>
    )
}

export default Todo1

const styles = StyleSheet.create({})