import React, { useState } from "react";
import CryptoTable from "../CryptoTable";

const FavoriteTable = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("favorite"))
  );

  return (
    <CryptoTable currencyData={data} setcurrencyData={setData} loaded={true} />
  );
};

export default FavoriteTable;
