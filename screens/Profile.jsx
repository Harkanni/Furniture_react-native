import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   container: {
      marginTop: StatusBar.currentHeight
   }
})
export default Profile
