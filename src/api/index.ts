import axios from "axios";

import { isStaleTimeCache } from "@/utils/common";

const apiBase = "https://banks-test-ismaelbr7.vercel.app/api/banks";

function getBanks(): Promise<any> {
  const banksStorage = localStorage.getItem("banks");

  if (banksStorage && isStaleTimeCache("banks")) {
    return Promise.resolve(JSON.parse(banksStorage));
  }

  return axios
    .get(apiBase, { withCredentials: false })
    .then(res => res.data)
    .catch(() => null);
}

const getData = async (api: string) => {
  const response = await fetch(`${api}`);
  const banksData = await response.json();

  return banksData;
};

export { getBanks, getData };
