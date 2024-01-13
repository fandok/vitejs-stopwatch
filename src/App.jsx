import { useEffect, useState } from "react";
import styles from "./App.module.css";

const App = () => {
  const [start, setStart] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [tens, setTens] = useState(0);

  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        if (tens + 1 > 99) {
          setTens(0);
          setSeconds(seconds + 1);
        } else {
          setTens(tens + 1);
        }
      }, 10);

      return () => clearInterval(interval);
    }
  }, [seconds, start, tens]);

  const handleStart = () => {
    setStart(true);
  };

  const handleStop = () => {
    setStart(false);
  };

  const handleReset = () => {
    setTens(0);
    setSeconds(0);
  };

  const getTwoDigits = (number) => {
    return number.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  };

  return (
    <div className={`${styles.wrapper} container`}>
      <h1>Stopwatch</h1>
      <h2>Vanilla JavaScript Stopwatch</h2>
      <p>
        <span>{getTwoDigits(seconds)}</span>:<span>{getTwoDigits(tens)}</span>
      </p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default App;
