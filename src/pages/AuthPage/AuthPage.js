import SignUpForm from "../../components/MainPages/auth/SignUpForm/SignUpForm"
import LoginForm from "../../components/MainPages/auth/LoginForm/LoginForm"
import { useState } from "react"



export default function AuthPage({ setUser, showLogin,
    setShowLogin}) {
    

    return (
        <main>
            <div>
                <h3></h3>
            </div>
            {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
        </main>
    );
}