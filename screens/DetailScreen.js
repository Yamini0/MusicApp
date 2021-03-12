import React from "react";
import { SafeAreaView, View, Text, Button } from "react-native";

function DetailScreen({ navigation }) {
  const { item } = route.params;
  return (
    <View style={styles.itemInfo}>
      <Text style={styles.name}> {item.trackName} </Text>
      <Text style={styles.artistname}> {item.artistName} </Text>
      <Text style={styles.collname}> {item.collectionName} </Text>
    </View>
  );
}
export default DetailScreen;
