import { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "../src/components/Navbar/Navbar";
import Home from "../src/screens/Home";
import SignIn from "./screens/SignIn";
import Footer from "./components/Footer/footer";
import SignUp from "./screens/Signup"
function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sign-in" element={<SignIn />} />
          <Route exact path="/sign-up" element={<SignUp />} />
        </Routes>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
