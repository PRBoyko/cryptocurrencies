import React, { useState } from "react";
import CryptoTable from "../CryptoTable";

const FavoriteTable = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("favorite")) || []
  );

  return (
    <CryptoTable
      currencyData={data}
      setCurrencyData={setData}
      loaded={true}
      favorite={true}
    />
  );
};

export default FavoriteTable;