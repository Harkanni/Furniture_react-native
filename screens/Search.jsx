import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Feather, Ionicons } from '@expo/vector-icons'
import { COLORS, SIZES } from "../constants";
import styles from './search.styles'

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
         <TouchableOpacity>
            <Feather name='search' size={24} style={styles.searchIcon} />
         </TouchableOpacity>
         <View style={styles.searchWrapper}>
            <TextInput style={styles.searchInput} value='' onPressIn={() => navigation.navigate('Search')} placeholder='What are you looking for' />
         </View>
         <View style={{padding: 4}}>
            <TouchableOpacity style={styles.searchBtn}>
               <Ionicons name='camera-outline' size={SIZES.xLarge} color={COLORS.offwhite} />
            </TouchableOpacity>
         </View>
      </View>
    </SafeAreaView>
  )
}


export default Search
