import { StyleSheet } from "react-native";
import  {COLORS, SIZES} from '../../constants'

const styles = StyleSheet.create({
   container: {
      flex: 1,
      width: '100%',
   },
   welcomeTxt: (color, top) => ({
      fontFamily: 'bold',
      fontSize: SIZES.xxLarge - 15,
      marginTop: top,
      color: color,
      marginHorizontal: 12
   }),
   searchContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: COLORS.secondary,
      borderRadius: SIZES.medium,
      marginVertical: SIZES.medium,
   },
   searchIcon: {
      marginHorizontal: 10,
      color: COLORS.gray,
   },
   searchWrapper: {
      flex: 1,
      backgroundColor: COLORS.secondary,
   }
})

export default styles 