import { useEffect } from "react";
import { AppState } from "react-native";

// TODO inactive event only works on iOS, and the "blur" event seems not to be working on Android. Need to solve it.
const useOnInactive = (callback: () => void) => {
  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (nextAppState === "inactive") callback();
    });

    return subscription.remove;
  }, [callback]);
};

export default useOnInactive;
