import "./App.css";
import Navbar from "../src/components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/screens/Home";
import { Fragment } from "react";

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
