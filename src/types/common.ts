interface BankProps {
  description: string;
  age: number;
  url: string;
  bankName: string;
}

interface BankComponentProps {
  banks: BankProps[];
}

export type { BankProps, BankComponentProps };
