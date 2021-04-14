import React, { useEffect } from "react";
import UserService from "../../Services/UserService";
import { useRouteMatch } from "react-router-dom";

const ActiveLivreur = (props) => {
  const match = useRouteMatch();
  useEffect(() => {
    UserService.activeLivreur(match.params.id).then(() => {
      props.history.push("/gestionadmin");
    });
  });

  return (
    <div>
      <h1 className="text-center">Loading ...</h1>
    </div>
  );
};

export default ActiveLivreur;
