import { useEffect, useState } from "react";

export default function QuestionTimout({
  timeout = 10,
  onTimeout,
  answerState,
}) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    const timeoutFN = setTimeout(onTimeout, timeout);
    return () => clearTimeout(timeoutFN);
  }, [timeout, onTimeout]);
  useEffect(() => {
    const intervalFN = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    return () => clearInterval(intervalFN);
  }, []);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={answerState}
    />
  );
}
