import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import Music from "../component/Music";
import MusicItem from "../component/MusicItem";

const StackNav = createStackNavigator();

function MainSatck() {
  return (
    <StackNav.Navigator initialRouteName="Home">
      <StackNav.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Micheal-Jackson Music",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "black",
        }}
      />
      <StackNav.Screen name="MusicApp" component={MusicSta} />
    </StackNav.Navigator>
  );
}

function MusicSta() {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name="MusicScreen"
        component={Music}
        options={{
          title: "Micheal-Jackson Music",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "black",
        }}
      />
      <StackNav.Screen name="MusicDetails" component={DetailScreen} />
      <StackNav.Screen name="MusicItem" component={MusicItem} />
    </StackNav.Navigator>
  );
}

function Stack() {
  return (
    <NavigationContainer>
      <MusicSta />
    </NavigationContainer>
  );
}

export default Stack;
