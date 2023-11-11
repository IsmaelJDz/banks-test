import Cookies from "js-cookie";

const isProd = process.env.NODE_ENV === "production";

function setCookie(name: string, value: any, days: number = 7) {
  Cookies.set(name, value, { expires: days, secure: isProd });
}

function getCookie(name: string) {
  return Cookies.get(name);
}

function deleteCookie(name: string) {
  Cookies.remove(name);
}

function useCookies() {
  const banksTime = getCookie("banks_time");

  return {
    banksTime
  };
}

export { deleteCookie, getCookie, setCookie, useCookies };
