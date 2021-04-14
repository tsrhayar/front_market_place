import React, { useEffect } from "react";
import ProductService from "../../Services/ProductService";
import { useRouteMatch } from "react-router-dom";

const DeleteFromPannier = (props) => {
  const match = useRouteMatch();
  useEffect(() => {
    ProductService.deleteFromPannier(match.params.id).then(() => {
      props.history.push("/card");
    });
  });

  return (
    <div>
      <h1 className="text-center">Loading ...</h1>
    </div>
  );
};

export default DeleteFromPannier;
