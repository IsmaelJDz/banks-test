import axios from "axios";

import { isStaleTimeCache } from "@/utils/common";
// import { BankProps } from "@/types/common";

const base = process.env.NEXT_PUBLIC_API_ENDPOINT;

const userBase = `${base}/catom/api/challenge/banks`;

function getBanks(): Promise<any> {
  const banksStorage = localStorage.getItem("banks");

  if (banksStorage && isStaleTimeCache("banks")) {
    return Promise.resolve(JSON.parse(banksStorage));
  }

  return axios
    .get(userBase, { withCredentials: true })
    .then(res => res.data)
    .catch(() => null);
}

export { getBanks };
