import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";

const StackNav = createStackNavigator();

function Stack() {
  return (
    <NavigationContainer>
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
        <StackNav.Screen name="Details" component={DetailScreen} />
      </StackNav.Navigator>
    </NavigationContainer>
  );
}

export default Stack;
