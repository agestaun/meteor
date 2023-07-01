import { useState } from "react";

const useChronometer = () => {
  const [startTime, setStartTime] = useState(0);

  const startChronometer = () => setStartTime(Date.now());
  const getElapsedTime = () => Date.now() - startTime;

  return {
    getElapsedTime,
    startChronometer,
  };
};

export default useChronometer;
