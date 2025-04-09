import React from "react";
import { useState } from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import { Button } from "@rneui/themed";

export default function RepetitionExercise({ route, navigation }) {
  let { name, suggestedExercise, styles } = route.params;
  let [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <div>
        <h4>{name}</h4>
        <br />
        Reps: {count}
        <br />
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Increment
        </button>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
        <br />
        <br />
        <br />
        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
          }}
        >
          {suggestedExercise && (
            <>
              <Text>Finished? Try this next!</Text>
              <Button
                testID={suggestedExercise}
                style={styles.button}
                onPress={() =>
                  navigation.navigate("Repetition Exercise", {
                    name: suggestedExercise,
                    styles: styles,
                  })
                }
              >
                {suggestedExercise}
              </Button>
            </>
          )}
          <Button
            title="Go to Home"
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
          />
          <Button
            title="Go back"
            style={styles.button}
            onPress={() => navigation.goBack()}
          />
        </div>
      </div>
    </SafeAreaView>
  );
}
