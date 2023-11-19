import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import styles from './productDetails.style';
import { COLORS } from '../constants';

const ProductsDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='chevron-back-circle' size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name='heart' size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: 'https://raw.githubusercontent.com/Harkanni/Furniture-images/main/fn4.jpg' }}
        style={styles.image}
      />
      
      <View style={styles.details}>
         <View style={styles.titleRow}>
            <Text>helloweor</Text>
         </View>
      </View>
    </View>
  );
};

export default ProductsDetails;
