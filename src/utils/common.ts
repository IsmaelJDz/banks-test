import { differenceInHours } from "date-fns";

function isStaleTimeCache(target: string) {
  const date = new Date(localStorage.getItem(`${target}_time`)!);
  const now = new Date();

  const diff = differenceInHours(now, date);

  if (diff < 1) {
    return true;
  }

  localStorage.removeItem(target);
  localStorage.removeItem(`${target}_time`);
  return false;
}

export { isStaleTimeCache };
