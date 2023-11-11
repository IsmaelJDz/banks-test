import { GlobalState, BankActionType } from "./globalAction.types";

export const globalReducer = (
  state: GlobalState,
  action: BankActionType
): GlobalState => {
  switch (action.type) {
    case "Banks - Set ResponseBanks":
      return {
        ...state,
        data: {
          banks: action.payload
        }
      };

    default:
      return state;
  }
};
