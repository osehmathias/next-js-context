import {
  useEffect,
  useReducer,
  createContext,
  useContext,
  useMemo,
} from "react";
import { AppReducer, initialState } from "./AppReducer";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    // checks if there already is a state in localStorage
    if (JSON.parse(localStorage.getItem("state"))) {
      // if yes, update the current state with the stored one
      dispatch({
        type: "init_stored",
        item: JSON.parse(localStorage.getItem("state")),
      });
    }
  }, []);
  useEffect(() => {
    if (state !== initialState) {
      // creates and / or sets a new localStorage variable called "state"
      // this is used to persist data in localStorage
      localStorage.setItem("state", JSON.stringify(state));
    }
  }, [state]);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
