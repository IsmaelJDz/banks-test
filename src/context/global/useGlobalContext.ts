import { useContext } from "react";

import { GlobalContext } from "@/context/global/globalContext";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { BankProps } from "@/types/common";
import { isStaleTimeCache } from "@/utils/common";

import { BanksActions } from "./globalAction.types";

function useGlobalContext() {
  const [storedBanks, setStoredBanks] = useLocalStorage("banks", []);
  const { isLoading, dispatch } = useContext(GlobalContext);

  if (storedBanks) {
    isStaleTimeCache("banks");
  }

  const setBanksOnState = (banks: BankProps[]) => {
    dispatch({
      type: BanksActions.SET_BANKS,
      payload: banks
    });
  };

  return {
    banksStorage: storedBanks.length ? storedBanks : [],
    isLoading,
    storedBanks,
    setStoredBanks,
    setBanksOnState
  };
}

export { useGlobalContext };
