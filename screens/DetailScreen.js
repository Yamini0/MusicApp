import React from "react";
import { SafeAreaView, View, Text, Button, StyleSheet } from "react-native";

function DetailScreen({ route, navigation, item }) {
  //console.warn(route);
  const { param } = route.params;
  return (
    <View style={styles.itemInfo}>
      <Text style={styles.name}>Artist Name</Text>
      <Text style={styles.detail}> {param.item.artistName}</Text>
      <Text style={styles.name}>Collection Name</Text>
      <Text style={styles.detail}>{param.item.trackName}</Text>
      <Text style={styles.name}>Tack Name</Text>
      <Text style={styles.detail}>{param.item.trackName}</Text>
      <Text style={styles.name}>Release Date</Text>
      <Text style={styles.detail}>{param.item.trackName}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
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
    color: "#696969",
    fontSize: 18,
    marginBottom: 15,
  },
});
export default DetailScreen;
/*<Text style={styles.name}>{props.trackname}</Text>
    //   <Text style={styles.artistname}>{props.trackname}</Text>
    //   <Text style={styles.collname}>{props.trackname}</Text>
    </View>*/
