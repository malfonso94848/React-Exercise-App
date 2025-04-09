import { useState } from "react";

export default function WeightExercise(props) {
  let { name } = props;
  let [count, setCount] = useState(0);
  let [record, setRecord] = useState(0);

  const saveRecord = () => {
    if (record < count) {
      setRecord(count);
    }
  };

  return (
    <>
      <div>
        <h4>{name}</h4>
        <br />
        Current Weight: {count} lbs
        <br />
        Personal Record: {record} lbs
        <br />
        <button onClick={() => setCount((prevCount) => prevCount + 5)}>
          Add 5 lbs
        </button>
        <button onClick={() => setCount((prevCount) => prevCount + 10)}>
          Add 10 lbs
        </button>
        <button onClick={() => setCount((prevCount) => prevCount + 20)}>
          Add 20 lbs
        </button>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
        <br/>
        <button onClick={saveRecord}>Record Personal Best</button>
        <button onClick={() => setRecord(0)}>Reset Personal Record</button>
      </div>
    </>
  );
}
