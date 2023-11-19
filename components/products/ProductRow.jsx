import { FlatList, Text, View } from 'react-native';
import React from 'react';
import styles from './productRow.style';
import { SIZES } from '../../constants';
import ProductCardView from './ProductCardView';

const ProductRow = () => {
  const products = [1, 2, 3, 4];
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCardView />}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.xSmall/8 }}
      />
    </View>
  );
};

export default ProductRow;
