interface BankProps {
  description: string;
  age: number;
  url: string;
  bankName: string;
  handleClick?: (bankId: number) => void;
}

interface BankComponentProps {
  banks: BankProps[];
}

interface BankResponseProps {
  data: BankProps[];
}

export type { BankComponentProps, BankProps, BankResponseProps };
