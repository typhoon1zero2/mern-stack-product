import { Component } from "react";
import { signUp } from '../../utilities/users-service';
import {Link} from 'react-router-dom'

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log('test')
    try {
      const formData = { ...this.state };
      delete formData.confirm;
      delete formData.error;
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      // Baby step
      this.props.setUser(user);
    } catch {
      // An error happened on the server
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  // We must override the render method
  // The render method is the equivalent to a function-based component
  // (its job is to return the UI)
  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={this.handleSubmit}>
        <h2>REGISTER</h2>
        <br />
          <label>Name</label>
          <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange} required />
          <label>Email</label>
          <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} required />
          <label>Password</label>
          <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} required />
          <label>Confirm</label>
          <input type="password" name="confirm" placeholder="confirm" value={this.state.confirm} onChange={this.handleChange} required />
          <div className="row">
          <button type="submit" disabled={disable}>Register</button>
          <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}