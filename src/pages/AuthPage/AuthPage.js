import SignUpForm from "../../components/MainPages/auth/SignUpForm/SignUpForm";
import LoginForm from "../../components/MainPages/auth/LoginForm/LoginForm";
import {GiWorld} from "react-icons/gi"
export default function AuthPage({ setUser, showLogin, setShowLogin }) {
  return (
    
    <main className="auth-page">
     <br />
      <h1 className="logo"> <GiWorld /></h1>
    

      {/* <Logo /> */}
      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}
