import { GetServerSideProps } from "next";

import { getData } from "@/api/index";
import { Banks } from "@/containers/banks";
import { useGlobalContext } from "@/context/global/useGlobalContext";
import { setCookie } from "@/hooks/useCookies";
import { MainLayout } from "@/layouts/MainLayout";
import { BankComponentProps } from "@/types/common";

function BanksPage({ banks }: BankComponentProps) {
  const { banksStorage, setStoredBanks } = useGlobalContext();

  if (banks.length && banksStorage.length === 0) {
    setStoredBanks(banks);
    setCookie("banks", JSON.stringify(true));
    localStorage.setItem("banks_time", new Date().toISOString());
  }

  const storageBanks = banks.length ? banks : banksStorage;

  return (
    <MainLayout title="Banks" pageDescription="The best banks in Mexico">
      <Banks banks={storageBanks} />
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const cookies = context.req.headers.cookie;

  if (cookies) {
    return {
      props: {
        banks: []
      }
    };
  }

  const banksResponse = await getData(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/banks"
      : "https://dev.obtenmas.com/catom/api/challenge/banks"
  ).catch(err => {
    console.log("ERROR", err);
  });

  return {
    props: {
      banks: banksResponse
    }
  };
};

export default BanksPage;
