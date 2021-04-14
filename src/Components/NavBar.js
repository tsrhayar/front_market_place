import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";

const NavBar = (props) => {
  const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(AuthContext);

  const onClickLogoutHandler = () => {
    AuthService.logout().then((data) => {
      if (data.success) {
        setUser(data.user);
        setIsAuthenticated(false);
      }
    });
  };

  const unauthenticatedNavBar = () => {
    return (
      // Fragement
      <>
        <Link to="/">
          <li className="nav-item nav-link">Home</li>
        </Link>
        <Link to="/login">
          <li className="nav-item nav-link">Login</li>
        </Link>
        <Link to="/registre">
          <li className="nav-item nav-link">Register</li>
        </Link>
      </>
    );
  };

  const authenticatedNavBar = () => {
    return (
      <>
        <Link to="/">
          <li className="nav-item nav-link">Home</li>
        </Link>

        {console.log("pannier", user.pannier, "role", user.role, "user", user)}

        {user.role === "user" && (
          <Link to="/card">
            <li className="nav-item nav-link">Pannier</li>
          </Link>
        )}

        {user.role !== "user" && (
          <Link to="/todos">
            <li className="nav-item nav-link">Todos</li>
          </Link>
        )}

        {user.role === "superadmin" && (
          <Link to="/superadmin">
            <li className="nav-item nav-link">Super Admin</li>
          </Link>
        )}

        {(user.role === "superadmin" || user.role === "admin") && (
          <Link to="/admin">
            <li className="nav-item nav-link">Admin</li>
          </Link>
        )}

        {user.role === "seller" && (
          <Link to="/seller">
            <li className="nav-item nav-link">My Store</li>
          </Link>
        )}

        <button
          type="button"
          className="btn btn-link nav-item nav-link"
          onClick={onClickLogoutHandler}
        >
          Logout
        </button>
      </>
    );
  };

  return (
    <nav className="navbar navbar-expand-md bg-light navbar-light mb-4">
      <div className="container">
        <Link to="/">
          <div className="navbar-brand">MarketPlace</div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            {!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
