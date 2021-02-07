import React, { useEffect} from "react";

import CryptoTable from "../CryptoTable";
import { getCurrencyData } from "../../services/getData";
import {connect} from 'react-redux';

import "./main.css";
import * as actions from "../../actions/actions";


function Main({currencyData, isLoaded,receiveData}) {

  useEffect(() => {
    const fetchData = async () => {
      receiveData(await getCurrencyData());
    };
    fetchData();
  }, []);

  return (

      <CryptoTable
          currencyData={currencyData}
          loaded={isLoaded}
      />
  );
}

const mapStateToProps = (state) =>{
  return{
    currencyData:state.dataApi,
    isLoaded: state.isLoaded
  }
}

export default connect(mapStateToProps,actions)(Main);
