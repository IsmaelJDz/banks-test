import { BankProps } from "@/types/common";

enum BanksActions {
  SET_BANKS = "SET_ME"
}

interface PropsResponse {
  banks: BankProps[];
}

interface GlobalState {
  data: PropsResponse;
}

interface MainProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

type BankActionType = {
  type: "Banks - Set ResponseBanks";
  payload: BankProps[];
};

export { BanksActions };
export type { BankActionType, GlobalState, MainProviderProps, PropsResponse };
