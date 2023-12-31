import { TouchableOpacity, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'
import styles from './home.styles'
import { Ionicons, Fontisto } from "@expo/vector-icons"
import { Welcome, Heading, Carousel } from '../components/home'
import ProductRow from '../components/products/ProductRow'
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBarWrapper}>
         <View style={styles.appBar}>
            <Ionicons name='location-outline' size={24} />
            <Text style={styles.location}>Shangai China</Text>
            <View style={{ alignItems: 'flex-end'}}>
               <View style={styles.cartCount}>
                  <Text style={styles.cartNumber}>8</Text>
               </View>
               <TouchableOpacity n>
                  <Fontisto name={'shopping-bag'} size={24} />
               </TouchableOpacity>
            </View>
         </View>
      </View>

      <ScrollView>
         <Welcome />
         <Carousel />
         <Heading />
         <ProductRow />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
