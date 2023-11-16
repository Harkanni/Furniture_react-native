import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

const styles = StyleSheet.create({
   container: {
     flex: 1,
     marginTop: StatusBar.currentHeight
   },
   textStyle: {
     fontFamily: 'semibold',
     fontSize: 20
   },
   appBarWrapper: {
      marginHorizontal: 22,
      marginTop: SIZES.small
   },
   appBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
   },
   location: {
      fontFamily: 'semibold',
      fontSize: SIZES.medium,
      color: COLORS.gray
   },
   cartCount: {
      position: "absolute",
      bottom: 16,
      width: 16,
      height: 16,
      borderRadius: 8,
      backgroundColor: 'green',
      justifyContent: "center",
      alignItems: "center",
      zIndex: 99999
   },
   cartNumber: {
      fontFamily: 'regular',
      fontWeight: "bold",
      fontSize: 10,
      color: 'lightblue',
   }
 });
 

export default styles