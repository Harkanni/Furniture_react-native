import { StyleSheet, StatusBar } from "react-native";
import { COLORS, SIZES } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";



const styles = StyleSheet.create({
   container: {
      marginTop: StatusBar.currentHeight
   }
})
export default styles