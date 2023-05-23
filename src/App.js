import { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";
import Home from "../src/screens/Home";

import Footer from '../src/components/Footer/footer'

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
