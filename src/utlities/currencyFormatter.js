export const currencyFormatter = (price) => {
  if (!price) return;
  return price.toLocaleString("en-us", {
    style: "currency",
    currency: "USD",
  });
};
