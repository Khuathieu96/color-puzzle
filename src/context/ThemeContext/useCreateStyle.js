import React from "react";
import { useTheme } from "./ThemeContext";
// import { Theme } from "./Theme.interface";
// import { useTheme } from "./Theme.context";
// Create a type alias for our generator function
// Notice that it's matching the form of the 'createStyles'
// function which we've used previously

const useCreateStyle = fn => {
  const { state } = useTheme();
  const ThemeAwareObject = React.useMemo(() => fn(state), [fn, state]);
  return ThemeAwareObject;
};
export { useCreateStyle };
