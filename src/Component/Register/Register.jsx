import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../../Redux/AuthSlice";

import "./RegisterStyle.css";

export default function Register() {
  const { redirectContact } = useSelector((state) => state.login);

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [img, setimg] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const validation = () => {
    let error = {};
    if (!user.first_name) {
      error.name = "Enter your first name please";
    }
    if (!user.last_name) {
      error.name = "Enter your last name please";
    }
    if (!user.email) {
      error.email = "email is required";
    }
    if (!user.password) {
      error.password = "password is required";
    }
    return error;
  };

  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (name === "first_name") {
      if (value.length === 0) {
        setUser({ ...user, first_name: "" });
        setError({ ...error, first_name: "Please enter your first name" });
      } else {
        setUser({ ...user, first_name: value });
        setError({ ...error, first_name: "" });
      }
    }
    if (name === "last_name") {
      if (value.length === 0) {
        setUser({ ...user, last_name: "" });
        setError({ ...error, last_name: "Please enter your last name" });
      } else {
        setUser({ ...user, last_name: value });
        setError({ ...error, last_name: "" });
      }
    }

    if (name === "email") {
      if (value.length === 0) {
        setUser({ ...user, email: "" });
        setError({ ...error, email: "Please put your email address" });
      } else {
        setUser({ ...user, email: value });
        setError({ ...error, email: "" });
      }
    }
    if (name === "password") {
      if (value.length === 0) {
        setUser({ ...user, password: "" });
        setError({ ...error, password: "password is Required" });
      } else {
        setUser({ ...user, password: value });
        setError({ ...error, password: "" });
      }
    }
  };
  const Submit = (e) => {
    e.preventDefault();
    setError(validation());
    let formData = new FormData();
    formData.append("first_name", user.first_name);
    formData.append("last_name", user.last_name);
    formData.append("profile_pic", img);
    formData.append("email", user.email);
    formData.append("password", user.password);
    dispatch(register(formData));
  };

  const RedirectUser = () => {
    let name = localStorage.getItem("name");
    let isInContactPage =
      window.location.pathname.toLowerCase() === "/register";
    console.log(window.location.pathname.toLowerCase());

    if (name !== null && name !== undefined && name !== "") {
      isInContactPage && navigate("/login");
    }
  };

  useEffect(() => {
    RedirectUser();
  }, [redirectContact]);
  return (
    <>
      <div class="wrapper">
        <div class="title">Register Here</div>
        <div class="social_media">
          <div class="item">
            <i class="fab fa-facebook-f"></i>
          </div>
          <div class="item">
            <i class="fab fa-twitter"></i>
          </div>
          <div class="item">
            <i class="fab fa-google-plus-g"></i>
          </div>
        </div>

        <div class="form">
          <div class="input_field">
            <input
              type="text"
              placeholder="First Name"
              class="input"
              name="first_name"
              value={user.first_name}
              onChange={(e) => postUserData(e)}
            />
            <i class="fas fa-user"></i>
          </div>
          <div class="input_field">
            <input
              type="text"
              placeholder="Last Name"
              class="input"
              name="last_name"
              value={user.last_name}
              onChange={(e) => postUserData(e)}
            />
            <i class="fas fa-user"></i>
          </div>
          <div class="input_field">
            <input
              type="email"
              placeholder="Email"
              class="input"
              name="email"
              value={user.email}
              onChange={(e) => postUserData(e)}
            />
            <i class="far fa-envelope"></i>
          </div>

          <div class="input_field">
            <input
              type="password"
              placeholder="Password"
              class="input"
              name="password"
              value={user.password}
              onChange={(e) => postUserData(e)}
            />
            <i class="fas fa-lock"></i>
          </div>
          <div>
              <label>Image</label>
              <input
                type="file"
                onChange={(e) => setimg(e.target.files[0])}
                name="profile_pic"
                accept="image/*"
              />
              <span style={{ color: "red", marginLeft: "24px" }}>
                
                {error?.img}
              </span>
            </div>
          <div class="btn">
            <button onClick={Submit}>Register</button>
          </div>
          <div class="login">
            ALREADY HAVE AN ACCOUNT ?
            <span>
              <Link to={"/login"}>Login</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
