import { FC, useReducer } from "react";
import { useQuery } from "react-query";

import { getBanks } from "@/api/index";
import { Loader } from "@/components/loader";

import { GlobalContext } from "./";
import { BANKS } from "./global.constants";
import { GlobalState, MainProviderProps } from "./globalAction.types";
import { globalReducer } from "./globalReducer";

const UI_INITIAL_STATE: GlobalState = {
  data: {
    banks: []
  }
};

export const GlobalProvider: FC<MainProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, UI_INITIAL_STATE);

  const { data, isLoading, refetch } = useQuery(BANKS, getBanks);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        data,
        dispatch,
        isLoading,
        refetch
      }}
    >
      {isLoading ? <Loader /> : children}
    </GlobalContext.Provider>
  );
};
