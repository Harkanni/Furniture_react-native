import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upperRow: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: SIZES.xxLarge,
    width: SIZES.width - 44,
    zIndex: 999
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'cover'
  },
  details: {
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    width: SIZES.width,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium
  },
  titleRow: {
    marginHorizontal: 10,
    paddingBottom: SIZES.xSmall,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //  width: SIZES.width,
    top: 20
  },
  ratingRow: {
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.width,
    top: 5
  },
  rating(incrementFontSize) {
    return {
      top: SIZES.large,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginHorizontal: SIZES.small
    };
  },
  ratingText: {
    color: COLORS.gray,
    fontFamily: 'medium'
  },
  title: {
    fontFamily: 'bold',
    fontSize: SIZES.large
  },
  price: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontFamily: 'semibold',
    fontSize: SIZES.large - 2
  },
  priceWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large
  },
  descriptionWrapper: {
    marginTop: SIZES.large + 10,
    marginHorizontal: SIZES.small
  },
  description: {
    fontFamily: 'medium',
    fontSize: SIZES.large
  },
  descText: {
    fontFamily: 'regular',
    fontSize: SIZES.small + 1,
    textAlign: 'justify',
    marginBottom: SIZES.small
    // lineHeight: SIZES.large -2,
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    padding: 5,
    borderRadius: SIZES.large,
    marginHorizontal: 12
  },
  cartRow: {
    paddingBottom: SIZES.xSmall,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.width-20
  },
  cartBtn: {
    width: SIZES.width * 0.7,
    backgroundColor: COLORS.black,
    padding: SIZES.small,
    borderRadius: SIZES.large,
    marginLeft: 12
  },
  cardTitle: {
   fontFamily: 'semibold',
   fontSize: SIZES.medium,
   color: COLORS.lightWhite,
   marginLeft: SIZES.small,
 },
 addToCart: {
   width: 37,
   height: 37,
   borderRadius: 50,
   margin: SIZES.small,
   backgroundColor: COLORS.black,
   alignItems: "center",
   justifyContent: "center"
 }
});
export default styles;
