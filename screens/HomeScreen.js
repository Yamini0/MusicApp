import React from "react";
import { SafeAreaView, StyleSheet, Button } from "react-native";

//import MusicItem from "../component/MusicItem";
import Music from "../component/Music";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Music />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
});
export default HomeScreen;
