import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/Content/About.js";
import Photography from "./components/Content/Photography.js";
import Eats from "./components/Content/Eats";
import Misc from "./components/Content/Misc";
import Projects from "./components/Content/Projects";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<About />} />
        <Route path="Photography" element={<Photography />} />
        <Route path="Eats" element={<Eats />} />
        <Route path="Misc" element={<Misc />} />
        <Route path="Projects" element={<Projects />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
