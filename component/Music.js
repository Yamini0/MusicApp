import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  Alert,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  Button,
} from "react-native";
import { MusicData } from "../apis/MusicData";
import MusicItem from "./MusicItem";
const Music = ({ props, navigation }) => {
  const [music, setMusic] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getMusicFromAPI();
  }, []);
  const getMusicFromAPI = async () => {
    try {
      const response = await MusicData.get("search?term=Michael+jackson");
      return setMusic(response.data), setLoading(false);
    } catch (error) {
      console.warn(error);
      Alert.alert("Error", "Invalid Search:" + error);
    }
  };

  // function nav() {
  //   return props.navigation.navigate("MusicDetails");
  // }

  const functiontoNavigate = () => {
    return navigation.navigate("MusicDetails");
  };
  // const navigateToDetailScreen = useCallback(() => {
  //   props.navigation.navigate("MusicDetails", { item });
  // }, [item]);

  const render = useMemo(
    () => ({ item }) => {
      return (
        <MusicItem item={item} functiontoNavigate={functiontoNavigate()} />
      );
    },
    []
  );
  const keyExtractor = (item, index) => index.toString();
  return loading ? (
    <SafeAreaView>
      <ActivityIndicator
        size="large"
        justifyCotent="center"
        alignItem="center"
        loading={loading}
        color="black"
      />
    </SafeAreaView>
  ) : (
    <SafeAreaView>
      {/* <Button
        title="click"
        onPress={() => navigation.navigate("MusicDetails")}
      /> */}
      <FlatList
        data={music.results}
        keyExtractor={keyExtractor}
        renderItem={render}
        refreshing={loading}
        onRefresh={getMusicFromAPI}
      />
    </SafeAreaView>
  );
};
export default Music;
