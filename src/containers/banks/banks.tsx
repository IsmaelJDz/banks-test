import React from "react";

import { BankComponentProps } from "@/types/common";

const Banks = ({ banks }: BankComponentProps) => {
  console.log("banks", banks);

  return (
    <div>
      <h1>Banks</h1>
      <ul>
        {banks.map(bank => {
          return (
            <li key={bank.age}>
              <h3>{bank.bankName}</h3>
              <p>{bank.description}</p>
              image: <img src={bank.url} alt={bank.bankName} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { Banks };
