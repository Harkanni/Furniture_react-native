import { StyleSheet, StatusBar } from "react-native";
import { COLORS, SIZES } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";



const styles = StyleSheet.create({
   container: {
      marginTop: StatusBar.currentHeight
   },
   searchContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
      marginHorizontal: SIZES.small,
      backgroundColor: COLORS.secondary,
      borderRadius: SIZES.medium,
      marginVertical: SIZES.medium,
      height: 50,
   },
   searchIcon: {
      marginHorizontal: 10,
      color: COLORS.gray,
      marginTop: SIZES.small,
   },
   searchWrapper: {
      flex: 1,
      backgroundColor: COLORS.secondary,
      marginRight: SIZES.small,
      borderRadius: SIZES.small,
   },
   searchInput: {
      fontFamily: 'regular',
      width: '100%',
      height: '100%',
      paddingHorizontal: SIZES.small,
   },
   searchBtn: {
      width: 50,
      height: '100%',
      borderRadius: SIZES.medium,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: COLORS.primary,
   }
})
export default styles