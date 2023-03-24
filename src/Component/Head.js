import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Head = () => {
    return (
        <View style={{backgroundColor:'#FFF',padding:5}}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text>Income</Text>
                <Text style={{color:'blue'}}>0.00</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text>Expenses</Text>
                <Text style={{color:'red'}}>0.00</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text>Total</Text>
                <Text>0.00</Text>
            </View>
        </View>
        </View>
    )
}

export default Head

const styles = StyleSheet.create({})