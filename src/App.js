import { useState, useEffect, useRef } from "react";

import ButtonComponent from "./ButtonComponent";
import "./styles.css";
/**
 https://www.youtube.com/watch?v=sSWGdj8a5Fs
 https://www.code-boost.com/video/how-to-build-a-react-stopwatch-timer/
 */
export default function App() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const interval = useRef(null);

  useEffect(() => {
    if (timerOn) {
      interval.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 10); //10/1000 : every 1/100th of a second
    } else {
      clearInterval(interval.current);
    }
    return () => clearInterval(interval.current);
  }, [timerOn]);

  return (
    <div className="App">
      <h1>
        {/* {minutes}: {seconds}: {milliseconds} */}
        <span>{(time / 10) % 100}</span>
      </h1>
      {!timerOn && time === 0 && (
        <ButtonComponent text={"Start"} onclick={() => setTimerOn(true)} />
      )}
      {timerOn && (
        <ButtonComponent text={"Stop"} onclick={() => setTimerOn(false)} />
      )}
      {time > 0 && !timerOn && (
        <ButtonComponent text={"Reset"} onclick={() => setTime(0)} />
      )}
      {!timerOn && time > 0 && (
        <ButtonComponent text={"Resume"} onclick={() => setTimerOn(true)} />
      )}
    </div>
  );
}
