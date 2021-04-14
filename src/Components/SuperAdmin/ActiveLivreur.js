import React, { useEffect } from "react";
import UserService from "../../Services/UserService";
import { useRouteMatch } from "react-router-dom";

const ActiveAdmin = (props) => {
  const match = useRouteMatch();
  useEffect(() => {
    UserService.activeAdmin(match.params.id).then(() => {
      props.history.push("/gestionlivreur");
    });
  });

  return (
    <div>
      <h1 className="text-center">Loading ...</h1>
    </div>
  );
};

export default ActiveAdmin;
