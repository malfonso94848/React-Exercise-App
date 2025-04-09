import { useCallback, useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import { Button } from "@rneui/themed";

let currentTimer = 0;
export default function DurationExercise({ route, navigation }) {
  let { name, suggestedExercise, styles } = route.params;
  let [running, setRunning] = useState(false);
  let [timer, setTimer] = useState(0);
  let updateTimer = useCallback(() => {
    if (running) {
      setTimer((timer) => timer + 10);
    }
  }, [running]);
  useEffect(() => {
    currentTimer = setInterval(updateTimer, 10);
    return () => clearInterval(currentTimer);
  }, [running, updateTimer]);
  let startStop = useCallback(() => {
    setRunning(!running);
    clearInterval(currentTimer);
  }, [running]);

  let mins = Math.floor((timer / (1000 * 60)) % 60)
    .toString()
    .padStart(2, "0");
  let secs = Math.floor((timer / 1000) % 60)
    .toString()
    .padStart(2, "0");
  let mills = (timer % 1000).toString().padStart(3, "0");

  return (
    <SafeAreaView style={styles.container}>
      <div styles={{ width: "100vw", textAllign: "center" }}>
        <h4>{name}</h4>
        <p styles={{ margin: "auto", fontFamily: "monospace" }}>
          Timer: {mins}:{secs}:{mills}
        </p>
        <button onClick={startStop}>{running ? "Pause" : "Start"}</button>
        <button
          onClick={() => {
            setTimer(0);
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
                  navigation.navigate("Duration Exercise", {
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
