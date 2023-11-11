import { useRouter } from "next/router";
import React from "react";

import { Card } from "@/components/card";
import { BankComponentProps } from "@/types/common";

const Banks = ({ banks }: BankComponentProps) => {
  const router = useRouter();

  const handleClick = (bankId: number) => {
    router.push({
      pathname: `/banks/[id]`,
      query: { id: `${bankId}` }
    });
  };

  return (
    <>
      <h1 className="mb-5 text-lg text-center text-zinc-900">Banks</h1>

      <div className="flex flex-wrap justify-center gap-4 m-auto">
        {banks.map(bank => (
          <div key={bank.bankName} className="w-full md:w-2/3 lg:w-1/3">
            <Card
              description={bank.description}
              url={bank.url}
              bankName={bank.bankName}
              age={bank.age}
              handleClick={handleClick}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export { Banks };
