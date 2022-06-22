export interface TransactionEntity {
  date: string;
  account: number;
  amount: number;
  counterparty: string;
  id: number;
  iban: string;
  type: string;
  currency: string;
}

export let transactionsTable:TransactionEntity[] = [
  {
    date: "2021-12-31",
    account: 12322,
    amount: 345,
    counterparty: "Nordea",
    id: 1,
    iban: "AB24GHIJ02030425874392",
    type: "Deposit",
    currency: "SEK",
  },
  {
    date: "2021-12-31",
    account: 2022,
    amount: 2424,
    counterparty: "Swedbank",
    id: 2,
    iban: "GB24GHIJ02030425874392",
    type: "Withdrawal",
    currency: "USD"

  },
  {
    date: "2021-12-31",
    account: 12322,
    amount: 4532,
    counterparty: "Nordea",
    id: 3,
    iban: "SE24GHIJ02030425874392",
    type: "Deposit",
    currency: "SEK",

  },
  {
    date: "2021-12-31",
    account: 2022,
    amount: 6756,
    counterparty: "Nordea",
    id: 4,
    iban: "GE24GHIJ02030425874392",
    type: "Deposit",
    currency: "USD"

  },
  {
    date: "2021-12-31",
    account: 1337,
    amount: -49,
    counterparty: "Patreon",
    id: 5,
    iban: "DA4GHIJ02030425874392",
    type: "Payment",
    currency: "EUR"


  },
  {
    date: "2021-12-31",
    account: 1337,
    amount: 345,
    counterparty: "Swedbank",
    id: 6,
    iban: "AK24GHIJ02030425874392",
    type: "Withdrawal",
    currency: "EUR"

  },
  {
    date: "2021-12-31",
    account: 1337,
    amount: 50,
    counterparty: "SEB",
    id: 7,
    iban: "BF24GHIJ02030425874392",
    type: "Withdrawal",
    currency: "EUR"


  },
  {
    date: "2021-12-31",
    account: 1337,
    amount: -200,
    counterparty: "Danske Bank",
    id: 8,
    iban: "HB24GHIJ02030425874392",
    type: "Withdrawal",
    currency: "EUR"



  },
  {
    date: "2021-12-31",
    account: 1337,
    amount: -12,
    counterparty: "SBAB",
    id: 9,
    iban: "RQ24GHIJ02030425874392",
    type: "Withdrawal",
    currency: "EUR"

  }
];
