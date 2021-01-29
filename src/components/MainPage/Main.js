import React, { useEffect, useState } from "react";

import CryptoTable from "../CryptoTable";
import { getCurrencyData } from "../../services/getData";

import "./main.css";

function Main() {
  const [currencyData, setCurrencyData] = useState([]);
  const [loaded, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setCurrencyData(await getCurrencyData());
      setLoading(true);
    };
    fetchData();
  }, []);

  return (
    <CryptoTable
      currencyData={currencyData}
      setCurrencyData={setCurrencyData}
      loaded={loaded}
    />
  );
}

export default Main;
