import React from "react";
import { SafeAreaView, View, Text, Button, StyleSheet } from "react-native";

function DetailScreen() {
  //const { item, navigation } = route.params;
  return (
    <SafeAreaView style={styles.itemInfo}>
      <Text>hellooo from detail screen</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  itemInfo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
  },
  name: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  artistname: {
    color: "#696969",
    fontSize: 18,
  },
  collname: {
    fontSize: 16,
    color: "blue",
  },
});
export default DetailScreen;
