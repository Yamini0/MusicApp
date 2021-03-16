import React from "react";
import { SafeAreaView, View, Text, Button, StyleSheet } from "react-native";

function DetailScreen({ navigation }) {
  //const { props } = route.params;
  return (
    <View style={styles.itemInfo}>
      <Text>Hello from detail screen.....</Text>
    </View>
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
/*<Text style={styles.name}>{props.trackname}</Text>
    //   <Text style={styles.artistname}>{props.trackname}</Text>
    //   <Text style={styles.collname}>{props.trackname}</Text>
    </View>*/
