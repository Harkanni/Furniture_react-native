import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Search</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   container: {
      marginTop: StatusBar.currentHeight
   }
})
export default Search
