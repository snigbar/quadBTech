import { useContext } from "react";

import { TContextData } from "../interfaces/interfaces";
import { AppContext } from "../context/appContext/appContext";

// converting context to hook
export const useAppContext = (): TContextData => {
  const contex = useContext(AppContext);
  return contex as TContextData;
};
