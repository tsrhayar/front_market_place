import React, { useEffect, useState } from "react";
import UserService from "../../Services/UserService";
import { Link } from "react-router-dom";

const GestionAdmin = (props) => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    UserService.getAdmins().then(({ admins }) => {
      setAdmins(admins);
    });
  }, []);

  return (
    <div>
      <Link to="addadmin" className="btn btn-primary mb-2">
        Add Admin
      </Link>
      <table className="table">
        <thead className="thead-dark w-50">
          <tr>
            <th>Admin</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <tr key={admin._id}>
              <td>{admin.username}</td>
              <td>
                {admin.isActive ? (
                  <Link to={`/blockadmin/${admin._id}`} className="btn btn-warning mr-2">
                    Block
                  </Link>
                ) : (
                  <Link to={`/activeadmin/${admin._id}`} className="btn btn-success mr-2">
                    Active
                  </Link>
                )}

                <Link to={`/deleteadmin/${admin._id}`} className="btn btn-danger">
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
