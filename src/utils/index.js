import React, { useEffect, useState } from "react";
import { Keyboard } from "react-native";

export const useKeyPad = () => {
  // custom hook which return keypad is visible
  const [keyPadStatus, setKeypadStatus] = useState(false);

  const keyboardDidShow = (e) => {
    //
    setKeypadStatus(e.endCoordinates.height);
  };

  const keyboardDidHide = () => {
    setKeypadStatus(false);
  };
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", keyboardDidHide);
    };
  }, []);

  return keyPadStatus;
};

export const removeObjectFromArray = (items, prop, value) => {
  return items.filter((val) => val[prop] !== value);
};
