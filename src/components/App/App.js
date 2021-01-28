import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "../MainPage/Main";
import FavoriteTable from "../FavoriteTable";

function App() {
  return (
    <BrowserRouter>
      <Route exact path={"/"} component={Main} />
      <Route path={"/all"} component={Main} />
      <Route path={"/favorite"} component={FavoriteTable} />
    </BrowserRouter>
  );
}

export default App;
