import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Work from "./pages/Work";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {GlobalStyles} from "./App.style";

function App() {
  return (
    <>
    <GlobalStyles />
    <Router>
      <Routes>
        <Route path="/work" element={ <Work onWork="onWork" /> }>
        </Route>
        <Route path="/contact" element={ <Contact onContact="onContact" /> }>
        </Route>
        <Route path="/about" element={ <About onAbout="onAbout" /> }>
        </Route>
        <Route path="/" element={ <Home onHome="onHome" /> }>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
