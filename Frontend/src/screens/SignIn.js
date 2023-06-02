import React, { Fragment, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("logged");
  };

  return (
    <Fragment>
      <section className="bg-black flex flex-col justify-center items-center space-y-10 p-10 h- ">
        <h1 className="text-white text-3xl mt-14 ">Login</h1>
        <p className="text-white text-xl ">
          <i className="fas fa-user"></i> Sign In to Your Account
        </p>
        <form className="flex flex-col " onSubmit={onSubmit}>
          <div className="mb-6">
            <input
              className="pr-28 pl-5 py-2 rounded-2xl"
              value={email}
              onChange={onChange}
              type="email"
              placeholder="Email Address"
              name="email"
              required
            />
          </div>
          <div className="mb-10">
            <input
              className="pr-28 pl-5 py-2 rounded-2xl"
              value={password}
              onChange={onChange}
              type="password"
              placeholder="Password"
              name="password"
              required
            />
          </div>
          <input type="submit" className="btn btn-primary " value="Login" />
        </form>
        <a className="text-white cursor-pointer pb-36 ">
          Don't have an account? <Link to="/sign-up">Sign Up</Link>
        </a>
      </section>
    </Fragment>
  );
};

export default SignUp;
