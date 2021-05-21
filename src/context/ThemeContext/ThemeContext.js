import React from "react";
import themes from "./themes";

const ThemeContext = React.createContext(themes.light);

function reducer(state, action) {
  switch (action.type) {
    case "light": {
      return { ...state, ...themes.light };
    }
    case "dark": {
      return { ...state, ...themes.dark };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
function ThemeProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, { ...themes.light });
  const value = { state, dispatch };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export { ThemeProvider, useTheme };
