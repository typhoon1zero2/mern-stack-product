import SignUpForm from "../../components/MainPages/auth/SignUpForm/SignUpForm"
import LoginForm from "../../components/MainPages/auth/LoginForm/LoginForm"
import { useState } from "react"



export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <main>
            <div>
                <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
            </div>
            {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
        </main>
    );
}