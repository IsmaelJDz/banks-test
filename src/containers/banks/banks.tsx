import React from "react";

import { BankComponentProps } from "@/types/common";

const Banks = ({ banks }: BankComponentProps) => {
  return (
    <div>
      <h1>Banks</h1>
      <ul>
        {banks.map(bank => {
          return (
            <li key={bank.age}>
              <h3>{bank.bankName}</h3>
              <p>{bank.description}</p>
              image:{" "}
              <img
                width={180}
                height={140}
                loading="lazy"
                src={bank.url}
                alt={bank.bankName}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { Banks };
