import { FlatList, Text, View } from 'react-native';
import React from 'react';
import styles from './productRow.style';
import { COLORS, SIZES } from '../../constants';
import ProductCardView from './ProductCardView';
import useFetch from '../../hooks/useFetch';
import { ActivityIndicator } from 'react-native';

const ProductRow = () => {
  const [data, loading, error] = useFetch();
  const products = [1, 2, 3, 4];
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : (
        <FlatList
          data={data}
          keyExtractor={( item ) => item._id }
          renderItem={({ item }) => <ProductCardView item={item} />}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.xSmall / 8 }}
        />
      )}
    </View>
  );
};

export default ProductRow;
