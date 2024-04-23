import { useEffect } from "react";

export default function Timer({ secondsRemaining, dispatch }) {
  const min = (secondsRemaining / 60).toFixed(0);
  const sec = (secondsRemaining % 60).toFixed(0);

  useEffect(
    function () {
      const intervalId = setInterval(function () {
        dispatch({ type: "timer" });
      }, 1000);

      return function () {
        clearInterval(intervalId);
      };
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {min < 10 && "0"}
      {min}:{sec < 10 && "0"}
      {sec}
    </div>
  );
}
