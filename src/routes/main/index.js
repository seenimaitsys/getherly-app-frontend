import React from "react";
import { Route, Routes } from "react-router-dom";

import Desktop1 from "../../layout/desktop1";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Desktop1 />} />
    </Routes>
  );
};
export default Routers;
