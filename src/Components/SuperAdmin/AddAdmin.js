import React, { useState } from "react";
import UserService from "../../Services/UserService";
import Message from "../Message";

const AddAdmin = (props) => {
  const [user, setUser] = useState({ username: "", password: "", role: "" });
  const [message, setMessage] = useState(null);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setUser({ username: "", password: "", role: "" });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    UserService.addAdmin(user).then((data) => {
      const { message } = data;
      setMessage(message);
      resetForm();
      props.history.push("/gestionadmin");
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h3>Ajouter Admin</h3>
        <div className="form-group">
          <label htmlFor="username" className="sr-only">
            Username:
          </label>
          <input
            type="text"
            name="username"
            value={user.username}
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
            value={user.password}
            onChange={onChange}
            className="form-control"
            placeholder="Enter Password"
          />
        </div>  
        <div className="form-group">
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Register
          </button>
        </div>
      </form>
      {message ? <Message message={message} /> : null}
    </div>
  );
};

export default AddAdmin;
