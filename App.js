import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import DashboardScreen from "./src/navigations/DashboardScreen";
import BasicGameScreen from "./src/navigations/BasicGameScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import themes from "./src/context/ThemeContext/themes";
import { ThemeProvider } from "./src/context/ThemeContext/ThemeContext";

const Stack = createStackNavigator();
export default function App() {
  console.log("log ");
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="Game" component={BasicGameScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    width: 100,
    height: 100
  }
});
