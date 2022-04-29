import SignUpForm from "../../components/MainPages/auth/SignUpForm/SignUpForm";
import LoginForm from "../../components/MainPages/auth/LoginForm/LoginForm";
import { useState } from "react";
// import Logo from "../../components/Logo/Logo"

export default function AuthPage({ setUser, showLogin, setShowLogin }) {
  return (
    <main className="auth-page">
      <div>
        <h1><em>Hello</em> World!</h1>
        <br />
        <p>
          Welcome to my <em>ty</em>Phoong Store!
        </p>
      </div>
      {/* <Logo /> */}
      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}
