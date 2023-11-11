import { useContext } from "react";

import { GlobalContext } from "@/context/global/globalContext";

function useGlobalContext() {
  const { isLoading, data: banks } = useContext(GlobalContext);

  return {
    banks,
    isLoading
  };
}

export { useGlobalContext };
