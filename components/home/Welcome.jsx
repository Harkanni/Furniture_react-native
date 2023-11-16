import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './welcome.styles';
import { COLORS, SIZES } from '../../constants';
import { Feather } from '@expo/vector-icons'
import { TextInput } from 'react-native';

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
          {' '}
          Find The Most
        </Text>
        <Text style={styles.welcomeTxt(COLORS.primary, 0)}>
          {''}
          Luxurious Furniture
        </Text>
      </View>

      <View style={styles.searchContainer}>
         <TouchableOpacity>
            <Feather name='search' size={24} style={styles.searchIcon} />
         </TouchableOpacity>
         <View style={styles.searchWrapper}>
            <TextInput value='' onPressIn={() => {}} placeholder='What are you looking for' />
         </View>
      </View>
    </View>
  );
};

export default Welcome;
