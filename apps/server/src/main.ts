import { getStockData } from "@stock/stock-api";

export const main = async () => {
  console.log("abbbb:" + (await getStockData()));
};

main();
