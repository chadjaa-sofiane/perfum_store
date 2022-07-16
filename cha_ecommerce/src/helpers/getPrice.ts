const CURRENCIES = [
  {
    name: "USD",
    symbol: "$",
    locales: "en-US",
  },
  {
    name: "EUR",
    symbol: "€",
    locales: "de-DE",
  },
  {
    name: "GBP",
    symbol: "£",
    locales: "en-GB",
  },
  {
    name: "pln",
    symbol: "zł",
    locales: "pl-PL",
  },
];

type currency = "USD" | "EUR" | "GBP" | "PLN";

export const getPrice = (amount: number, currency: currency = "USD") => {
  const currencyItem =
    CURRENCIES.find((f) => f.name === currency) || CURRENCIES[0];

  return Intl.NumberFormat(currencyItem.locales, {
    style: "currency",
    currency: currencyItem.name,
  }).format(amount);
};
