import Image from "next/image";
import React from "react";

import { BankProps } from "@/types/common";

const Card = ({ description, url, bankName, age, handleClick }: BankProps) => {
  const urlComplete = `${url}.png`;

  if (handleClick === undefined) {
    handleClick = () => {};
  }

  return (
    <article
      className="w-full p-6 duration-500 ease-in-out transform shadow-md cursor-pointer sm:transition-all sm:hover:-translate-y-2 sm:hover:scale-9"
      onClick={() => handleClick!(age)}
    >
      <div className="flex gap-6 mb-4">
        <Image
          src={urlComplete}
          alt={bankName}
          priority
          width={120}
          height={120}
        />
        <div className="mb-8">
          <p className="font-bold">
            Descripción: <span className="font-normal"> {description} </span>
          </p>
          <p className="font-bold">
            Antiguedad del banco:{" "}
            <span className="font-normal">{age} años</span>
          </p>
        </div>
      </div>
      <h1 className="font-bold">
        Nombre del banco: <span className="font-normal"> {bankName} </span>
      </h1>
    </article>
  );
};

export { Card };
