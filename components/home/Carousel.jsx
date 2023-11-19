import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import styles from './carousel.styles';
import { SliderBox } from 'react-native-image-slider-box';
import { COLORS } from '../../constants';
import { fn1, fn2, fn3, fn4, fn5 } from '../../assets/images';

const Carousel = () => {
  const slides = [
    // "https://raw.githubusercontent.com/Harkanni/Furniture-images/main/fn1.jpg",
    // "https://raw.githubusercontent.com/Harkanni/Furniture-images/main/fn2.jpg",
    // "https://raw.githubusercontent.com/Harkanni/Furniture-images/main/fn3.jpg",
    // "https://raw.githubusercontent.com/Harkanni/Furniture-images/main/fn4.jpg",
    // "https://raw.githubusercontent.com/Harkanni/Furniture-images/main/fn5.jpg",
    fn1,
    fn2,
    fn3,
    fn4,
    fn5
  ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{ borderRadius: 15, width: '93%', marginTop: 15 }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;
