import React, { useEffect, useState } from "react";

import CryptoTable from "../CryptoTable";
import { getCurrencyData } from "../../services/getData";

import "./main.css";

function Main() {
  const [currencyData, setcurrencyData] = useState([]);
  const [loaded, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setcurrencyData(await getCurrencyData());
      setLoading(true);
    };
    fetchData();
  }, []);

  return (
    <CryptoTable
      currencyData={currencyData}
      setcurrencyData={setcurrencyData}
      loaded={loaded}
    />
  );
}

export default Main;
