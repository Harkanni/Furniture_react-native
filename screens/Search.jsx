import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import React from 'react';
import { StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';
import { useNavigation } from '@react-navigation/native';
import styles from './search.styles';

const Search = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons
            name='camera-outline'
            size={SIZES.xLarge}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=''
            onPressIn={() => {}}
            placeholder='What are you looking for'
          />
        </View>
        <View style={{ padding: 4 }}>
          <TouchableOpacity style={styles.searchBtn}>
            <Feather name='search' size={24} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
