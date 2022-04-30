import SignUpForm from "../../components/MainPages/auth/SignUpForm/SignUpForm";
import LoginForm from "../../components/MainPages/auth/LoginForm/LoginForm";
import { useState } from "react";
import {GiWorld} from "react-icons/gi"
export default function AuthPage({ setUser, showLogin, setShowLogin }) {
  return (
    
    <main className="auth-page">
     <br />
      <h1 className="logo"> <GiWorld /></h1>
        <h2 className="login">
          Login || Register
        </h2>

      {/* <Logo /> */}
      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}
