import React from "react";
import { SafeAreaView, Text, Button, StyleSheet, Image } from "react-native";

function DetailScreen({ route, navigation, key }) {
  //console.warn(route.params.key.artistId);
  //console.warn(route.params.param);
  const { param } = route.params;
  return (
    <SafeAreaView style={styles.itemInfo}>
      <Image style={styles.imageStyle} source={{ uri: param.artworkUrl100 }} />
      <Text style={styles.name}>Tack Name</Text>
      <Text style={styles.detail}> {param.trackName} </Text>
      <Text style={styles.name}>Artist Name</Text>
      <Text style={styles.detail}> {param.artistName} </Text>
      <Text style={styles.name}>Collection Name</Text>
      <Text style={styles.detail}> {param.primaryGenreName} </Text>
      <Text style={styles.name}>Release Date</Text>
      <Text style={styles.detail}> {param.releaseDate} </Text>

      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  itemInfo: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
  },
  name: {
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  detail: {
    color: "black",
    fontSize: 18,
    marginBottom: 15,
  },
  imageStyle: {
    width: 250,
    height: 250,
    borderRadius: 20,
  },
});
export default DetailScreen;
