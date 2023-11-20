import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import React, { useState } from 'react';
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons, Fontisto
} from '@expo/vector-icons';
import styles from './productDetails.style';
import { COLORS, SIZES } from '../constants';

const ProductsDetails = ({ navigation }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    count > 0 && setCount(count - 1);
  };

  return (
    <ScrollView>
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
          source={{
            uri: 'https://raw.githubusercontent.com/Harkanni/Furniture-images/main/fn4.jpg'
          }}
          style={styles.image}
        />

        <View style={styles.details}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>Product</Text>
            <View style={styles.priceWrapper}>
              <Text style={styles.price}>$660.88</Text>
            </View>
          </View>

          <View style={styles.ratingRow}>
            <View style={styles.rating()}>
              {[1, 2, 3, 4, 5].map((index) => (
                <Ionicons key={index} name='star' size={20} color={'gold'} />
              ))}
              <Text> (4.9)</Text>
            </View>

            <View style={styles.rating(2)}>
              <TouchableOpacity onPress={() => increment()}>
                <SimpleLineIcons name='plus' size={24} />
              </TouchableOpacity>

              <Text style={{ fontSize: 15 }}> {count} </Text>

              <TouchableOpacity onPress={() => decrement()}>
                <SimpleLineIcons name='minus' size={24} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.descText}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              esse itaque molestias ut natus excepturi qui id possimus sequi
              maxime hic magni aspernatur corporis nemo ratione aut, velit
              quibusdam odit obcaecati laboriosam fugiat sit! Tenetur, fugit
              autem laboriosam et dicta aliquam possimus minima quaerat, odit
              dolorum perspiciatis at neque, dolorem accusamus officia? Magni,
              natus error. Harum consectetur ullam tenetur?
            </Text>
          </View>

          <View style={{ marginBottom: SIZES.small }}>
            <View style={styles.location}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name='location-outline' size={20} />
                <Text> Dallas</Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons
                  name='truck-delivery-outline'
                  size={20}
                />
                <Text>  Free Delivery</Text>
              </View>
            </View>
          </View>

          <View style={styles.cartRow}>
            <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
               <Text style={styles.cardTitle}>Buy Now</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}} style={styles.addToCart}>
               <Fontisto name='shopping-bag' size={22} color={COLORS.lightWhite} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductsDetails;
