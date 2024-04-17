import React from "react";
import { BrowserRouter } from "react-router-dom";
import BaseRoute from "./apps/BaseRoute";
import LayoutInit from "./component/LayoutInit";

function App({ basename }) {
  return (
    <BrowserRouter>
      <BaseRoute />
    </BrowserRouter>
  );
}

export default App;
