import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { colors } from "./constants/colors";
import Navigator from "./src/navigation";
import { NavigationContainer } from "@react-navigation/native";

const theme = true;
let color;
if (theme) {
  color = colors.light;
} else {
  color = colors.dark;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />

      <StatusBar style={theme ? "dark" : "light"} translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
