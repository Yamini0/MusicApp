import React from "react";
import { SafeAreaView, View, Text, Button, StyleSheet } from "react-native";

function DetailScreen(props, { navigation }) {
  const { item } = props;
  return (
    <SafeAreaView style={styles.itemInfo}>
      <Text style={styles.name}> {props.item.trackName} </Text>
      <Text style={styles.artistname}> {props.item.artistName} </Text>
      <Text style={styles.collname}> {props.item.collectionName} </Text>
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
