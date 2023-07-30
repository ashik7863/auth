import React from "react";
import { Link } from "react-router-dom";
import './LoginStyle.css';

export default function Login() {
  return (
    <>
      <div class="wrapper">
        <div class="title">Login</div>
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
            <input type="email" placeholder="Email" class="input" />
            <i class="far fa-envelope"></i>
          </div>

          <div class="input_field">
            <input type="password" placeholder="Password" class="input" />
            <i class="fas fa-lock"></i>
          </div>

          <div class="btn">
            <button>Login</button>
          </div>

          <div class="register">
          DON'T HAVE AN ACCOUNT ? 
          <span>
            <Link to={'/register'}>Register</Link>
          </span>
          </div>
        </div>
      </div>
    </>
  );
}
