import React from "react";
import { Link } from "react-router-dom";

const SuperAdmin = () => {
  return (
    <div>
      <Link className="btn btn-primary mr-1" to="/gestionadmin">
        Gestion Admin
      </Link>
      <Link className="btn btn-primary" to="/gestionlivreur">
        Gestion Livreur
      </Link>
    </div>
  );
};

export default SuperAdmin;
