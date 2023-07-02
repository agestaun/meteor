export const formatTimestampToString = (milliseconds: number): string => {
  const date = new Date(milliseconds);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const millis2Digits = date
    .getMilliseconds()
    .toString()
    .padStart(3, "0")
    .slice(0, 2);

  if (minutes) {
    // TODO fix singular and plural using i18.
    const minuteStr = minutes === 1 ? "minute" : "minutes";
    return `${minutes} ${minuteStr} ${seconds},${millis2Digits} seconds`;
  } else {
    return `${seconds},${millis2Digits} seconds`;
  }
};
