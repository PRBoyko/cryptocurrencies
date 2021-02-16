import React, { useEffect } from "react";

import CryptoTable from "../CryptoTable";
import { getCurrencyData } from "../../services/getData";
import { connect } from "react-redux";

import "./main.css";
import * as actions from "../../actions/actions";

function Main({ receiveData }) {
  useEffect(() => {
    const fetchData = async () => {
      receiveData(await getCurrencyData());
    };
    fetchData();
  }, []);

  return <CryptoTable />;
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps, actions)(Main);
