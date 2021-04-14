import React, { useEffect } from "react";
import ProductService from "../../Services/ProductService";
import { useRouteMatch } from "react-router-dom";

const AddToCard = (props) => {
  const match = useRouteMatch();
  useEffect(() => {
    ProductService.addToPannier(match.params.id).then(() => {
      props.history.push("/card");
    });
  });

  return (
    <div>
      <h1 className="text-center">Loading ...</h1>
    </div>
  );
};

export default AddToCard;
