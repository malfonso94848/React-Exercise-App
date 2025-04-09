import React from "react";
import { FlatList, StyleSheet, SafeAreaView } from "react-native";
import { Button } from "@rneui/themed";

const Home = ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      padding: "5px",
      margin: "5px",
    },
  });

  const excerciseData = [
    {
      name: "Repetition Exercise",
      exercises: [
        {
          title: "Push Ups",
          id: 1,
          suggestedExercises: ["Jumping Jacks", "Sit Ups"],
        },
        {
          title: "Jumping Jacks",
          id: 2,
          suggestedExercises: ["Push Ups", "Sit Ups"],
        },
        {
          title: "Sit Ups",
          id: 3,
          suggestedExercises: ["Push Ups", "Jumping Jacks"],
        },
      ],
    },
    {
      name: "Duration Exercise",
      exercises: [
        {
          title: "Running",
          id: 1,
          suggestedExercises: ["Bicycling", "Planking"],
        },
        {
          title: "Bicycling",
          id: 2,
          suggestedExercises: ["Running", "Planking"],
        },
        {
          title: "Planking",
          id: 3,
          suggestedExercises: ["Running", "Bicycling"],
        },
      ],
    },
  ];

  let renderItem = ({ item }) => {
    return (
      <Button
        testID={item.name}
        style={styles.button}
        onPress={() =>
          navigation.navigate("Exercises", {
            name: item.name,
            exercises: item.exercises,
            suggestedExercises: item.exercises.suggestedExercises,
            styles: styles,
          })
        }
      >
        {item.name}
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
        <FlatList renderItem={renderItem} data={excerciseData} />
      </div>
    </SafeAreaView>
  );
};

export default Home;
