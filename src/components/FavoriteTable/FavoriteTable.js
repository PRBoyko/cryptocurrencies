import React from "react";
import { connect } from "react-redux";

import CryptoTable from "../CryptoTable";

const FavoriteTable = ({ data }) => {
  return <CryptoTable currencyData={data} loaded={true} favorite={true} />;
};
const mapStateToProps = (state) => {
  return {
    data: state.changeData.favoriteTable,
  };
};

export default connect(mapStateToProps)(FavoriteTable);
