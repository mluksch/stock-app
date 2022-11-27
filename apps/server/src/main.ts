import { getStockData } from "@stock/stock-api";

export const main = async () => {
  console.log("test 7:" + (await getStockData()));
};

main();
