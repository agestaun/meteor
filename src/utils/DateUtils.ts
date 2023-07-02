export const timestampToSecondsAndMillis = (milliseconds: number): string => {
  const date = new Date(milliseconds);
  const seconds = date.getSeconds();
  const millis2Digits = date
    .getMilliseconds()
    .toString()
    .padStart(3, "0")
    .slice(0, 2);
  return `${seconds},${millis2Digits}`;
};
