import React, { useState, useContext } from "react";
import AuthService from "../Services/AuthService";
import Message from "../Components/Message";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.login(user).then((data) => {
      const { isAuthenticated, user, message } = data;
      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        props.history.push("/");
      } else if (message) {
        setMessage(message);
      }
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h3>Please sign in</h3>
        <div className="form-group">
          <label htmlFor="username" className="sr-only">
            Username:
          </label>
          <input
            type="text"
            name="username"
            onChange={onChange}
            className="form-control"
            placeholder="Enter Username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="sr-only">
            Password:
          </label>
          <input
            type="password"
            name="password"
            onChange={onChange}
            className="form-control"
            placeholder="Enter Password"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Log in
          </button>
        </div>
      </form>
      <Link className="btn btn-sm btn-primary" to="/registre">Registre</Link>
      {message ? <Message message={message} /> : null}
    </div>
  );
};

export default Login;
