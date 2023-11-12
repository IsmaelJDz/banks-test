import { useContext } from "react";

import { GlobalContext } from "@/context/global/globalContext";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { isStaleTimeCache } from "@/utils/common";

function useGlobalContext() {
  const [storedBanks, setStoredBanks] = useLocalStorage("banks", []);
  const { isLoading } = useContext(GlobalContext);

  if (storedBanks) {
    isStaleTimeCache("banks");
  }

  return {
    banksStorage: storedBanks.length ? storedBanks : [],
    isLoading,
    storedBanks,
    setStoredBanks
  };
}

export { useGlobalContext };
