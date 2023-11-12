import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

import { getData } from "@/api/index";
import { Card } from "@/components/card";
import { Loader } from "@/components/loader";
import { BankProps } from "@/types/common";
import { filterBanks } from "@/utils/common";

export default function Main({ banks }: { banks: BankProps }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  const onBackClick = () => {
    router.back();
  };

  const { age, bankName, description, url } = banks;

  return (
    <div>
      <p
        className="flex items-center gap-2 pt-2 ml-4 cursor-pointer"
        onClick={onBackClick}
      >
        <Image src="/images/arrow-left.svg" alt="back" width={30} height={30} />
        back previous page
      </p>
      <div className="flex flex-col items-center justify-center w-full m-auto md:w-1/3 lg:w-2/3">
        <Image src={url} alt={bankName} priority width={120} height={120} />
        <h3 className="font-bold text-blue-900"> {bankName} </h3>
        <Card
          description={description}
          url={url}
          bankName={bankName}
          age={age}
        />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug as string;

  const banksResponse = await getData(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/banks"
      : "https://dev.obtenmas.com/catom/api/challenge/banks"
  ).catch(err => {
    console.log("ERROR", err);
  });

  const bank = filterBanks(banksResponse, slug);

  return {
    props: {
      banks: bank
    }
  };
};
