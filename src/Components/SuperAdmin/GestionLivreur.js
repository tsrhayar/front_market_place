import React, { useEffect, useState } from "react";
import UserService from "../../Services/UserService";
import { Link } from "react-router-dom";

const GestionAdmin = (props) => {
  const [livreurs, setLivreurs] = useState([]);

  useEffect(() => {
    UserService.getLivreurs().then(({ livreurs }) => {
      setLivreurs(livreurs);
    });
  }, []);

  return (
    <div>
      <Link to="addlivreur" className="btn btn-primary mb-2">
        Add Livreur
      </Link>
      <table className="table">
        <thead className="thead-dark w-50">
          <tr>
            <th>Livreur</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {livreurs.map((livreur) => (
            <tr key={livreur._id}>
              <td>{livreur.username}</td>
              <td>
                {livreur.isActive ? (
                  <Link to={`/blocklivreur/${livreur._id}`} className="btn btn-warning mr-2">
                    Block
                  </Link>
                ) : (
                  <Link to={`/activelivreur/${livreur._id}`} className="btn btn-success mr-2">
                    active
                  </Link>
                )}

                <Link
                  to={`/deletelivreur/${livreur._id}`}
                  className="btn btn-danger"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GestionAdmin;
