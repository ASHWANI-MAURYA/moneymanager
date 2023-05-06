import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../Global/Styles'

const Todo = ({navigation}) => {
    return (
        <View style={{}}>
            <TouchableOpacity style={{ backgroundColor: COLORS.buttons,width:50,height:50,justifyContent:'center',alignItems:'center',borderRadius:25}} onPress={()=>{navigation.navigate('ADD')}}>
                <Text style={{fontSize:25,color:'#FFF'}}>+</Text>

            </TouchableOpacity>
        </View>
    )
}

export default Todo

const styles = StyleSheet.create({})