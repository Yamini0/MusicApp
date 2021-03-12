import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
//import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";

const SharedStack = createStackNavigator();
function Stack() {
  return (
    <NavigationContainer>
      <SharedStack.Navigator initialRouteName="Home">
        <SharedStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "My home",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTintColor: "#black",
            headerTitleStyle: {},
          }}
        />
        <SharedStack.Screen
          name="Details"
          component={DetailScreen}
          options={(navigation) => ({
            headerBackTitleVisible: false,
            cardStyleInterpolator: ({ current: { progress } }) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          })}
          sharedElementsConfig={(route) => {
            const { item } = route.params;
            return [
              {
                id: `item.${item.id}.artworkUrl100`,
                animation: "move",
                resize: "clip",
                align: "center-top",
              },
              {
                id: `item.${item.id}.trackName`,
                animation: "fade",
                resize: "clip",
                align: "left-center",
              },

              {
                id: `item.${item.id}.artistName`,
                animation: "move",
                resize: "clip",
                align: "left-center",
              },
              {
                id: `item.${item.id}.primaryGenreName`,
                animation: "fade",
                resize: "clip",
                align: "left-center",
              },
            ];
          }}
        />
      </SharedStack.Navigator>
    </NavigationContainer>
  );
}

export default Stack;
