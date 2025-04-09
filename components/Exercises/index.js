import React from "react";
import { useState } from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import { Button } from "@rneui/themed";

export default function Exercises({ route, navigation }) {
  let { name, exercises, styles } = route.params;

  let renderItem = ({ item }) => {
    let randomIndex = Math.floor(
      Math.random() * item.suggestedExercises.length
    );

    return (
      <Button
        testID={item.title}
        style={styles.button}
        onPress={() =>
          navigation.navigate(name, {
            name: item.title,
            suggestedExercise: item.suggestedExercises[randomIndex],
            styles: styles,
          })
        }
      >
        {item.title}
      </Button>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
        }}
      >
        <Text></Text>
        <FlatList renderItem={renderItem} data={exercises} />
      </div>
    </SafeAreaView>
  );
}
