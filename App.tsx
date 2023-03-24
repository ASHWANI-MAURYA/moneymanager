import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
import { COLORS } from './src/Global/Styles'
// import SignINScreen from './src/Screens/AuthScreens/SignINScreen'
import Root from './src/Navigation/Rootnavigation'
const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
      barStyle='light-content'
      backgroundColor={COLORS.StatusBar}/>
   <Root/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})