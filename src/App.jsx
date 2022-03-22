import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Films from "./pages/Films";
import People from "./pages/People";
import FilmDetails from "./pages/FilmDetails";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Films" element={<Films />} />
          <Route exact path="/People" element={<People />} />
          <Route exact path="/Films/:Filmid" element={<FilmDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
