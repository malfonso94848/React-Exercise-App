import React from "react";
import DurationExercise from "./components/DurationExercise";
import RepetitionExercise from "./components/RepetitionExercise";
import Home from "./components/Home";
import Exercises from "./components/Exercises";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Exercises" component={Exercises}></Stack.Screen>
        <Stack.Screen
          name="Repetition Exercise"
          component={RepetitionExercise}
        ></Stack.Screen>
        <Stack.Screen
          name="Duration Exercise"
          component={DurationExercise}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
