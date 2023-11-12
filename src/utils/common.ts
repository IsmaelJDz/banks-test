import { differenceInHours } from "date-fns";

import { deleteCookie } from "@/hooks/useCookies";
import { BankProps } from "@/types/common";

function isStaleTimeCache(target: string) {
  const date = new Date(localStorage.getItem(`${target}_time`)!);
  const now = new Date();

  const diff = differenceInHours(now, date);

  if (diff < 1) {
    return true;
  }

  localStorage.removeItem(target);
  localStorage.removeItem(`${target}_time`);
  deleteCookie("banks");
  return false;
}

function filterBanks(banks: BankProps[], id: string) {
  return banks.find((bankItem: BankProps) => bankItem.age.toString() === id);
}

export { filterBanks, isStaleTimeCache };
