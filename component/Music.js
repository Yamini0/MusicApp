import React, { useState, useEffect, useMemo } from "react";
import {
  Alert,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

import { MusicData } from "../apis/MusicData";
import MusicItem from "./MusicItem";

const Music = ({ navigation }) => {
  const [music, setMusic] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMusicFromAPI();
  }, []);

  const getMusicFromAPI = async () => {
    try {
      const response = await MusicData.get("search?term=Michael+jackson");
      return setMusic(response.data), setLoading(false);
    } catch (error) {
      console.warn(error);
      //Alert.alert("Error", "Invalid Search:" + error);
    }
  };
  {
    /*
  if (loading) {
    return (
      <SafeAreaView>
        <ActivityIndicator
          size="large"
          justifyCotent="center"
          alignItem="center"
          loading={loading}
          color="black"
        />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView>
        <FlatList
          data={music.results}
          keyExtractor={keyExtractor}
          renderItem={render}
          refreshing={loading}
          onRefresh={getMusicFromAPI}
        />
      </SafeAreaView>
    );
  }
*/
  }

  const render = useMemo(
    () => ({ item }) => {
      return <MusicItem item={item} />;
    },
    []
  );

  const keyExtractor = (item, index) => index.toString();

  return (
    <SafeAreaView>
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
