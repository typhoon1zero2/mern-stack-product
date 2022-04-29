import { useState } from 'react';
import * as userService from '../../utilities/users-service';
import { Link } from 'react-router-dom'

export default function LoginForm ({ setUser }) {
    const [credentials, setCredentials ] = useState({
        email: '',
        password: ''
    })
    const [ error, setError ] = useState('')

    const handleChange = (evt) => {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        setError('');
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try{
            const user = await userService.login(credentials);
            setUser(user)
        }catch(error){
            setError(error.message)
        }
    }

return (
    <div>
        <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
        <h2>LOGIN</h2>
        <br />
            <label>Email</label>
            <input type="email" name="email" placeholder='email' value={credentials.email} onChange={handleChange} required />
            <label>Password</label>
            <input type="password" name="password" placeholder='password' value={credentials.password} onChange={handleChange} required />
            <div className="row">
                    <button type="submit">Login</button>
                    {/* <Link to="/register">Register</Link> */}
                </div>
        </form>
        </div>
        <h1 className="error-message">&nbsp;{error}</h1>
    </div>
)
    
}