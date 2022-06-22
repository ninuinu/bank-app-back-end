export interface AccountEntity {
  number: number;
  name: string;
  balance: number;
  userId: number;
  currency: string;
}

export let accountsTable: AccountEntity[] = [
  {
    number: 12322,
    name: "Lönekonto",
    balance: 345,
    userId: 2451,
    currency: "SEK"

  },
  {
    number: 2829,
    name: "Sparkonto",
    balance: 2424,
    userId: 2451,
    currency: "SEK"
  },
  {
    number: 7777,
    name: "Krypto",
    balance: 1.2,
    userId: 2451,
    currency: "ETH"
  },
  {
    number: 2022,
    name: "Semesterspar",
    balance: 6756,
    userId: 2451,
    currency: "USD"
  },
  {
    number: 1337,
    name: "Buffert",
    balance: 345,
    userId: 2451,
    currency: "EUR"
  },
  {
    number: 4037,
    name: "TJABBA",
    balance: 34000,
    userId: 5462,
    currency: "CHF"
  }
];


