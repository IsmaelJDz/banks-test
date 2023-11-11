import { createContext } from "react";
import { RefetchOptions } from "react-query/types/core/types";

import { BankProps } from "@/types/common";

interface ContextProps {
  data: BankProps[];
  isLoading: boolean;
  refetch: (options?: RefetchOptions | undefined) => Promise<any>;
  dispatch: React.Dispatch<any>;
}

export const GlobalContext = createContext({} as ContextProps);
