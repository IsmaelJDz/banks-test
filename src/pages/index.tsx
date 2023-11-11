import { GetServerSideProps } from "next";
import { Banks } from "@/containers/banks";
import { useGlobalContext } from "@/context/global/useGlobalContext";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { MainLayout } from "@/layouts/MainLayout";
import { setCookie } from "@/hooks/useCookies";

import { getData } from "@/api/index";

function BanksPage({ banks2 }: any) {
  const { banks } = useGlobalContext();
  const [storedBanks, setStoredBanks] = useLocalStorage("banks", []);

  console.log("banks2", banks2);

  if (banks.length > 0 && storedBanks.length === 0) {
    setStoredBanks(banks);
    setCookie("banks", JSON.stringify(true));
    localStorage.setItem("banks_time", new Date().toISOString());
  }

  return (
    <p>TEST</p>
    // <MainLayout title="Banks" pageDescription="The best banks in Mexico">
    //   <Banks banks={banks} />
    // </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  // const cookies = context.req.headers.cookie;
  // console.log("cookies server =====>", cookies);

  // if (cookies) {
  //   return {
  //     props: {
  //       banks2: []
  //     }
  //   };
  // }

  const banksResponse = await getData(
    "https://dev.obtenmas.com/catom/api/challenge/banks"
  ).catch(err => {
    console.log("ERROR", err);
  });

  return {
    props: {
      banks2: banksResponse
    }
  };
};

export default BanksPage;
